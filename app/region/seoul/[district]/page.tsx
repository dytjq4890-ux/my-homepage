import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL =
  "https://my-homepage-red-theta.vercel.app";

/* =====================================
   서울 25개 구
===================================== */

const districts = {
  gangnam: "강남구",
  gangdong: "강동구",
  gangbuk: "강북구",
  gangseo: "강서구",
  gwanak: "관악구",
  gwangjin: "광진구",
  guro: "구로구",
  geumcheon: "금천구",
  nowon: "노원구",
  dobong: "도봉구",
  dongdaemun: "동대문구",
  dongjak: "동작구",
  mapo: "마포구",
  seodaemun: "서대문구",
  seocho: "서초구",
  seongdong: "성동구",
  seongbuk: "성북구",
  songpa: "송파구",
  yangcheon: "양천구",
  yeongdeungpo: "영등포구",
  yongsan: "용산구",
  eunpyeong: "은평구",
  jongno: "종로구",
  jung: "중구",
  jungnang: "중랑구",
} as const;

type DistrictSlug = keyof typeof districts;

type Props = {
  params: Promise<{
    district: string;
  }>;
};

/* =====================================
   서울 25개 페이지 자동 생성
===================================== */

export function generateStaticParams() {
  return Object.keys(districts).map((district) => ({
    district,
  }));
}

/* =====================================
   지역별 SEO 자동 생성
===================================== */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { district } = await params;

  if (!(district in districts)) {
    return {
      title: "지역을 찾을 수 없습니다",
    };
  }

  const districtName =
    districts[district as DistrictSlug];

  return {
    title: {
      absolute:
        `${districtName} 보험점검 | 보험 보장분석 상담`,
    },

    description:
      `${districtName} 보험점검 및 보험 보장분석 안내. ` +
      `현재 가입한 보험의 보장내용, 중복되는 보장, ` +
      `부족할 수 있는 보장 항목 등을 확인해보세요.`,

    keywords: [
      `${districtName}보험점검`,
      `${districtName}보험상담`,
      `${districtName}보험분석`,
      `${districtName}보장분석`,
      `${districtName}보험리모델링`,
      "보험점검",
      "보험상담",
      "보험보장분석",
    ],

    alternates: {
      canonical:
        `${SITE_URL}/region/seoul/${district}`,
    },

    openGraph: {
      title:
        `${districtName} 보험점검 | 보험 보장분석`,
      description:
        `${districtName} 지역 보험점검 및 보험 보장분석 안내`,
      url:
        `${SITE_URL}/region/seoul/${district}`,
      type: "website",
    },
  };
}

/* =====================================
   지역구 페이지
===================================== */

export default async function DistrictPage({
  params,
}: Props) {
  const { district } = await params;

  if (!(district in districts)) {
    notFound();
  }

  const districtName =
    districts[district as DistrictSlug];

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
            maxWidth: "960px",
            margin: "0 auto",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#111827",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "21px",
            }}
          >
            보험점검
          </Link>

          <Link
            href="/region/seoul"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            서울 다른 지역 보기
          </Link>
        </div>
      </header>

      {/* 메인 */}

      <section
        style={{
          padding: "70px 20px",
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
              padding: "7px 15px",
              marginBottom: "18px",
              background:
                "rgba(255,255,255,0.15)",
              border:
                "1px solid rgba(255,255,255,0.3)",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            서울 {districtName}
          </div>

          <h1
            style={{
              margin: "0 0 12px",
              fontSize: "38px",
              lineHeight: 1.3,
            }}
          >
            {districtName} 보험점검
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "17px",
              lineHeight: 1.7,
              opacity: 0.95,
            }}
          >
            {districtName} 지역
            보험 보장분석 안내
          </p>
        </div>
      </section>

      <main
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "48px 20px 70px",
        }}
      >
        <section
          style={{
            marginBottom: "20px",
            padding: "30px",
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "18px",
            boxShadow:
              "0 5px 18px rgba(0,0,0,0.04)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
            }}
          >
            {districtName} 보험점검 안내
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: "#4b5563",
            }}
          >
            현재 가입하고 있는 보험을 기준으로
            주요 보장내용과 중복되는 보장,
            부족할 수 있는 보장 항목 등을
            확인할 수 있도록 안내합니다.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "22px",
            }}
          >
            <div
              style={{
                padding: "16px",
                background: "#f8fafc",
                borderRadius: "12px",
              }}
            >
              <strong
                style={{ color: "#2563eb" }}
              >
                01.
              </strong>{" "}
              현재 가입 중인 보험의
              주요 보장내용 확인
            </div>

            <div
              style={{
                padding: "16px",
                background: "#f8fafc",
                borderRadius: "12px",
              }}
            >
              <strong
                style={{ color: "#2563eb" }}
              >
                02.
              </strong>{" "}
              비슷한 보장이 여러 계약에
              중복되어 있는지 확인
            </div>

            <div
              style={{
                padding: "16px",
                background: "#f8fafc",
                borderRadius: "12px",
              }}
            >
              <strong
                style={{ color: "#2563eb" }}
              >
                03.
              </strong>{" "}
              현재 계약에서 부족할 수 있는
              보장 항목 확인
            </div>

            <div
              style={{
                padding: "16px",
                background: "#f8fafc",
                borderRadius: "12px",
              }}
            >
              <strong
                style={{ color: "#2563eb" }}
              >
                04.
              </strong>{" "}
              월 보험료와 보장내용을
              함께 확인
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "30px",
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "18px",
            boxShadow:
              "0 5px 18px rgba(0,0,0,0.04)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
            }}
          >
            {districtName} 보험상담 전
            확인사항
          </h2>

          <p
            style={{
              lineHeight: 1.8,
              color: "#4b5563",
            }}
          >
            가입 중인 보험회사,
            월 납입 보험료,
            보험 가입 시기,
            주요 보장내용 등을
            미리 확인해두면
            보험점검을 진행할 때 도움이 됩니다.
          </p>

          <div
            style={{
              marginTop: "20px",
              padding: "18px",
              background: "#fff7ed",
              border: "1px solid #fed7aa",
              borderRadius: "12px",
              color: "#7c2d12",
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            보험 상품의 가입·변경·해지는
            개인의 상황과 계약 조건에 따라
            달라질 수 있습니다.
            기존 보험을 변경하거나 해지하기 전에는
            현재 계약의 보장내용,
            해지환급금 및 새로운 보험의
            가입 가능 여부 등을
            반드시 확인하시기 바랍니다.
          </div>

          <Link
            href="/region/seoul"
            style={{
              display: "inline-block",
              marginTop: "24px",
              padding: "14px 20px",
              background: "#2563eb",
              color: "#ffffff",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 800,
            }}
          >
            서울 다른 지역 보기
          </Link>
        </section>
      </main>

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
        {districtName} 보험 보장분석 정보
      </footer>
    </>
  );
}
