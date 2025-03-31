const STRAPI_URL_API = process.env.NEXT_PUBLIC_STRAPI_URL_API;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;

export const getRequest: any = async (url: string, params?: string) => {
  try {
    console.log(`${STRAPI_URL_API}/api/${url}?${params}`);
    const res = await fetch(`${STRAPI_URL_API}/api/${url}?${params}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${STRAPI_TOKEN}`,
      },
    });

    if (res.status >= 500) {
      return {
        status: res.status,
        success: res.status >= 200 && res.status < 300,
        data: null,
      };
    }

    const response = await res.json();

    return {
      status: res.status,
      success: res.status >= 200 && res.status < 300,
      data: response,
    };
  } catch (error) {
    console.error("Error en la solicitud:", error);
    return { success: false, error };
  }
};
