import { ProfessionsEnum } from "../enum/professions.enum";
import { SocialMediaTypeEnum } from "../enum/socialMedia.enum";

export type HeroProps = {
  data: {
    title: string;
    description: string;
    heroImage: {
      image: string;
      title: string;
      description: string;
    };
  };
};

type Profession = {
  description: string;
  categorie: string;
  slug: ProfessionsEnum;
  isActive: boolean;
};

export type ServicesProps = {
  data: {
    title: string;
    description: string;
    professions: Profession[];
  };
};

type PreviewProject = {
  title: string;
  slug: string;
  previewImage: {
    url: string;
  };
};

export type Project = {
  categories: { categorie: string; slug: ProfessionsEnum }[];
  media: {
    url: string;
    mime: string;
  }[];
  slug: string;
  title: string;
  description: string;
  workingDate: string;
  location: string;
  nameClient: string;
  typeClient: string;
  createdAt: Date;
  updatedAt: Date;
};

export type RelatedProject = {
  title: string;
  slug: string;
  previewImage: {
    url: string;
  };
};

export type PortfolioProps = {
  data: {
    title: string;
    description: string;
    projects: PreviewProject[];
  };
};

type Service = {
  title: string;
};

export type AboutMeProps = {
  data: {
    title: string;
    description: string;
    desciptionImage: string;
    image: string;
    services: Service[];
  };
};

type Comment = {
  comment: string;
  name: string;
  type: string;
};

export type TestimonialsProps = {
  data: {
    title: string;
    description: string;
    comments: Comment[];
  };
};

type Why = {
  reasons: string;
};

export type ContactMeProps = {
  data: {
    title: string;
    description: string;
    email: string;
    location: string;
    timetables: string;
    why: Why[];
  };
};

type SocialMedia = {
  type: SocialMediaTypeEnum;
  url: string;
};

export type FooterProps = {
  socialMedia?: SocialMedia[];
};

export type ProjectListType = {
  slug: string;
  title: string;
  categories: {
    categorie: string;
    slug: string;
  }[];
  description: string;
  workingDate: string;
  location: string;
  previewImage: {
    url: string;
  };
};
