import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Informacje o przetwarzaniu danych osobowych na stronie Bogacki Fizjoterapia.",
};

function PolicyBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-(--color-border) py-8 first:border-none first:pt-0">
      <h2 className="text-xl font-semibold text-(--color-primary)">{title}</h2>

      <div className="mt-4 space-y-4 leading-8 text-(--color-text-muted)">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <Section tone="surface">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--color-primary)">
          Polityka prywatności
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight text-(--color-primary) sm:text-5xl lg:text-6xl">
          Informacje o przetwarzaniu danych osobowych
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-(--color-text-muted)">
          Dbamy o prywatność osób korzystających ze strony internetowej Bogacki
          Fizjoterapia. Poniżej znajdziesz informacje dotyczące przetwarzania
          danych osobowych oraz wykorzystywania plików cookie.
        </p>

        <div className="mt-14 rounded-4xl border border-(--color-border) bg-white p-8 shadow-(--shadow-card)">
          <PolicyBlock title="1. Administrator danych">
            <p>Administratorem danych osobowych jest:</p>

            <div className="rounded-3xl bg-(--color-surface) p-6">
              <p className="font-semibold text-(--color-primary)">
                Piotr Bogacki Fizjoterapia
              </p>

              <p>Kamieńska 36</p>
              <p>40-748 Katowice</p>

              <div className="mt-4 space-y-1">
                <p>NIP: 9542623558</p>
                <p>REGON: 243500415</p>
                <p>tel.: 505 476 614</p>
                <p>e-mail: bogackipiotr13@gmail.com</p>
              </div>
            </div>
          </PolicyBlock>

          <PolicyBlock title="2. Jakie dane przetwarzamy">
            <p>Za pośrednictwem formularza kontaktowego możemy przetwarzać:</p>

            <ul className="ml-6 list-disc space-y-2">
              <li>imię,</li>
              <li>adres e-mail,</li>
              <li>numer telefonu,</li>
              <li>treść wiadomości.</li>
            </ul>

            <p>
              Strona nie służy do prowadzenia dokumentacji medycznej oraz nie
              zbiera danych dotyczących stanu zdrowia.
            </p>
          </PolicyBlock>

          <PolicyBlock title="3. Cel przetwarzania danych">
            <p>Dane są wykorzystywane wyłącznie w celu:</p>

            <ul className="ml-6 list-disc space-y-2">
              <li>udzielenia odpowiedzi na przesłane zapytanie,</li>
              <li>kontaktu z użytkownikiem,</li>
              <li>obsługi korespondencji.</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="4. Formularz kontaktowy">
            <p>
              Formularz kontaktowy obsługiwany jest z wykorzystaniem usługi
              wysyłki wiadomości e-mail Resend.
            </p>

            <p>
              Dane nie są wykorzystywane do działań marketingowych ani
              profilowania użytkowników.
            </p>
          </PolicyBlock>

          <PolicyBlock title="5. Hosting strony">
            <p>Strona utrzymywana jest na infrastrukturze Vercel.</p>

            <p>
              Podczas korzystania z serwisu mogą być zapisywane podstawowe dane
              techniczne niezbędne do prawidłowego działania strony.
            </p>
          </PolicyBlock>

          <PolicyBlock title="6. Pliki cookie">
            <p>
              Strona wykorzystuje wyłącznie niezbędne pliki cookie wymagane do
              poprawnego działania serwisu.
            </p>

            <ul className="ml-6 list-disc space-y-2">
              <li>nie korzystamy z analityki,</li>
              <li>nie korzystamy z reklam,</li>
              <li>nie profilujemy użytkowników.</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="7. Google Maps">
            <p>Na stronie kontaktowej może zostać osadzona mapa Google Maps.</p>

            <p>
              Korzystanie z mapy może powodować przekazywanie danych
              technicznych do usług Google zgodnie z polityką prywatności tego
              dostawcy.
            </p>
          </PolicyBlock>

          <PolicyBlock title="8. ZnanyLekarz">
            <p>
              Strona może zawierać odnośniki prowadzące do zewnętrznego serwisu
              ZnanyLekarz.
            </p>

            <p>
              Po przejściu do serwisu obowiązują zasady prywatności operatora
              tego serwisu.
            </p>
          </PolicyBlock>

          <PolicyBlock title="9. Twoje prawa">
            <p>Masz prawo do:</p>

            <ul className="ml-6 list-disc space-y-2">
              <li>dostępu do danych,</li>
              <li>sprostowania danych,</li>
              <li>usunięcia danych,</li>
              <li>ograniczenia przetwarzania,</li>
              <li>wniesienia sprzeciwu.</li>
            </ul>
          </PolicyBlock>

          <PolicyBlock title="10. Aktualizacja polityki">
            <p>
              Polityka prywatności może być aktualizowana wraz z rozwojem strony
              lub zmianami przepisów prawa.
            </p>
          </PolicyBlock>
        </div>
      </div>
    </Section>
  );
}
