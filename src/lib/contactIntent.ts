// Passes context from Blog / Case-study CTAs into the homepage contact form.
// Same-tab only (sessionStorage), consumed once, then cleared.
export interface ContactIntent {
  subject: string;
  message: string;
}

const KEY = 'contact-intent';

export function setContactIntent(intent: ContactIntent): void {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(intent));
  } catch {
    // Private mode — the form just stays empty.
  }
}

export function takeContactIntent(): ContactIntent | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    sessionStorage.removeItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ContactIntent>;
    if (typeof parsed.subject !== 'string' || typeof parsed.message !== 'string') {
      return null;
    }
    return { subject: parsed.subject, message: parsed.message };
  } catch {
    return null;
  }
}
