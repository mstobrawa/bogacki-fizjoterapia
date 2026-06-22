"use server";

type ContactState = {
  ok: boolean;
  message: string;
};

function trimmedField(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function normalizedField(formData: FormData, key: string) {
  return String(formData.get(key) ?? "")
    .trim()
    .replace(/\s+/g, " ");
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isPhone(value: string) {
  return /^[0-9+\-\s()]{7,20}$/.test(value);
}

export async function sendContactMessage(
  _state: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = normalizedField(formData, "name");
  const email = trimmedField(formData, "email");
  const phone = trimmedField(formData, "phone");
  const message = normalizedField(formData, "message");

  const acceptedPrivacy = formData.get("privacy") === "on";

  const website = trimmedField(formData, "website");

  if (website) {
    return {
      ok: true,
      message: "Dziękuję. Wiadomość została wysłana.",
    };
  }

  if (!name || !email || !message || !acceptedPrivacy) {
    return {
      ok: false,
      message: "Uzupełnij wymagane pola i zaakceptuj politykę prywatności.",
    };
  }

  if (name.length < 2 || name.length > 60) {
    return {
      ok: false,
      message: "Imię powinno mieć od 2 do 60 znaków.",
    };
  }

  if (!isEmail(email)) {
    return {
      ok: false,
      message: "Podaj poprawny adres email.",
    };
  }

  if (phone && (!isPhone(phone) || phone.length < 7 || phone.length > 20)) {
    return {
      ok: false,
      message: "Podaj poprawny numer telefonu.",
    };
  }

  if (message.length < 10 || message.length > 2000) {
    return {
      ok: false,
      message: "Wiadomość powinna mieć od 10 do 2000 znaków.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  const contactEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !contactEmail) {
    return {
      ok: false,
      message:
        "Formularz nie jest jeszcze skonfigurowany. Skontaktuj się telefonicznie lub mailowo.",
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Bogacki Fizjoterapia <kontakt@bogackifizjoterapia.pl>",
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
      throw new Error();
    }

    return {
      ok: true,
      message: "Dziękuję. Wiadomość została wysłana.",
    };
  } catch {
    return {
      ok: false,
      message:
        "Nie udało się wysłać wiadomości. Spróbuj ponownie lub skontaktuj się telefonicznie.",
    };
  }
}
