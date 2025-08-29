import { getClient } from "../apollo/client";
import { GET_ALL_PUBLISHED_SLUGS_WITH_MODIFIED, GET_ALL_TAGS } from "../apollo/queries";

export default async function sitemap () {
  const defaultPages = [
    {
      url: "https://flightlessnerd.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://flightlessnerd.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://flightlessnerd.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const {data: postsData} = await getClient().query({
    query: GET_ALL_PUBLISHED_SLUGS_WITH_MODIFIED,
  });
  // const {data: tagsData} = await getClient().query({
  //   query: GET_ALL_TAGS
  // });

  const sitemap = [
    ...defaultPages,
    ...postsData.posts.map(post => ({
      url: `https://flightlessnerd.com/p/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: "weekly",
      priority: 0.8,
    }))
  ]

  return sitemap;
}
