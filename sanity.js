import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2022-02-01',
    useCdn: process.env.NODE_ENV || true,
    token:process.env.SANITY_API_TOKEN,
  });
  
  // const builder = ImageUrlBuilder(client);
  
  // export const urlFor = (source) => builder.image(source);
