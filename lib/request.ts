import { getRequest } from "./api";
import { clearParams } from "./functions";

export enum PARAMS_STRAPI {
  HOME = "home",
  CONFIG = "config",
  PROJECT = "project",
  WORKS = "works",
  CATEGORIES = "categories",
}

export const getLandingData = async (
  param: PARAMS_STRAPI,
  filters?: string
) => {
  const getQuery = () => {
    let query = "";

    switch (param) {
      case PARAMS_STRAPI.HOME:
        query = clearParams(`
            populate[aboutMe][populate]=*&
            populate[contractMe][populate]=*&
            populate[services][populate]=*&
            populate[testimonials][populate]=*&
            populate[portfolio][populate][head]=*&
            populate[portfolio][populate][works][fields]=title&
            populate[portfolio][populate][works][fields]=slug&
            populate[portfolio][populate][works][populate][previewImage][fields]=url&
            populate[portfolio][populate][works][sort]=createdAt:desc&
            populate[portfolio][populate][projects][populate][preview][fields]=url&
            populate[hero][populate][heroImage][populate][image][fields]=url&
            populate[hero][populate][head]=*&
            populate=categories
          `);
        break;

      case PARAMS_STRAPI.CONFIG:
        query = clearParams(`populate=*`);
        break;

      case PARAMS_STRAPI.WORKS:
        query = clearParams(`
            filters[isActive][$eq]=true&
            populate[categories][fields]=categorie&
            populate[categories][fields]=slug&
            populate[previewImage][fields]=url&
            fields=slug&
            fields=title&
            fields=description&
            fields=workingDate&
            fields=location`);
        break;

      case PARAMS_STRAPI.CATEGORIES:
        query = clearParams(`filters[works][$notNull]=true&
        filters[isActive][$eq]=true&
        fields=categorie&
        fields=slug`);
        break;

      default:
        break;
    }

    if (filters) query = query.concat(`${filters}`);

    return query;
  };

  const result = await getRequest(param, getQuery());
  if (!result.success) return null;
  return result.data;
};

export const getProjectData = async (slug: string) => {
  const query = clearParams(
    `
  populate[categories][fields]=categorie&
  populate[categories][fields]=slug&
  populate[media][fields]=url&
  populate[media][fields]=mime&
  fields=slug&
  fields=title&
  fields=description&
  fields=workingDate&
  fields=location&
  fields=nameClient&
  fields=typeClient&
  filters[slug][$eq]=${slug}&
  pagination[limit]=1
  `
  );

  const result = await getRequest(PARAMS_STRAPI.WORKS, query);
  if (!result.success) return null;
  return result.data;
};

export const getRelatedProjects = (slug: string, categories: string[]) => {
  const filterCategories = categories.map(
    (el) => `filters[categories][slug][$eq]=${el}&`
  );

  const query = clearParams(
    `
  ${filterCategories.join("&")}
  filters[slug][$ne]=${slug}&
  filters[isActive][$eq]=true&
  populate[previewImage][fields]=url&
  fields=slug&
  fields=title&
  pagination[limit]=3
  `
  );

  return getRequest(PARAMS_STRAPI.WORKS, query);
};
