"use server";

type ContactState = {
  ok: boolean;
  message: string;
};

function field(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendContactMessage(_state: ContactState, formData: FormData): Promise<ContactState> {
  const name = field(formData, "name");
  const email = field(formData, "email");
  const phone = field(formData, "phone");
  const message = field(formData, "message");
  const acceptedPrivacy = formData.get("privacy") === "on";
  const website = field(formData, "website");

  if (website) {
    return { ok: true, message: "Dziękuję. Wiadomość została wysłana." };
  }

  if (!name || !email || !message || !acceptedPrivacy) {
    return { ok: false, message: "Uzupełnij wymagane pola i zaakceptuj politykę prywatności." };
  }

  if (!isEmail(email)) {
    return { ok: false, message: "Podaj poprawny adres email." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    return { ok: false, message: "Formularz nie jest jeszcze skonfigurowany. Skontaktuj się telefonicznie lub mailowo." };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Bogacki Fizjoterapia <onboarding@resend.dev>",
      to: [contactEmail],
      reply_to: email,
      subject: `Nowe zapytanie ze strony: ${name}`,
      text: [
        `Imię: ${name}`,
        `Email: ${email}`,
        `Telefon: ${phone || "Nie podano"}`,
        "",
        "Wiadomość:",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return { ok: false, message: "Nie udało się wysłać wiadomości. Spróbuj ponownie albo skorzystaj z telefonu." };
  }

  return { ok: true, message: "Dziękuję. Wiadomość została wysłana." };
}
