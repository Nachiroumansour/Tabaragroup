export type DestinationId = "lac-rose" | "casamance" | "bandia" | "dakar-goree" | "sine-saloum";

export type SearchFilters = {
  destination: DestinationId | "all";
  period: "all" | "short-stay" | "long-stay" | "winter-sun";
  travelers: "all" | "solo-duo" | "small-group" | "private-group";
};

export type Destination = {
  id: DestinationId;
  title: string;
  label: string;
  location: string;
  price: string;
  duration: string;
  rating: string;
  image: string;
  secondaryImage: string;
  description: string;
  summary: string;
  activities: string[];
  highlights: string[];
  difficulty: string;
  groupSize: string;
  periodTags: SearchFilters["period"][];
  travelerTags: SearchFilters["travelers"][];
};

export type BookingInquiry = {
  destinationTitle: string;
  destinationId: DestinationId;
  travelStyle: SearchFilters["period"];
  travelers: SearchFilters["travelers"];
};

export const defaultSearchFilters: SearchFilters = {
  destination: "all",
  period: "all",
  travelers: "all",
};

export const destinationOptions = [
  { value: "all", label: "Toutes les destinations" },
  { value: "lac-rose", label: "Lac Rose & Dunes" },
  { value: "casamance", label: "Casamance" },
  { value: "bandia", label: "Réserve de Bandia" },
  { value: "dakar-goree", label: "Dakar & Île de Gorée" },
  { value: "sine-saloum", label: "Delta du Sine Saloum" },
] as const;

export const periodOptions = [
  { value: "all", label: "Toutes périodes" },
  { value: "short-stay", label: "Court séjour (1-3j)" },
  { value: "long-stay", label: "Circuit complet (7j+)" },
  { value: "winter-sun", label: "Soleil d'hiver" },
] as const;

export const travelerOptions = [
  { value: "all", label: "Tous les groupes" },
  { value: "solo-duo", label: "1 à 2 personnes" },
  { value: "small-group", label: "3 à 5 personnes" },
  { value: "private-group", label: "6 personnes et +" },
] as const;

