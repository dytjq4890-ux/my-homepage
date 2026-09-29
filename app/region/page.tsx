import Link from "next/link";

import {
  PHONE_DISPLAY,
  PHONE_LINK,
  REGION_DATA,
} from "./data";

export default function RegionPage() {
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
            href={PHONE_LINK}
            style={{
              color:
                "#2563eb",

              textDecoration:
                "none",

              fontWeight:
                900,
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

          background:
            "linear-gradient(135deg,#2563eb,#1d4ed8)",

          color:
            "#ffffff",

          textAlign:
            "center",
        }}
      >
        <h1
          style={{
            fontSize:
              "38px",

            margin:
              "0 0 12px",
          }}
        >
          지역별 보험점검
        </h1>

        <p>
          서울 · 경기 · 인천 ·
          충남 · 충북
        </p>
      </section>

      <main
        style={{
          maxWidth:
            "1000px",

          margin:
            "0 auto",

          padding:
            "55px 20px",
        }}
      >
        <h2
          style={{
            textAlign:
              "center",

            marginBottom:
              "35px",
          }}
        >
          지역을 선택하세요
        </h2>

        <div
          style={{
            display:
              "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(190px,1fr))",

            gap:
              "16px",
          }}
        >
          {Object.entries(
            REGION_DATA
          ).map(
            ([slug, region]) => (
              <Link
                key={slug}
                href={`/region/${slug}`}
                style={{
                  padding:
                    "30px 15px",

                  background:
                    "#ffffff",

                  border:
                    "1px solid #e5e7eb",

                  borderRadius:
                    "18px",

                  textAlign:
                    "center",

                  color:
                    "#111827",

                  textDecoration:
                    "none",

                  fontWeight:
                    900,

                  fontSize:
                    "22px",
                }}
              >
                {region.name}

                <span
                  style={{
                    display:
                      "block",

                    marginTop:
                      "6px",

                    color:
                      "#6b7280",

                    fontSize:
                      "13px",

                    fontWeight:
                      500,
                  }}
                >
                  {
                    Object.keys(
                      region.districts
                    ).length
                  }
                  개 지역
                </span>
              </Link>
            )
          )}
        </div>
      </main>
    </>
  );
}
