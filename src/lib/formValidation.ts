/** Shared client-side rules for site forms. */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_RE = /^\+?[\d\s().-]{7,20}$/;
const PHONE_DIGIT_RE = /\d/g;

export function isValidEmail(value: string): boolean {
  const email = value.trim();
  if (!email || email.length > 254) return false;
  return EMAIL_RE.test(email);
}

/** Accepts with or without protocol; returns normalized https URL or "". */
export function normalizeWebsite(value: string): string {
  const raw = value.trim();
  if (!raw) return "";
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(withProtocol);
    if (url.protocol !== "http:" && url.protocol !== "https:") return "";
    if (!url.hostname.includes(".")) return "";
    return url.toString();
  } catch {
    return "";
  }
}

export function isValidWebsite(value: string): boolean {
  const raw = value.trim();
  if (!raw) return true;
  return normalizeWebsite(raw) !== "";
}

export function isValidPhone(value: string): boolean {
  const phone = value.trim();
  if (!phone) return true;
  if (!PHONE_RE.test(phone)) return false;
  const digits = phone.match(PHONE_DIGIT_RE)?.length ?? 0;
  return digits >= 7 && digits <= 15;
}
