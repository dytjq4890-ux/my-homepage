import type { MetadataRoute } from "next";

const SITE_URL =
  "https://my-homepage-red-theta.vercel.app";

const districts = [
  "gangnam",
  "gangdong",
  "gangbuk",
  "gangseo",
  "gwanak",
  "gwangjin",
  "guro",
  "geumcheon",
  "nowon",
  "dobong",
  "dongdaemun",
  "dongjak",
  "mapo",
  "seodaemun",
  "seocho",
  "seongdong",
  "seongbuk",
  "songpa",
  "yangcheon",
  "yeongdeungpo",
  "yongsan",
  "eunpyeong",
  "jongno",
  "jung",
  "jungnang",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const districtPages: MetadataRoute.Sitemap =
    districts.map((district) => ({
      url: `${SITE_URL}/region/seoul/${district}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${SITE_URL}/region/seoul`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    ...districtPages,
  ];
}
