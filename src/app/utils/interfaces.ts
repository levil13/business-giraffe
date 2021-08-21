export class Card {
  title: string;
  description?: string;
  shortDescription?: string;
  image?: string;
  bgImage?: string;
  exampleImages?: string[]
  class?: string;
}

export class Media {
  isMobile: boolean;
  isDesktop: boolean;
}
