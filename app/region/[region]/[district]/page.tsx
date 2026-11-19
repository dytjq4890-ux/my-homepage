
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

  if (!(region in REGION_DATA)) {
    return {};
  }

  const regionData =
    REGION_DATA[region as RegionSlug];

  const districts =
    regionData.districts as Record<string, string>;

  if (!(district in districts)) {
    return {};
  }

  const districtName = districts[district];

  const seo = getDistrictSeoData(
    districtName,
    regionData.name
  );

  const pageUrl =
    `${SITE_URL}/region/${region}/${district}`;

  return {
    title: {
      absolute: seo.title,
    },

    description: seo.description,

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
      "보험점검",
      "보험상담",
      "보험분석",
      "보험 보장분석",
    ],

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url: pageUrl,
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
  const { region, district } = await params;

  /* 지역 확인 */

  if (!(region in REGION_DATA)) {
    notFound();
  }

  const regionData =
    REGION_DATA[region as RegionSlug];

  const districts =
    regionData.districts as Record<string, string>;

  /* 지역구 확인 */

  if (!(district in districts)) {
    notFound();
  }

  const districtName = districts[district];

  /* SEO 정보 */

  const seo = getDistrictSeoData(
    districtName,
    regionData.name
  );

  const pageUrl =
    `${SITE_URL}/region/${region}/${district}`;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f8fb",
        color: "#111827",
      }}
    >
      {/* =====================================
          상단 헤더
      ===================================== */}

      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "17px 20px",
            display: "flex",
            justifyContent: "space-between",
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
            {regionData.name} 다른 지역 보기
          </Link>
        </div>
      </header>

      {/* =====================================
          메인 배너
      ===================================== */}

      <section
        style={{
          padding: "70px 20px 65px",
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
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              fontWeight: 800,
            }}
          >
            {regionData.name} {districtName}
          </div>

          <h1
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(38px,8vw,58px)",
              lineHeight: 1.2,
              letterSpacing: "-1.5px",
            }}
          >
            {seo.shortName} 보험점검
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "18px",
              lineHeight: 1.7,
              opacity: 0.95,
            }}
          >
            {seo.shortName} 보험 보장분석 및
            {" "}
            {districtName} 보험상담 안내
          </p>

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
                padding: "15px 21px",
                background: "#ffffff",
                color: "#2563eb",
                borderRadius: "13px",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              ☎ {PHONE_DISPLAY}
            </a>

            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "15px 21px",
                background: "#FEE500",
                color: "#191919",
                borderRadius: "13px",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          보험점검 안내
      ===================================== */}

      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "65px 20px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            padding: "35px 25px",
            borderRadius: "20px",
            border: "1px solid #e5e7eb",
            boxShadow:
              "0 8px 25px rgba(15,23,42,0.04)",
          }}
        >
          <h2
            style={{
              fontSize: "27px",
              margin: "0 0 20px",
              lineHeight: 1.4,
            }}
          >
            {seo.shortName} 보험점검 안내
          </h2>

          <p
            style={{
              color: "#4b5563",
              lineHeight: 1.9,
              margin: 0,
            }}
          >
            {regionData.name} {districtName} 지역에서
            보험 보장내용을 확인하고자 하는 분들을 위한
            보험상담 안내 페이지입니다.
            현재 가입한 보험의 보장내용과 보험료,
            중복되거나 부족할 수 있는 보장 항목 등을
            확인할 수 있도록 안내합니다.
          </p>
        </div>
      </section>

      {/* =====================================
          점검 항목
      ===================================== */}

      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 20px 65px",
        }}
      >
        <h2
          style={{
            fontSize: "27px",
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          주요 보험점검 항목
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(210px,1fr))",
            gap: "15px",
          }}
        >
          {[
            {
              title: "보장내용 확인",
              desc: "가입한 보험의 보장 범위와 내용을 확인합니다.",
            },
            {
              title: "중복보장 점검",
              desc: "비슷한 보장이 여러 계약에 있는지 살펴봅니다.",
            },
            {
              title: "부족한 보장 확인",
              desc: "현재 계약에서 부족할 수 있는 항목을 확인합니다.",
            },
            {
              title: "보험료 점검",
              desc: "월 보험료와 보장내용을 함께 살펴봅니다.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: "24px",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "17px",
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "18px",
                  color: "#1d4ed8",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#6b7280",
                  lineHeight: 1.7,
                  fontSize: "14px",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================
          지역별 다른 페이지 이동
      ===================================== */}

      <section
        style={{
          background: "#eef4ff",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              textAlign: "center",
              margin: "0 0 25px",
            }}
          >
            {regionData.name} 다른 지역 보험점검
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {Object.entries(districts).map(
              ([slug, name]) => (
                <Link
                  key={slug}
                  href={`/region/${region}/${slug}`}
                  style={{
                    padding: "10px 15px",
                    background:
                      slug === district
                        ? "#2563eb"
                        : "#ffffff",
                    color:
                      slug === district
                        ? "#ffffff"
                        : "#374151",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: 700,
                    border: "1px solid #dbeafe",
                  }}
                >
                  {name}
                </Link>
              )
            )}
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "25px",
            }}
          >
            <Link
              href={`/region/${region}`}
              style={{
                color: "#2563eb",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              {regionData.name} 전체 지역 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          상담 안내
      ===================================== */}

      <section
        style={{
          padding: "65px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            padding: "40px 25px",
            textAlign: "center",
            borderRadius: "22px",
            background: "#ffffff",
            border: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              color: "#2563eb",
              fontWeight: 900,
            }}
          >
            INSURANCE CONSULTATION
          </div>

          <h2
            style={{
              fontSize: "29px",
              margin: "12px 0",
            }}
          >
            {seo.shortName} 보험점검 상담
          </h2>

          <p
            style={{
              color: "#6b7280",
              lineHeight: 1.8,
              marginBottom: "25px",
            }}
          >
            전화 또는 카카오톡으로
            보험 보장분석 상담을 문의할 수 있습니다.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <a
              href={PHONE_LINK}
              style={{
                padding: "15px 22px",
                background: "#2563eb",
                color: "#ffffff",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              ☎ {PHONE_DISPLAY}
            </a>

            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "15px 22px",
                background: "#FEE500",
                color: "#191919",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      {/* =====================================
          하단 안내
      ===================================== */}

      <footer
        style={{
          padding: "38px 20px",
          background: "#111827",
          color: "#d1d5db",
          textAlign: "center",
          lineHeight: 1.9,
          fontSize: "13px",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          <strong
            style={{
              color: "#ffffff",
              fontSize: "19px",
            }}
          >
            보험점검센터
          </strong>

          <p
            style={{
              margin: "8px 0",
            }}
          >
            {regionData.name} {districtName} 보험 보장분석 안내
          </p>

          <p
            style={{
              margin: "5px 0",
            }}
          >
            상담전화 {PHONE_DISPLAY}
          </p>

          <div
            style={{
              marginTop: "22px",
              paddingTop: "20px",
              borderTop: "1px solid #374151",
              textAlign: "left",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: "14px",
                margin: "0 0 10px",
              }}
            >
              운영 및 사업자 정보
            </h3>

            <p style={{ margin: "4px 0" }}>
              운영 회사 : 유퍼스트보험마케팅
            </p>

            <p style={{ margin: "4px 0" }}>
              협회 등록번호 : 제2001048024호
            </p>

            <p style={{ margin: "4px 0" }}>
              보험설계사 : 신요섭
            </p>

            <p style={{ margin: "4px 0" }}>
              설계사 협회 등록번호 : 20260420004094
            </p>

            <p style={{ margin: "4px 0" }}>
              주소 : 서울특별시 중구 소월로 10
              (남대문로5가), 단암빌딩 6층
            </p>
          </div>

          <div
            style={{
              marginTop: "22px",
              padding: "18px",
              border: "1px solid #374151",
              borderRadius: "12px",
              textAlign: "left",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: "14px",
                margin: "0 0 10px",
              }}
            >
              서비스 및 광고 안내
            </h3>

            <p style={{ margin: "5px 0" }}>
              본 사이트는 보험 보장분석 및 상담 서비스를
              안내하는 민간 보험상담 사이트입니다.
            </p>

            <p style={{ margin: "5px 0" }}>
              보험상품의 가입 여부 및 보험금 지급 여부는
              해당 보험회사의 심사 기준에 따라 결정됩니다.
            </p>

            <p style={{ margin: "5px 0" }}>
              금융감독원 및 정부기관과는 무관한
              민간 보험상담 서비스입니다.
            </p>

            <p style={{ margin: "12px 0 5px" }}>
              본 광고는 광고심의기준을 준수하였으며,
              유효기간은 심의일로부터 1년입니다.
            </p>

            <p
              style={{
                color: "#ffffff",
                fontWeight: 800,
                margin: "5px 0",
              }}
            >
              준법감시인 심의필 제2611011호
            </p>

            <p
              style={{
                color: "#9ca3af",
                fontSize: "12px",
                margin: 0,
              }}
            >
              (2026.11.04 ~ 2027.11.03)
            </p>
          </div>

          <div
            style={{
              marginTop: "22px",
              paddingTop: "18px",
              borderTop: "1px solid #374151",
              color: "#9ca3af",
              fontSize: "12px",
            }}
          >
            © {new Date().getFullYear()} 보험점검센터.
            All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
