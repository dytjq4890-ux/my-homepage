import type {
  Metadata,
} from "next";

import Link from "next/link";

import {
  notFound,
} from "next/navigation";

import {
  PHONE_DISPLAY,
  PHONE_LINK,
  REGION_DATA,
  RegionSlug,
  SITE_URL,
} from "../data";

type Props = {
  params: Promise<{
    region: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(
    REGION_DATA
  ).map((region) => ({
    region,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const {
    region,
  } = await params;

  if (
    !(region in REGION_DATA)
  ) {
    return {};
  }

  const data =
    REGION_DATA[
      region as RegionSlug
    ];

  return {
    title: {
      absolute:
        `${data.name} 보험점검 | 지역별 보험 보장분석`,
    },

    description:
      `${data.fullName} 지역별 보험점검 및 보험 보장분석 안내. ` +
      `현재 가입한 보험의 보장내용, 중복보장, 부족할 수 있는 보장을 확인해보세요.`,

    alternates: {
      canonical:
        `${SITE_URL}/region/${region}`,
    },
  };
}

export default async function RegionPage({
  params,
}: Props) {
  const {
    region,
  } = await params;

  if (
    !(region in REGION_DATA)
  ) {
    notFound();
  }

  const data =
    REGION_DATA[
      region as RegionSlug
    ];

  return (
    <>
      <header
        style={{
          background:
            "#ffffff",

          borderBottom:
            "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth:
              "1100px",

            margin:
              "0 auto",

            padding:
              "17px 20px",

            display:
              "flex",

            justifyContent:
              "space-between",

            alignItems:
              "center",
          }}
        >
          <Link
            href="/"
            style={{
              color:
                "#111827",

              textDecoration:
                "none",

              fontWeight:
                900,

              fontSize:
                "21px",
            }}
          >
            보험점검
          </Link>

          <a
            href={
              PHONE_LINK
            }
            style={{
              color:
                "#2563eb",

              fontWeight:
                900,

              textDecoration:
                "none",
            }}
          >
            ☎ {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <section
        style={{
          padding:
            "65px 20px",

          textAlign:
            "center",

          color:
            "#ffffff",

          background:
            "linear-gradient(135deg,#2563eb,#1d4ed8)",
        }}
      >
        <div
          style={{
            display:
              "inline-block",

            marginBottom:
              "15px",

            padding:
              "7px 14px",

            borderRadius:
              "999px",

            background:
              "rgba(255,255,255,0.15)",
          }}
        >
          {data.fullName}
        </div>

        <h1
          style={{
            margin:
              "0 0 12px",

            fontSize:
              "38px",
          }}
        >
          {data.name} 보험점검
        </h1>

        <p
          style={{
            margin: 0,
          }}
        >
          원하는 지역을
          선택해주세요.
        </p>
      </section>

      <main
        style={{
          maxWidth:
            "1100px",

          margin:
            "0 auto",

          padding:
            "55px 20px 75px",
        }}
      >
        <h2
          style={{
            textAlign:
              "center",

            marginBottom:
              "12px",
          }}
        >
          {data.name} 지역 선택
        </h2>

        <p
          style={{
            textAlign:
              "center",

            color:
              "#6b7280",

            marginBottom:
              "35px",
          }}
        >
          보험점검을 원하는
          지역을 선택하세요.
        </p>

        <div
          style={{
            display:
              "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(145px,1fr))",

            gap:
              "14px",
          }}
        >
          {Object.entries(
            data.districts
          ).map(
            ([
              district,
              name,
            ]) => (
              <Link
                key={
                  district
                }
                href={`/region/${region}/${district}`}
                style={{
                  padding:
                    "21px 10px",

                  background:
                    "#ffffff",

                  border:
                    "1px solid #e5e7eb",

                  borderRadius:
                    "14px",

                  color:
                    "#111827",

                  textDecoration:
                    "none",

                  textAlign:
                    "center",

                  fontWeight:
                    900,
                }}
              >
                {name}
              </Link>
            )
          )}
        </div>

        <div
          style={{
            marginTop:
              "50px",

            padding:
              "30px",

            borderRadius:
              "20px",

            textAlign:
              "center",

            background:
              "#eef4ff",
          }}
        >
          <strong>
            보험점검 문의
          </strong>

          <br />

          <a
            href={
              PHONE_LINK
            }
            style={{
              display:
                "inline-block",

              marginTop:
                "15px",

              padding:
                "14px 22px",

              background:
                "#2563eb",

              color:
                "#ffffff",

              borderRadius:
                "12px",

              textDecoration:
                "none",

              fontWeight:
                900,
            }}
          >
            ☎ {PHONE_DISPLAY}
          </a>
        </div>
      </main>
    </>
  );
}
