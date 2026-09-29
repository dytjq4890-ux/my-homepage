import type { Metadata } from "next";
import Link from "next/link";

/* =====================================
   기본 정보
===================================== */

const SITE_URL =
  "https://my-homepage-red-theta.vercel.app";

/* =====================================
   서울 25개 구
===================================== */

const districts = [
  { slug: "gangnam", name: "강남구" },
  { slug: "gangdong", name: "강동구" },
  { slug: "gangbuk", name: "강북구" },
  { slug: "gangseo", name: "강서구" },
  { slug: "gwanak", name: "관악구" },
  { slug: "gwangjin", name: "광진구" },
  { slug: "guro", name: "구로구" },
  { slug: "geumcheon", name: "금천구" },
  { slug: "nowon", name: "노원구" },
  { slug: "dobong", name: "도봉구" },
  { slug: "dongdaemun", name: "동대문구" },
  { slug: "dongjak", name: "동작구" },
  { slug: "mapo", name: "마포구" },
  { slug: "seodaemun", name: "서대문구" },
  { slug: "seocho", name: "서초구" },
  { slug: "seongdong", name: "성동구" },
  { slug: "seongbuk", name: "성북구" },
  { slug: "songpa", name: "송파구" },
  { slug: "yangcheon", name: "양천구" },
  { slug: "yeongdeungpo", name: "영등포구" },
  { slug: "yongsan", name: "용산구" },
  { slug: "eunpyeong", name: "은평구" },
  { slug: "jongno", name: "종로구" },
  { slug: "jung", name: "중구" },
  { slug: "jungnang", name: "중랑구" },
];

/* =====================================
   SEO
===================================== */

export const metadata: Metadata = {
  title: {
    absolute:
      "서울 보험점검 | 서울 25개 구 보험 보장분석",
  },

  description:
    "서울 25개 구 보험점검 및 보험 보장분석 안내. 강남구, 강동구, 강북구, 강서구, 관악구, 광진구, 서초구, 송파구 등 지역별 보험점검 정보를 확인하세요.",

  alternates: {
    canonical: `${SITE_URL}/region/seoul`,
  },

  openGraph: {
    title:
      "서울 보험점검 | 서울 25개 구 보험 보장분석",
    description:
      "서울 25개 구 지역별 보험점검 및 보험 보장분석 안내",
    url: `${SITE_URL}/region/seoul`,
    type: "website",
  },
};

/* =====================================
   페이지
===================================== */

export default function SeoulPage() {
  return (
    <>
      {/* 상단 */}

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
            padding: "18px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#111827",
              textDecoration: "none",
              fontSize: "21px",
              fontWeight: 800,
            }}
          >
            보험점검
          </Link>

          <Link
            href="/"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            홈으로
          </Link>
        </div>
      </header>

      {/* 메인 배너 */}

      <section
        style={{
          padding: "68px 20px",
          textAlign: "center",
          color: "#ffffff",
          background:
            "linear-gradient(135deg, #2563eb, #1d4ed8)",
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
              marginBottom: "18px",
              padding: "7px 15px",
              borderRadius: "999px",
              border:
                "1px solid rgba(255,255,255,0.3)",
              background:
                "rgba(255,255,255,0.15)",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            서울 전지역
          </div>

          <h1
            style={{
              margin: "0 0 14px",
              fontSize: "38px",
              lineHeight: 1.3,
            }}
          >
            서울 보험점검
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "17px",
              lineHeight: 1.7,
              opacity: 0.95,
            }}
          >
            서울 25개 구 지역별
            보험 보장분석 안내
          </p>
        </div>
      </section>

      {/* 지역 목록 */}

      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "50px 20px 70px",
        }}
      >
        <h2
          style={{
            margin: "0 0 10px",
            textAlign: "center",
            fontSize: "28px",
          }}
        >
          서울 지역 선택
        </h2>

        <p
          style={{
            margin: "0 0 35px",
            textAlign: "center",
            color: "#6b7280",
          }}
        >
          보험점검을 원하는 지역을
          선택해주세요.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "14px",
          }}
        >
          {districts.map((district) => (
            <Link
              key={district.slug}
              href={`/region/seoul/${district.slug}`}
              style={{
                display: "block",
                padding: "21px 12px",
                textAlign: "center",
                textDecoration: "none",
                color: "#1f2937",
                fontWeight: 800,
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                boxShadow:
                  "0 4px 14px rgba(0,0,0,0.04)",
              }}
            >
              {district.name}
            </Link>
          ))}
        </div>

        {/* 안내 */}

        <section
          style={{
            marginTop: "55px",
            padding: "30px",
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "18px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
            }}
          >
            서울 보험점검 안내
          </h2>

          <p
            style={{
              marginBottom: 0,
              color: "#4b5563",
              lineHeight: 1.8,
            }}
          >
            현재 가입한 보험의 주요 보장내용,
            중복될 수 있는 보장,
            부족할 수 있는 보장 항목 등을
            확인할 수 있도록 안내합니다.
            위에서 거주 지역 또는 상담을 원하는
            서울 지역을 선택해주세요.
          </p>
        </section>
      </main>

      {/* 하단 */}

      <footer
        style={{
          padding: "32px 20px",
          background: "#111827",
          color: "#d1d5db",
          textAlign: "center",
          fontSize: "13px",
        }}
      >
        보험점검 사이트
        <br />
        서울 지역별 보험 보장분석 정보 제공
      </footer>
    </>
  );
}
