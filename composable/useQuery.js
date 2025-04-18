import { buildRequestInit } from '@datocms/cda-client';
import dotenv from 'dotenv';
dotenv.config();
export function useQuery(query, options) {
  const config = useRuntimeConfig();

    const apiToken = config.public.datoCmsToken;

  if (!apiToken) {
    console.error("DatoCMS API Token not available in public runtime config! Check .env and nuxt.config.ts");
    return { 
      data: ref(null), 
      pending: ref(false), 
      error: ref(new Error("DatoCMS token not configured")) 
    };
  }

  const optionsWithToken = {
    ...options,
    token: apiToken
  };

  return useFetch('https://graphql.datocms.com/', {
    ...buildRequestInit(query, optionsWithToken),
    key: query,
    transform: ({ data, errors }) => {
      if (errors)
        throw new Error(
          `Something went wrong while executing the query: ${JSON.stringify(errors)}`,
        );

      return data;
    },
  });
}