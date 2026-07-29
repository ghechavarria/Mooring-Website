/**
 * Netlify Form notification → Apps Script forwarder.
 * Always returns HTTP 200 so Netlify does not disable the webhook.
 * Set APPS_SCRIPT_WEBHOOK_URL to the Apps Script /exec URL (Netlify env only).
 */
export default async (req) => {
  let body = "";
  try {
    body = await req.text();
  } catch (err) {
    console.error("Failed to read request body:", err);
  }

  const appsScriptUrl = process.env.APPS_SCRIPT_WEBHOOK_URL;
  if (!appsScriptUrl) {
    console.error("APPS_SCRIPT_WEBHOOK_URL is not set");
    return new Response(JSON.stringify({ ok: false, error: "missing_url" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
      redirect: "follow",
    });
  } catch (err) {
    console.error("Apps Script forward failed:", err);
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const config = {
  path: "/forward-to-sheet",
};
