import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2022-06-26",
  useCdn: "true",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};
export const sanityClient = createClient(client);

export const useCurrentUser = createCurrentUserHook(client);

//Image
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
