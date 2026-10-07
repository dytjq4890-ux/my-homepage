import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  PHONE_DISPLAY,
  PHONE_LINK,
  REGION_DATA,
  RegionSlug,
  SITE_URL,
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
   지역명 SEO 보정
   예:
   영등포구 → 영등포
   강남구 → 강남
   마포구 → 마포
===================================== */

function getShortDistrictName(
  districtName: string
) {
  return districtName.endsWith("구")
    ? districtName.slice(0, -1)
    : districtName;
}

/* =====================================
   지역별 SEO 자동 생성
===================================== */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { region, district } = await params;

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

  if (!(district in districts)) {
    return {};
  }

  const districtName =
    districts[district];

  const shortDistrictName =
    getShortDistrictName(
      districtName
    );

  return {
    title: {
      absolute:
        `${shortDistrictName} 보험점검 | ${districtName} 보험점검 | 보험 보장분석 상담`,
    },

    description:
      `${shortDistrictName} 보험점검 및 ${districtName} 보험점검, ` +
      `${shortDistrictName} 보험상담과 ${districtName} 보험상담을 안내합니다. ` +
      `현재 가입한 보험의 보장내용, 중복보장, 부족할 수 있는 보장 등을 확인해보세요.`,

    keywords: [
      `${shortDistrictName} 보험점검`,
      `${districtName} 보험점검`,

      `${shortDistrictName} 보험상담`,
      `${districtName} 보험상담`,

      `${shortDistrictName} 보험분석`,
      `${districtName} 보험분석`,

      `${shortDistrictName} 보장분석`,
      `${districtName} 보장분석`,

      `${shortDistrictName} 보험료점검`,
      `${districtName} 보험료점검`,

      `${regionData.name} ${shortDistrictName} 보험점검`,
      `${regionData.name} ${districtName} 보험점검`,

      `${regionData.name} ${shortDistrictName} 보험상담`,
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
        `${shortDistrictName} 보험점검 | ${districtName} 보험점검 | 보험 보장분석`,
      description:
        `${shortDistrictName} 보험점검 및 ${districtName} 보험상담 안내`,
      url:
        `${SITE_URL}/region/${region}/${district}`,
      type: "website",
    },
  };
}

/* =====================================
   상세페이지
===================================== */

