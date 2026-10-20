/**
 * MCP connector for AI agents (Model Context Protocol, streamable HTTP, read-only).
 * Lets assistants like Claude and ChatGPT look up practice details and availability,
 * then send people to the Jane booking page. It never books, and never collects personal information.
 * All facts come from /agent-info.json, which is built from the website's content files.
 */

const PROTOCOL_VERSION = "2025-06-18";
const SERVER_INFO = { name: "alder-tree-therapy", title: "Alder Tree Therapy", version: "1.0.0" };

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Mcp-Session-Id, Mcp-Protocol-Version",
};

const TOOLS = [
  {
    name: "get_practice_overview",
    title: "Practice overview",
    description:
      "Who Tanya Fridland, LCSW is, who she works with (working parents in demanding careers and adults with ADHD), her approach, format (telehealth across New York State), and credentials.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "check_availability",
    title: "Check availability",
    description:
      "Whether the practice is accepting new clients, a summary of current availability, and the booking page link where live openings are shown.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "get_booking_link",
    title: "Get booking link",
    description:
      "The link where a person can book a free consultation themselves. Use this when the person is ready to book. Do not book on their behalf without explicit consent.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "check_service_area",
    title: "Check service area",
    description:
      "Check whether a location in the U.S. can be served. Sessions are by telehealth for anyone physically located in New York State during sessions.",
    inputSchema: {
      type: "object",
      properties: {
        location: { type: "string", description: "City, county, region, or state, e.g. 'Buffalo, NY' or 'Westchester'." },
      },
      required: ["location"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "get_insurance_info",
    title: "Insurance and payment",
    description:
      "How out-of-network benefits, superbills, and reimbursement work with this practice. Fees are discussed during the free consultation.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: "search_faq",
    title: "Search FAQs",
    description: "Answers to common questions (ADHD, working parents, scheduling, privacy, insurance). Leave the query empty to list all.",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "Words to search for, e.g. 'diagnosis' or 'employer'." } },
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
];

const OTHER_STATES = /\b(new jersey|nj|connecticut|ct|pennsylvania|pa|massachusetts|ma|vermont|vt|florida|fl|california|ca|texas|tx)\b/i;

function text(obj) {
  const t = typeof obj === "string" ? obj : JSON.stringify(obj, null, 2);
  return { content: [{ type: "text", text: t }], structuredContent: typeof obj === "string" ? undefined : obj };
}

function runTool(name, args, info) {
  switch (name) {
    case "get_practice_overview":
      return text({
        practice: info.practice,
        clinician: info.clinician,
        services: info.services,
        serviceArea: info.serviceArea.summary,
        booking: info.booking.url,
      });
    case "check_availability":
      return text({ ...info.availability, bookingUrl: info.booking.url, instructions: info.booking.instructionsForAgents });
    case "get_booking_link":
      return text({ bookingUrl: info.booking.url, howToBook: info.booking.howToBook, instructions: info.booking.instructionsForAgents });
    case "check_service_area": {
      const loc = String(args?.location || "").trim();
      const lower = loc.toLowerCase();
      const all = info.serviceArea.regions.flatMap((r) => [r.name, ...r.counties, ...r.places]).map((x) => x.toLowerCase());
      const mentionsNY = /\bny\b|new york/.test(lower);
      const known = all.some((x) => lower.includes(x.replace(/ \(.*\)$/, "")) || x.includes(lower));
      const otherState = OTHER_STATES.test(lower) && !mentionsNY;
      let result;
      if (otherState) result = { location: loc, canServe: false, reason: "Tanya is licensed in New York State. Clients must be physically located in New York during sessions." };
      else if (mentionsNY || known) result = { location: loc, canServe: true, reason: "Telehealth sessions are available anywhere in New York State.", bookingUrl: info.booking.url };
      else result = { location: loc, canServe: "unknown", reason: "Sessions are available to anyone physically located in New York State during sessions. Confirm the person will be in New York." };
      return text(result);
    }
    case "get_insurance_info":
      return text(info.insurance);
    case "search_faq": {
      const q = String(args?.query || "").toLowerCase().trim();
      const words = q.split(/\s+/).filter(Boolean);
      const hits = words.length
        ? info.faqs.filter((f) => words.some((w) => (f.question + " " + f.answer).toLowerCase().includes(w)))
        : info.faqs;
      return text({ results: hits.length ? hits : info.faqs, note: hits.length ? undefined : "No exact match; showing all FAQs." });
    }
    default:
      return null;
  }
}

function rpcResult(id, result) {
  return { jsonrpc: "2.0", id, result };
}
function rpcError(id, code, message) {
  return { jsonrpc: "2.0", id: id ?? null, error: { code, message } };
}

async function handleMessage(msg, info) {
  if (!msg || msg.jsonrpc !== "2.0" || typeof msg.method !== "string") return rpcError(msg?.id, -32600, "Invalid request");
  const isNotification = msg.id === undefined || msg.id === null;
  switch (msg.method) {
    case "initialize":
      return rpcResult(msg.id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions:
          "Read-only information about Alder Tree Therapy (Tanya Fridland, LCSW): telehealth therapy across New York State for working parents and adults with ADHD. Use check_availability for current availability and get_booking_link when the person is ready to book; the person books on the Jane page themselves. Never collect health information. For emergencies, direct people to 988 or 911.",
      });
    case "ping":
      return rpcResult(msg.id, {});
    case "tools/list":
      return rpcResult(msg.id, { tools: TOOLS });
    case "tools/call": {
      const out = runTool(msg.params?.name, msg.params?.arguments, info);
      return out ? rpcResult(msg.id, out) : rpcError(msg.id, -32602, `Unknown tool: ${msg.params?.name}`);
    }
    default:
      if (isNotification) return null; // e.g. notifications/initialized
      return rpcError(msg.id, -32601, `Method not found: ${msg.method}`);
  }
}

export const onRequestOptions = () => new Response(null, { status: 204, headers: CORS });

export const onRequestGet = () =>
  new Response(
    JSON.stringify({
      name: SERVER_INFO.title,
      description: "Read-only MCP connector (streamable HTTP). POST JSON-RPC requests to this URL.",
      tools: TOOLS.map((t) => t.name),
    }),
    { status: 200, headers: { "Content-Type": "application/json", ...CORS } },
  );

export const onRequestPost = async ({ request, env }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(rpcError(null, -32700, "Parse error"), { status: 400, headers: CORS });
  }
  const infoRes = await env.ASSETS.fetch(new URL("/agent-info.json", request.url));
  const info = await infoRes.json();
  const messages = Array.isArray(body) ? body : [body];
  const replies = (await Promise.all(messages.map((m) => handleMessage(m, info)))).filter(Boolean);
  if (replies.length === 0) return new Response(null, { status: 202, headers: CORS });
  const payload = Array.isArray(body) ? replies : replies[0];
  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: { "Content-Type": "application/json", "Mcp-Protocol-Version": PROTOCOL_VERSION, ...CORS },
  });
};
