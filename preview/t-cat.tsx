import fs from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { CatSvg } from "@/components/PrideFlag";
const css = fs.readFileSync("out/index.html", "utf8").match(/<style>([\s\S]*?)<\/style>/)![1];
const poses = ["walk", "prowl", "crouch", "leap", "sit", "groom"] as const;
const body = poses.map((p) => `<figure style="display:inline-block;margin:10px;text-align:center"><div style="transform:scale(2.4);transform-origin:top left;width:182px;height:134px">${renderToStaticMarkup(<CatSvg pose={p} />)}</div><figcaption>${p}</figcaption></figure>`).join("");
fs.writeFileSync("out/cats.html", `<html><head><style>${css} *{animation-play-state:paused!important}</style></head><body style="background:#f3f3ee;padding:20px">${body}</body></html>`);
