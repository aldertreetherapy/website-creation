// Sends visitors from aldertreetherapy.com (no www) to www.aldertreetherapy.com,
// so search engines see one address for the site.
export const onRequest = async (context) => {
  const url = new URL(context.request.url);
  if (url.hostname === "aldertreetherapy.com") {
    url.hostname = "www.aldertreetherapy.com";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
};
