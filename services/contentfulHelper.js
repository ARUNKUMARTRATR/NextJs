const contentful = require("contentful");
const createClient = (spaceId, env, preview) => {
  return contentful.createClient({
    space: spaceId,
    environment: env,
    accessToken: preview
      ? process.env.PREVIEW_TOKEN
      : process.env.DELIVERY_TOKEN,
    host: preview ? "preview.contentful.com" : undefined,
  });
};

export const getContentfulClient = (enablePreview, env = "master") => {
  return createClient(process.env.SPACE_ID, env, enablePreview);
};
