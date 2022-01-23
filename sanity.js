import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";

export const config = {
  // find info in sanity.json in studio porject
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  //   set useCdn to false if app requires freshest data possible
  useCdn: process.env.NODE_ENV === "production",
};

// set up client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// set up helper function for generating Image URLs with only asset reference data in your documents
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
