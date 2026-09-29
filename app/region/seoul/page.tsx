import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "서울 보험점검 | 서울 25개 구 보험 보장분석",

  description:
    "서울 강남구, 강동구, 강북구, 강서구, 관악구, 광진구, 구로구, 금천구, 노원구, 도봉구 등 서울 25개 구 보험점검 및 보험 보장분석 안내.",

  alternates: {
    canonical:
      "https://my-homepage-red-theta.vercel.app/region/seoul",
  },
};

const districts = [
  ["gangnam", "강남구"],
  ["gangdong", "강동구"],
  ["gangbuk", "강북구"],
  ["gangseo", "강서구"],
  ["gwanak", "관악구"],
  ["gwangjin", "광진구"],
  ["guro", "구로구"],
  ["geumcheon", "금천구"],
  ["nowon", "노원구"],
  ["dobong", "도봉구"],
  ["dongdaemun", "동대문구"],
  ["dongjak", "동작구"],
  ["mapo", "마포구"],
  ["seodaemun", "서대문구"],
  ["seocho", "서초구"],
  ["seongdong", "성동구"],
  ["seongbuk", "성북구"],
  ["songpa", "송파구"],
  ["yangcheon", "양천구"],
  ["yeongdeungpo", "영등포구"],
  ["yongsan", "용산구"],
  ["eunpyeong", "은평구"],
  ["jongno", "종로구"],
  ["jung", "중구"],
  ["jungnang", "중랑구"],
] as const;

export default function SeoulPage() {
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
              fontSize: "21px",
              fontWeight: 800,
              textDecoration: "none",
              color: "#111827",
            }}
          >
            보험점검
          </Link>

          <Link
            href="/"
            style={{
              color: "#2563eb",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            홈으로
          </Link>
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(135deg, #2563eb, #1d4ed8)",
          color: "#ffffff",
          textAlign: "center",
          padding: "65px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "38px",
            margin: "0 0 12px",
          }}
        >
          서울 보험점검
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: "17px",
          }}
        >
          서울 25개 구 지역별 보험 보장분석 안내
        </p>
      </section>

      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "50px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            marginBottom: "10px",
          }}
        >
          서울 지역 선택
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "35px",
          }}
        >
          보험점검을 원하는 지역을 선택해주세요.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "14px",
          }}
        >
          {districts.map(([slug, name]) => (
            <Link
              key={slug}
              href={`/region/seoul/${slug}`}
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "20px 12px",
                textAlign: "center",
                textDecoration: "none",
                color: "#1f2937",
                fontWeight: 800,
                boxShadow:
                  "0 4px 14px rgba(0,0,0,0.03)",
              }}
            >
              {name}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
