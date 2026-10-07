import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  PHONE_DISPLAY,
  PHONE_LINK,
  REGION_DATA,
  RegionSlug,
  SITE_URL,
  getDistrictSeoData,
} from "../../data";

const KAKAO_URL =
  "https://open.kakao.com/o/sUxshkKi";

type Props = {
  params: Promise<{
    region: string;
    district: string;
  }>;
};


/* =====================================
   모든 지역 상세페이지 자동 생성
===================================== */

export function generateStaticParams() {
  return Object.entries(REGION_DATA).flatMap(
    ([region, data]) =>
      Object.keys(data.districts).map(
        (district) => ({
          region,
          district,
        })
      )
  );
}


/* =====================================
   지역별 SEO 자동 생성
===================================== */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { region, district } = await params;

  /* 존재하지 않는 지역 */

  if (!(region in REGION_DATA)) {
    return {};
  }

  const regionData =
    REGION_DATA[region as RegionSlug];

  const districts =
    regionData.districts as Record<
      string,
      string
    >;

  /* 존재하지 않는 지역구 */

  if (!(district in districts)) {
    return {};
  }

  const districtName =
    districts[district];

  /* 자동 SEO 데이터 */

  const seo =
    getDistrictSeoData(
      districtName,
      regionData.name
    );

  return {
    title: {
      absolute:
        seo.title,
    },

    description:
      seo.description,

    /*
      검색어는 실제 페이지 내용과
      연관되는 범위에서 구성
    */

    keywords: [
      `${seo.shortName} 보험점검`,
      `${districtName} 보험점검`,

      `${seo.shortName} 보험상담`,
      `${districtName} 보험상담`,

      `${seo.shortName} 보험분석`,
      `${districtName} 보험분석`,

      `${seo.shortName} 보장분석`,
      `${districtName} 보장분석`,

      `${seo.shortName} 보험료점검`,
      `${districtName} 보험료점검`,

      `${regionData.name} ${seo.shortName} 보험점검`,
      `${regionData.name} ${districtName} 보험점검`,

      `${regionData.name} ${seo.shortName} 보험상담`,
      `${regionData.name} ${districtName} 보험상담`,

      "보험점검",
      "보험상담",
      "보험분석",
      "보험 보장분석",
    ],

    alternates: {
      canonical:
        `${SITE_URL}/region/${region}/${district}`,
    },

    openGraph: {
      title:
        seo.title,

      description:
        seo.description,

      url:
        `${SITE_URL}/region/${region}/${district}`,

      type: "website",

      locale: "ko_KR",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}


/* =====================================
   지역 상세페이지
===================================== */

export default async function DistrictPage({
  params,
}: Props) {
  const { region, district } =
    await params;


  /* =====================================
     지역 확인
  ===================================== */

  if (!(region in REGION_DATA)) {
    notFound();
  }


  const regionData =
    REGION_DATA[region as RegionSlug];


  const districts =
    regionData.districts as Record<
      string,
      string
    >;


  /* =====================================
     지역구 확인
  ===================================== */

  if (!(district in districts)) {
    notFound();
  }


  const districtName =
    districts[district];


  /* =====================================
     SEO 정보 자동 생성
  ===================================== */

  const seo =
    getDistrictSeoData(
      districtName,
      regionData.name
    );


  return (
    <>
      {/* =====================================
          상단 헤더
      ===================================== */}

      <header
        style={{
          background: "#ffffff",
          borderBottom:
            "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding:
              "17px 20px",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems:
              "center",
            gap: "10px",
          }}
        >

          <Link
            href="/"
            style={{
              color: "#111827",
              textDecoration:
                "none",
              fontWeight: 900,
              fontSize: "21px",
            }}
          >
            보험점검
          </Link>


          <Link
            href={`/region/${region}`}
            style={{
              color: "#2563eb",
              textDecoration:
                "none",
              fontWeight: 800,
              fontSize: "14px",
            }}
          >
            {regionData.name}
            {" "}
            다른 지역 보기
          </Link>

        </div>
      </header>


      {/* =====================================
          메인 배너
      ===================================== */}

      <section
        style={{
          padding:
            "70px 20px 65px",
          textAlign:
            "center",
          background:
            "linear-gradient(135deg,#2563eb,#1d4ed8)",
          color:
            "#ffffff",
        }}
      >

        <div
          style={{
            maxWidth:
              "850px",
            margin:
              "0 auto",
          }}
        >

          {/* 지역 */}

          <div
            style={{
              display:
                "inline-block",
              padding:
                "7px 14px",
              marginBottom:
                "16px",
              borderRadius:
                "999px",
              background:
                "rgba(255,255,255,0.15)",
              border:
                "1px solid rgba(255,255,255,0.25)",
            }}
          >
            {regionData.name}
            {" "}
            {districtName}
          </div>


          {/* H1 */}

          <h1
            style={{
              margin:
                "0 0 14px",
              fontSize:
                "clamp(38px,8vw,58px)",
              lineHeight:
                1.2,
              letterSpacing:
                "-1.5px",
            }}
          >
            {seo.shortName}
            {" "}
            보험점검
          </h1>


          {/* 설명 */}

          <p
            style={{
              margin: 0,
              fontSize:
                "18px",
              lineHeight:
                1.7,
              opacity:
                0.95,
            }}
          >
            {seo.shortName}
            {" "}
            보험 보장분석 및
            {" "}
            {districtName}
            {" "}
            보험상담 안내
          </p>


          {/* 상담 버튼 */}

          <div
            style={{
              marginTop:
                "28px",
              display:
                "flex",
              justifyContent:
                "center",
              flexWrap:
                "wrap",
              gap:
                "10px",
            }}
          >

            <a
              href={PHONE_LINK}
              style={{
                padding:
                  "15px 21px",
                background:
                  "#ffffff",
                color:
                  "#2563eb",
                borderRadius:
                  "13px",
                textDecoration:
                  "none",
               
