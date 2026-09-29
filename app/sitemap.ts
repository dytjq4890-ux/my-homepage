import type {
  MetadataRoute,
} from "next";

import {
  REGION_DATA,
  SITE_URL,
} from "./region/data";

export default function sitemap():
  MetadataRoute.Sitemap {

  const now =
    new Date();

  const regionPages:
    MetadataRoute.Sitemap =
    Object.keys(
      REGION_DATA
    ).map(
      (region) => ({
        url:
          `${SITE_URL}/region/${region}`,

        lastModified:
          now,

        changeFrequency:
          "weekly",

        priority:
          0.9,
      })
    );

  const districtPages:
    MetadataRoute.Sitemap =
    Object.entries(
      REGION_DATA
    ).flatMap(
      ([
        region,
        data,
      ]) =>
        Object.keys(
          data.districts
        ).map(
          (district) => ({
            url:
              `${SITE_URL}/region/${region}/${district}`,

            lastModified:
              now,

            changeFrequency:
              "monthly",

            priority:
              0.8,
          })
        )
    );

  return [
    {
      url:
        SITE_URL,

      lastModified:
        now,

      changeFrequency:
        "weekly",

      priority:
        1,
    },

    {
      url:
        `${SITE_URL}/region`,

      lastModified:
        now,

      changeFrequency:
        "weekly",

      priority:
        0.9,
    },

    ...regionPages,

    ...districtPages,
  ];
}
