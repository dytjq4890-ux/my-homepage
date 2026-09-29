import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL =
  "https://my-homepage-red-theta.vercel.app";

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

export function generateStaticParams() {
  return Object.keys(districts).map((district) => ({
    district,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { district } = await params;

  if (!(district in districts)) {
    return {};
  }

  const districtName =
    districts[district as DistrictSlug];

  return {
    title: `${districtName} 보험점검 | 보험 보장분석 상담`,

    description:
      `${districtName} 보험점검 및 보험 보장분석 안내. ` +
      `현재 가입한 보험의 보장내용, 중복보장, ` +
      `부족할 수 있는 보장 등을 확인해보세요.`,

    keywords: [
      `${districtName}보험점검`,
      `${districtName}보험상담`,
      `${districtName}보험분석`,
      `${districtName}보장분석`,
      "보험점검",
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
        `${districtName} 지역 보험점검 및 보장분석 안내`,
      url:
        `${SITE_URL}/region/seoul/${district}`,
      type: "website",
    },
  };
}

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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "21px",
              fontWeight: 800,
              textDecoration: "none",
              color: "#111827",
            }}
          >
            보험점검
          </Link>

          <Link
            href="/region/seoul"
            style={{
              color: "#2563eb",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            서울 지역목록
          </Link>
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(135deg, #2563eb, #1d4ed8)",
          color: "#ffffff",
          textAlign: "center",
          padding: "70px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "38px",
            margin: "0 0 12px",
          }}
        >
          {districtName} 보험점검
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: "17px",
          }}
        >
          {districtName} 지역 보험 보장분석 안내
        </p>
      </section>

      <main
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "48px 20px",
        }}
      >
        <section
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "18px",
            padding: "30px",
            marginBottom: "20px",
          }}
        >
          <h2>
            {districtName} 보험점검 안내
          </h2>

          <p>
            현재 가입하고 있는 보험을 기준으로
            주요 보장내용과 중복되는 보장,
            부족할 수 있는 보장 항목 등을
            확인할 수 있도록 안내합니다.
          </p>

          <div
            style={{
              display: "grid",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            {[
              "현재 가입 중인 보험의 주요 보장내용 확인",
              "비슷한 보장이 여러 계약에 중복되어 있는지 확인",
              "현재 계약에서 부족할 수 있는 보장 항목 확인",
              "월 보험료와 보장내용을 함께 확인",
            ].map((text, index) => (
              <div
                key={text}
                style={{
                  padding: "16px",
                  background: "#f8fafc",
                  borderRadius: "12px",
                }}
              >
                <strong
                  style={{
                    color: "#2563eb",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}.
                </strong>{" "}
                {text}
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            background: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "18px",
            padding: "30px",
          }}
        >
          <h2>
            {districtName} 보험상담 전 확인사항
          </h2>

          <p>
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
            }}
          >
            보험 상품의 가입·변경·해지는
            개인 상황과 계약 조건에 따라
            달라질 수 있습니다.
            기존 보험을 변경하거나 해지하기 전에는
            현재 계약의 보장내용,
            해지환급금 및 새로운 보험의
            가입 가능 여부 등을
            반드시 확인하시기 바랍니다.
          </div>
        </section>
      </main>
    </>
  );
}
