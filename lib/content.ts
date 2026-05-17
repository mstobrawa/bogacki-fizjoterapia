export type Service = {
  id?: string;
  title: string;
  description: string;
  price?: string | null;
  position?: number | null;
};

export type BlogPost = {
  id?: string;
  slug: string;
  title: string;
  excerpt?: string | null;
  image_url?: string | null;
  content?: string | null;
  created_at?: string;
  published?: boolean | null;
};

export type Certificate = {
  id?: string;
  title?: string | null;
  image_url?: string | null;
  position?: number | null;
};

export const services: Service[] = [
  {
    title: "Rehabilitacja",
    description:
      "Indywidualny plan powrotu do sprawnosci po urazach, zabiegach i przeciazeniach, oparty o cele pacjenta i regularna ocene postepow.",
    price: "od 200 zl",
  },
  {
    title: "Fizjoterapia",
    description:
      "Praca z bolem kregoslupa, stawow i napieciem miesniowym z wykorzystaniem terapii manualnej, cwiczen i edukacji ruchowej.",
    price: "150-230 zl",
  },
  {
    title: "Kinesiotaping",
    description:
      "Aplikacje wspierajace terapie, redukcje obrzeku, poprawe czucia ciala i komfort podczas codziennego ruchu.",
    price: "80 zl",
  },
  {
    title: "Masaz relaksacyjny",
    description:
      "Spokojna praca z napieciem, przeciazeniem i stresem, dopasowana do potrzeb osob aktywnych i pracujacych siedzaco.",
    price: "160 zl",
  },
  {
    title: "Dla firm",
    description:
      "Profilaktyka bolu plecow, konsultacje ergonomiczne i warsztaty ruchowe dla zespolow, ktore spedzaja wiele godzin przy biurku.",
    price: "wycena indywidualna",
  },
];

export const posts: BlogPost[] = [
  {
    slug: "bol-plecow-przy-pracy-siedzacej",
    title: "Bol plecow przy pracy siedzacej",
    excerpt:
      "Jak rozpoznac pierwsze sygnaly przeciazenia i kiedy warto skonsultowac sie z fizjoterapeuta.",
    created_at: "2026-04-12",
    content:
      "Dlugie siedzenie nie musi konczyc sie bolem. Najwazniejsze sa regularne zmiany pozycji, proste cwiczenia oddechowe i szybka reakcja na pierwsze objawy przeciazenia.",
    published: true,
  },
  {
    slug: "kiedy-warto-wybrac-kinesiotaping",
    title: "Kiedy warto wybrac kinesiotaping?",
    excerpt:
      "Krotki przewodnik po zastosowaniach tapingu w terapii bolu, obrzekow i przeciazen.",
    created_at: "2026-03-28",
    content:
      "Kinesiotaping moze wspierac terapie, gdy potrzebna jest delikatna stymulacja tkanek, poprawa komfortu ruchu albo wsparcie po urazie. Nie zastepuje diagnozy, ale dobrze uzupelnia plan pracy.",
    published: true,
  },
  {
    slug: "powrot-do-ruchu-po-urazie",
    title: "Powrot do ruchu po urazie",
    excerpt:
      "Dlaczego plan rehabilitacji powinien laczyc terapie, cwiczenia i stopniowanie obciazen.",
    created_at: "2026-02-19",
    content:
      "Powrot po urazie powinien byc stopniowy. Terapia pomaga odzyskac kontrole, a dobrze dobrane cwiczenia przygotowuja cialo do wiekszych obciazen.",
    published: true,
  },
];

export const certificates: Certificate[] = [
  { title: "Terapia manualna" },
  { title: "Kinesiotaping" },
  { title: "Rehabilitacja ortopedyczna" },
  { title: "Masaz medyczny" },
];
