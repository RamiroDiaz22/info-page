export const buildQueryParams = (params?: Record<string, unknown>): string => {
  const auxParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (Array.isArray(value))
      value.forEach((item) => auxParams.append(key, item.toString()));
    else auxParams.append(key, String(value));
  });

  return decodeURIComponent(auxParams.toString());
};

export const parseHomeData = (info: Record<string, any> | null) => ({
  hero: validateExist(info?.hero) && {
    title: info?.hero.head.title,
    description: info?.hero.head.description,
    heroImage: {
      image: info?.hero.heroImage.image.url,
      title: info?.hero.heroImage.title,
      description: info?.hero.heroImage.description,
    },
  },
  aboutMe: validateExist(info?.aboutMe) && {
    title: info?.aboutMe.head.title,
    description: info?.aboutMe.head.description,
    desciptionImage: info?.aboutMe.desciptionImage,
    image: info?.aboutMe.image.url,
    services: info?.aboutMe.services,
  },
  contractMe: validateExist(info?.contractMe) && {
    title: info?.contractMe.head.title,
    description: info?.contractMe.head.description,
    email: info?.contractMe.email,
    location: info?.contractMe.location,
    timetables: info?.contractMe.timetables,
    why: info?.contractMe.why,
  },
  portfolio: validateExist(info?.portfolio) && {
    title: info?.portfolio.head.title,
    description: info?.portfolio.head.description,
    // projects: info?.portfolio.projects,
    projects: info?.portfolio.works,
  },
  services: validateExist(info?.services) &&
    info?.categories && {
      title: info?.services.head.title,
      description: info?.services.head.description,
      professions: info?.categories,
    },
  testimonials: validateExist(info?.testimonials) && {
    title: info?.testimonials.head.title,
    description: info?.testimonials.head.description,
    comments: info?.testimonials.comments,
  },
});

export const parseConfigData = (info: Record<string, any> | null) => {
  return {
    name: info?.name,
    socialMedia: info?.socialMedia || [],
    phone: info?.phone || null,
  };
};

export const parseProjectsData = (info: Record<string, any> | null) => ({
  title: info?.title,
  description: info?.description,
});

export const parseWorksData = (info: Record<string, any> | null) => ({
  projects: info || [],
});

export const paseCategoriesData = (info: Record<string, any> | null) => ({
  categories: info || [],
});

export const paseProjectData = (info: Record<string, any> | null) => ({
  project: info || [],
});

const validateExist = (
  info: Record<string, any> | null
): null | Record<string, any> => {
  if (!info) return null;

  return info;
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const clearParams = (params: string): string => {
  return params.replace(/\s+/g, "");
};
