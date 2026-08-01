export interface NavLink {
  label: string;
  href: string;
}

export interface HeroSlide {
  eyebrow: string;
  heading: string[];
  image: string;
}

export interface FeatureItem {
  title: string;
}

export interface GalleryItem {
  category: string;
  title: string;
  image: string;
}

export interface ProductCard {
  name: string;
  description: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface SocialLink {
  label: "Facebook" | "Instagram" | "Youtube";
  href: string;
}