export const destinations: Destination[] = [
  {
    id: "lac-rose",
    title: "Lac Rose & Dunes",
    label: "Sel, lagune et horizon rose",
    location: "À 45 min de Dakar",
    price: "75 EUR",
    duration: "1 jour",
    rating: "4.8",
    image: "/images/gallery-4.jpg",
    secondaryImage: "/images/gallery-3.jpg",
    description:
      "Vivez une expérience inoubliable au célèbre Lac Retba. Connu pour sa couleur rose unique due aux micro-organismes, ce site offre un contraste saisissant avec les dunes de sable de l'océan Atlantique. Une journée parfaite mêlant nature, culture locale et aventure douce.",
    summary: "Idéal pour une excursion d'une journée depuis Dakar, avec balade en 4x4 et rencontre avec les ramasseurs de sel.",
    activities: ["Balade en 4x4 dans les dunes", "Visite des exploitations de sel", "Déjeuner sénégalais (Thieboudienne)", "Baignade flottante dans le lac"],
    highlights: ["Phénomène naturel unique", "Proximité avec Dakar", "Adapté à tous les âges"],
    difficulty: "Très Facile",
    groupSize: "1-12 pers",
    periodTags: ["all", "short-stay", "winter-sun"],
    travelerTags: ["all", "solo-duo", "small-group", "private-group"],
  },
  {
    id: "casamance",
    title: "Immersion en Casamance",
    label: "Le paradis vert du Sud",
    location: "Sud du Sénégal",
    price: "950 EUR",
    duration: "8 jours",
    rating: "5.0",
    image: "/images/hero-senegal.jpg",
    secondaryImage: "/images/gallery-1.jpg",
    description:
      "Explorez la Casamance, la région la plus verte et luxuriante du Sénégal. Entre palétuviers, bolongs (canaux) et plages de sable fin à Cap Skirring, ce circuit vous plonge au cœur de la culture Diola, loin du tumulte des grandes villes.",
    summary: "Le circuit premium pour les voyageurs en quête d'évasion tropicale, de culture profonde et de plages de rêve.",
    activities: ["Navigation en pirogue dans les bolongs", "Visite de l'île de Karabane", "Séjour balnéaire à Cap Skirring", "Rencontre avec les artisans locaux"],
    highlights: ["Nature luxuriante", "Culture Diola authentique", "Plages paradisiaques"],
    difficulty: "Modéré",
    groupSize: "Min 2 pers",
    periodTags: ["all", "long-stay", "winter-sun"],
    travelerTags: ["all", "solo-duo", "small-group", "private-group"],
  },
  {
    id: "bandia",
    title: "Safari Réserve de Bandia",
    label: "L'Afrique sauvage à portée de main",
    location: "Sindia, Thiès",
    price: "90 EUR",
    duration: "Demi-journée",
    rating: "4.9",
    image: "/images/gallery-2.jpg",
    secondaryImage: "/images/monument.jpg",
    description:
      "Une véritable expérience de safari africain sans aller loin de la côte. Observez de près les girafes, rhinocéros, zèbres, antilopes et les imposants baobabs séculaires dans cette réserve naturelle superbement préservée.",
    summary: "L'excursion parfaite pour voir les grands mammifères d'Afrique en une matinée, très prisée par les amateurs de photographie.",
    activities: ["Safari guidé en véhicule 4x4", "Observation de la faune sauvage", "Visite de la tombe de griot dans le baobab géant", "Cocktail au restaurant surplombant la mare aux crocodiles"],
    highlights: ["Observation animale garantie", "Safari sécurisé et encadré", "Idéal pour les familles"],
    difficulty: "Facile",
    groupSize: "1-10 pers",
    periodTags: ["all", "short-stay", "winter-sun"],
    travelerTags: ["all", "solo-duo", "small-group"],
  },
  {
    id: "sine-saloum",
    title: "Delta du Sine Saloum",
    label: "Labyrinthe d'eau et d'oiseaux",
    location: "Centre-Ouest",
    price: "420 EUR",
    duration: "3 jours",
    rating: "4.9",
    image: "/images/gallery-1.jpg",
    secondaryImage: "/images/hero-senegal.jpg",
    description:
      "Classé au patrimoine mondial de l'UNESCO, ce delta est un écosystème fascinant où se rejoignent fleuves et océan. Naviguez à travers les mangroves à perte de vue et dormez dans des écolodges nichés sur les îles.",
    summary: "Un week-end nature par excellence, combinant ornithologie, tranquillité et hospitalité sérère.",
    activities: ["Balade en pirogue à moteur", "Observation des pélicans et flamants roses", "Pêche artisanale", "Dîner de fruits de mer"],
    highlights: ["Site classé UNESCO", "Écolodges d'exception", "Paradis des oiseaux"],
    difficulty: "Facile",
    groupSize: "2-8 pers",
    periodTags: ["all", "short-stay"],
    travelerTags: ["all", "solo-duo", "small-group", "private-group"],
  },
  {
    id: "dakar-goree",
    title: "Dakar & Île de Gorée",
    label: "Histoire, art et architecture",
    location: "Dakar",
    price: "120 EUR",
    duration: "1 jour",
    rating: "4.9",
    image: "/images/gallery-3.jpg",
    secondaryImage: "/images/monument.jpg",
    description:
      "Plongez dans l'histoire vibrante de la capitale sénégalaise et de la célèbre Île de Gorée, classée au patrimoine mondial de l'humanité. Entre ses ruelles fleuries de bougainvilliers et son passé poignant, cette excursion est une étape mémorielle et culturelle incontournable.",
    summary: "Une journée riche en émotions pour comprendre l'histoire du Sénégal, de la Maison des Esclaves aux bouillons de culture de Dakar.",
    activities: ["Traversée en chaloupe", "Visite de la Maison des Esclaves", "Flânerie dans les ruelles coloniales", "Exploration du Monument de la Renaissance africaine"],
    highlights: ["Patrimoine UNESCO", "Architecture coloniale colorée", "Accès direct depuis Dakar"],
    difficulty: "Très Facile",
    groupSize: "1-15 pers",
    periodTags: ["all", "short-stay"],
    travelerTags: ["all", "solo-duo", "small-group", "private-group"],
  }
];

export function getOptionLabel<T extends readonly { value: string; label: string }[]>(
  options: T,
  value: string,
) {
  return options.find((option) => option.value === value)?.label ?? options[0]?.label ?? "";
}

export function buildInquirySubject(inquiry: BookingInquiry) {
  return `Demande - ${inquiry.destinationTitle}`;
}

export function buildInquiryMessage(inquiry: BookingInquiry) {
  return [
    "Bonjour Tabara Group,",
    "",
    `Je souhaite recevoir une proposition pour le circuit ${inquiry.destinationTitle}.`,
    `Rythme souhaité : ${getOptionLabel(periodOptions, inquiry.travelStyle)}.`,
    `Format de groupe : ${getOptionLabel(travelerOptions, inquiry.travelers)}.`,
    "",
    "Merci de me recontacter avec les disponibilités et les prochaines étapes.",
  ].join("\n");
}
