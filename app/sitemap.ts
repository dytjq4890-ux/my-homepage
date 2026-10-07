import type { MetadataRoute } from "next";

import {
  REGION_DATA,
  SITE_URL,
} from "./region/data";

export default function sitemap(): MetadataRoute.Sitemap {
  // 메인 페이지
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/region`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // 서울, 경기, 인천, 충남, 충북 등 지역 페이지
  const regionPages: MetadataRoute.Sitemap =
    Object.keys(REGION_DATA).map((region) => ({
      url: `${SITE_URL}/region/${region}`,
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  // 각 지역의 시/군/구 상세 페이지
  const districtPages: MetadataRoute.Sitemap =
    Object.entries(REGION_DATA).flatMap(
      ([region, data]) =>
        Object.keys(data.districts).map((district) => ({
          url: `${SITE_URL}/region/${region}/${district}`,
          changeFrequency: "monthly",
          priority: 0.8,
        }))
    );

  return [
    ...mainPages,
    ...regionPages,
    ...districtPages,
  ];
}
