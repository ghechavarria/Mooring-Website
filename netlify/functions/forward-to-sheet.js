/**
 * Netlify Form notification → Apps Script forwarder.
 * Background function: Netlify gets an instant 202, and this keeps
 * running afterward to verify the request and deliver it to Apps Script.
 */
import jwt from "jsonwebtoken";
import crypto from "node:crypto";

export const config = {
  path: "/forward-to-sheet",
  background: true,
};

export default async (req) => {
  const rawBody = await req.text();

  // 1. Verify this request actually came from Netlify's form webhook sender
  const signature = req.headers.get("x-webhook-signature");
  const netlifySecret = process.env.NETLIFY_WEBHOOK_SECRET;

  if (!isValidNetlifySignature(signature, rawBody, netlifySecret)) {
    console.error("Rejected: invalid or missing Netlify signature");
    return;
  }

  // 2. Forward to Apps Script, with our own shared secret embedded in the body
  const appsScriptUrl = process.env.APPS_SCRIPT_WEBHOOK_URL;
  const sharedSecret = process.env.FORWARD_SHARED_SECRET;

  if (!appsScriptUrl || !sharedSecret) {
    console.error("Missing APPS_SCRIPT_WEBHOOK_URL or FORWARD_SHARED_SECRET env var");
    return;
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch (err) {
    console.error("Failed to parse incoming JSON body:", err);
    return;
  }

  payload.forwardSecret = sharedSecret;

  try {
    const res = await fetch(appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });
    console.log("Apps Script responded with status:", res.status);
  } catch (err) {
    console.error("Apps Script forward failed:", err);
  }
};

function isValidNetlifySignature(token, rawBody, secret) {
  if (!token || !secret) return false;
  try {
    const decoded = jwt.verify(token, secret, {
      issuer: "netlify",
      algorithms: ["HS256"],
    });
    const hash = crypto.createHash("sha256").update(rawBody).digest("hex");
    return decoded.sha256 === hash;
  } catch (err) {
    console.error("JWT verification error:", err.message);
    return false;
  }
}