export default async function DistrictPage({
  params,
}: Props) {
  const { region, district } =
    await params;

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

  if (!(district in districts)) {
    notFound();
  }

  const districtName =
    districts[district];

  const shortDistrictName =
    getShortDistrictName(
      districtName
    );

  return (
    <>
      {/* 상단 */}

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
            padding: "17px 20px",
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#111827",
              textDecoration: "none",
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
              textDecoration: "none",
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

      {/* 메인 배너 */}

      <section
        style={{
          padding:
            "70px 20px 65px",
          textAlign: "center",
          background:
            "linear-gradient(135deg,#2563eb,#1d4ed8)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 14px",
              marginBottom: "16px",
              borderRadius: "999px",
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

          <h1
            style={{
              margin: "0 0 14px",
              fontSize:
                "clamp(38px,8vw,58px)",
              lineHeight: 1.2,
              letterSpacing:
                "-1.5px",
            }}
          >
            {shortDistrictName}
            {" "}
            보험점검
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "18px",
              lineHeight: 1.7,
              opacity: 0.95,
            }}
          >
            {shortDistrictName}
            {" "}
            {districtName} 지역 보험 보장분석 안내
          </p>

          {/* 상단 상담 버튼 */}

          <div
            style={{
              marginTop: "28px",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
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
                fontWeight:
                  900,
                fontSize:
                  "16px",
              }}
            >
              ☎ {PHONE_DISPLAY}
            </a>

            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding:
                  "15px 21px",
                background:
                  "#FEE500",
                color:
                  "#191919",
                borderRadius:
                  "13px",
                textDecoration:
                  "none",
                fontWeight:
                  900,
                fontSize:
                  "16px",
              }}
            >
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      {/* 본문 */}

      <main
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding:
            "50px 20px 75px",
        }}
      >
        {/* 보험점검 안내 */}

        <section
          style={{
            padding: "30px",
            marginBottom: "20px",
            background: "#ffffff",
            border:
              "1px solid #e5e7eb",
            borderRadius: "18px",
            boxShadow:
              "0 6px 20px rgba(15,23,42,0.04)",
          }}
        >
          <h2
            style={{
              margin: "0 0 20px",
              fontSize: "28px",
            }}
          >
            {shortDistrictName}
            {" "}
            보험점검 안내
          </h2>

          <p
            style={{
              color: "#4b5563",
              lineHeight: 1.9,
              fontSize: "17px",
            }}
          >
            {shortDistrictName} 보험점검 및{" "}
            {districtName} 보험점검을 통해
            현재 가입하고 있는 보험을 기준으로
            주요 보장내용과 중복되는 보장,
            부족할 수 있는 보장 항목 등을
            확인할 수 있도록 안내합니다.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "25px",
            }}
          >
            {[
              "현재 가입 중인 보험의 주요 보장내용 확인",
              "비슷한 보장이 여러 계약에 중복되어 있는지 확인",
              "현재 계약에서 부족할 수 있는 보장 항목 확인",
              "월 보험료와 보장내용을 함께 확인",
            ].map(
              (
                item,
                index
              ) => (
                <div
                  key={item}
                  style={{
                    padding:
                      "18px",
                    borderRadius:
                      "13px",
                    background:
                      "#f8fafc",
                    lineHeight:
                      1.6,
                  }}
                >
                  <strong
                    style={{
                      color:
                        "#2563eb",
                      marginRight:
                        "6px",
                    }}
                  >
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                    .
                  </strong>

                  {item}
                </div>
              )
            )}
          </div>
        </section>

        {/* 보험상담 안내 */}

        <section
          style={{
            padding: "30px",
            marginBottom: "20px",
            background:
              "#ffffff",
            border:
              "1px solid #e5e7eb",
            borderRadius:
              "18px",
            boxShadow:
              "0 6px 20px rgba(15,23,42,0.04)",
          }}
        >
          <div
            style={{
              color:
                "#2563eb",
              fontWeight:
                900,
              fontSize:
                "14px",
              marginBottom:
                "8px",
            }}
          >
            INSURANCE CHECK
          </div>

          <h2
            style={{
              margin:
                "0 0 16px",
              fontSize:
                "28px",
            }}
          >
            {shortDistrictName}
            {" "}
            보험상담
          </h2>

          <p
            style={{
              color:
                "#4b5563",
              lineHeight:
                1.8,
              marginBottom:
                "25px",
            }}
          >
            {shortDistrictName} 보험상담 및{" "}
            {districtName} 보험상담을 통해
            가입 중인 보험회사,
            월 납입 보험료,
            보험 가입 시기,
            주요 보장내용 등을
            확인하고 보험 보장분석에
            도움을 받을 수 있습니다.
          </p>
        </section>

        {/* 상담 안내 */}

        <section
          style={{
            padding: "30px",
            background:
              "#ffffff",
            border:
              "1px solid #e5e7eb",
            borderRadius:
              "18px",
            boxShadow:
              "0 6px 20px rgba(15,23,42,0.04)",
          }}
        >
          <div
            style={{
              color:
                "#2563eb",
              fontWeight:
                900,
              fontSize:
                "14px",
              marginBottom:
                "8px",
            }}
          >
            CONSULTATION
          </div>

          <h2
            style={{
              margin:
                "0 0 16px",
              fontSize:
                "28px",
            }}
          >
            {shortDistrictName}
            {" "}
            보험점검 상담
          </h2>

          <p
            style={{
              color:
                "#4b5563",
              lineHeight:
                1.8,
              marginBottom:
                "25px",
            }}
          >
            가입 중인 보험회사,
            월 납입 보험료,
            보험 가입 시기,
            주요 보장내용 등을
            미리 확인해두면
            상담 시 도움이 됩니다.
          </p>

          {/* 전화 */}

          <a
            href={PHONE_LINK}
            style={{
              display: "block",
              marginBottom:
                "12px",
              padding:
                "18px 20px",
              background:
                "#2563eb",
              color:
                "#ffffff",
              borderRadius:
                "14px",
              textDecoration:
                "none",
              textAlign:
                "center",
              fontSize:
                "19px",
              fontWeight:
                900,
            }}
          >
            ☎ 전화상담
            {" "}
            {PHONE_DISPLAY}
          </a>

          {/* 카카오톡 */}

          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding:
                "18px 20px",
              background:
                "#FEE500",
              color:
                "#191919",
              borderRadius:
                "14px",
              textDecoration:
                "none",
              textAlign:
                "center",
              fontSize:
                "19px",
              fontWeight:
                900,
            }}
          >
            카카오톡 오픈채팅 상담
          </a>

          {/* 주의사항 */}

          <div
            style={{
              marginTop:
                "25px",
              padding:
                "18px",
              background:
                "#fff7ed",
              border:
                "1px solid #fed7aa",
              borderRadius:
                "12px",
              color:
                "#7c2d12",
              fontSize:
                "14px",
              lineHeight:
                1.7,
            }}
          >
            보험 상품의
            가입·변경·해지는
            개인의 상황과
            계약 조건에 따라
            달라질 수 있습니다.
            기존 보험을 변경하거나
            해지하기 전에는
            현재 계약의 보장내용,
            해지환급금 및
            새로운 보험의
            가입 가능 여부 등을
            반드시 확인하시기 바랍니다.
          </div>
        </section>

        {/* 다른 지역 */}

        <div
          style={{
            marginTop:
              "25px",
            textAlign:
              "center",
          }}
        >
          <Link
            href={`/region/${region}`}
            style={{
              display:
                "inline-block",
              padding:
                "14px 20px",
              color:
                "#2563eb",
              textDecoration:
                "none",
              fontWeight:
                900,
            }}
          >
            ← {regionData.name}
            {" "}
            다른 지역 보기
          </Link>
        </div>
      </main>

      {/* 하단 고정 상담버튼 */}

      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 100,
          padding:
            "10px 12px",
          background:
            "rgba(255,255,255,0.97)",
          borderTop:
            "1px solid #e5e7eb",
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
          gap: "8px",
        }}
      >
        <a
          href={PHONE_LINK}
          style={{
            padding:
              "14px 8px",
            background:
              "#2563eb",
            color:
              "#ffffff",
            borderRadius:
              "12px",
            textAlign:
              "center",
            textDecoration:
              "none",
            fontWeight:
              900,
          }}
        >
          ☎ 전화상담
        </a>

        <a
          href={KAKAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding:
              "14px 8px",
            background:
              "#FEE500",
            color:
              "#191919",
            borderRadius:
              "12px",
            textAlign:
              "center",
            textDecoration:
              "none",
            fontWeight:
              900,
          }}
        >
          카톡상담
        </a>
      </div>

      {/* 하단 */}

      <footer
        style={{
          padding:
            "35px 20px 100px",
          background:
            "#111827",
          color:
            "#d1d5db",
          textAlign:
            "center",
          lineHeight:
            1.8,
        }}
      >
        <strong
          style={{
            color:
              "#ffffff",
          }}
        >
          보험점검
        </strong>

        <br />

        {shortDistrictName}
        {" "}
        {districtName} 보험 보장분석 안내

        <br />

        {shortDistrictName}
        {" "}
        보험상담

        <br />

        상담전화
        {" "}
        {PHONE_DISPLAY}
      </footer>
    </>
  );
}
