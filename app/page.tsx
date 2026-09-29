import Link from "next/link";

import {
  PHONE_DISPLAY,
  PHONE_LINK,
} from "./region/data";

const regions = [
  {
    slug: "seoul",
    name: "서울",
    desc: "서울 25개 구",
  },

  {
    slug: "gyeonggi",
    name: "경기",
    desc: "경기도 시·군",
  },

  {
    slug: "incheon",
    name: "인천",
    desc: "인천광역시 구·군",
  },

  {
    slug: "chungnam",
    name: "충남",
    desc: "충청남도 시·군",
  },

  {
    slug: "chungbuk",
    name: "충북",
    desc: "충청북도 시·군",
  },
];

const checkItems = [
  {
    number: "01",
    title: "보장내용 확인",
    desc:
      "현재 가입한 보험에서 어떤 보장을 받고 있는지 확인합니다.",
  },

  {
    number: "02",
    title: "중복보장 점검",
    desc:
      "비슷한 보장이 여러 보험에 중복되어 있는지 확인합니다.",
  },

  {
    number: "03",
    title: "부족한 보장 확인",
    desc:
      "현재 계약에서 부족할 수 있는 보장 항목을 확인합니다.",
  },

  {
    number: "04",
    title: "보험료 점검",
    desc:
      "월 보험료와 보장내용을 함께 확인할 수 있습니다.",
  },
];

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f8fb",
        color: "#111827",
      }}
    >
      {/* 상단 */}

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,

          background:
            "rgba(255,255,255,0.96)",

          borderBottom:
            "1px solid #e5e7eb",

          backdropFilter:
            "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",

            padding:
              "15px 20px",

            display: "flex",

            justifyContent:
              "space-between",

            alignItems:
              "center",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#111827",

              textDecoration:
                "none",

              fontWeight: 900,

              fontSize: "22px",
            }}
          >
            보험점검
          </Link>

          <a
            href={PHONE_LINK}
            style={{
              padding:
                "11px 16px",

              borderRadius:
                "11px",

              background:
                "#2563eb",

              color: "#ffffff",

              textDecoration:
                "none",

              fontSize:
                "14px",

              fontWeight:
                900,
            }}
          >
            전화상담
          </a>
        </div>
      </header>

      {/* 메인 */}

      <section
        style={{
          padding:
            "90px 20px",

          background:
            "linear-gradient(135deg,#1d4ed8,#2563eb,#3b82f6)",

          color: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth:
              "1100px",

            margin:
              "0 auto",

            display:
              "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",

            gap: "45px",

            alignItems:
              "center",
          }}
        >
          <div>
            <div
              style={{
                display:
                  "inline-block",

                padding:
                  "8px 15px",

                marginBottom:
                  "18px",

                borderRadius:
                  "999px",

                background:
                  "rgba(255,255,255,0.15)",

                fontWeight:
                  800,
              }}
            >
              보험 보장분석 안내
            </div>

            <h1
              style={{
                margin:
                  "0 0 20px",

                fontSize:
                  "clamp(42px,7vw,66px)",

                lineHeight:
                  1.15,

                letterSpacing:
                  "-2px",
              }}
            >
              내 보험,
              <br />
              제대로
              확인해보세요
            </h1>

            <p
              style={{
                maxWidth:
                  "620px",

                margin: 0,

                fontSize:
                  "18px",

                lineHeight:
                  1.8,

                opacity:
                  0.95,
              }}
            >
              현재 가입한 보험의
              보장내용,
              중복보장,
              부족할 수 있는
              보장 등을 확인할 수
              있도록 안내합니다.
            </p>

            <div
              style={{
                display:
                  "flex",

                gap:
                  "12px",

                flexWrap:
                  "wrap",

                marginTop:
                  "30px",
              }}
            >
              <Link
                href="/region"
                style={{
                  padding:
                    "16px 22px",

                  borderRadius:
                    "14px",

                  background:
                    "#ffffff",

                  color:
                    "#2563eb",

                  textDecoration:
                    "none",

                  fontWeight:
                    900,
                }}
              >
                지역별 보험점검
              </Link>

              <a
                href={PHONE_LINK}
                style={{
                  padding:
                    "16px 22px",

                  borderRadius:
                    "14px",

                  border:
                    "1px solid rgba(255,255,255,0.4)",

                  color:
                    "#ffffff",

                  textDecoration:
                    "none",

                  fontWeight:
                    900,
                }}
              >
                ☎ {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div
            style={{
              padding:
                "28px",

              borderRadius:
                "24px",

              background:
                "rgba(255,255,255,0.12)",

              border:
                "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <strong
              style={{
                fontSize:
                  "18px",
              }}
            >
              이런 경우 확인해보세요
            </strong>

            {[
              "가입한 보험이 많아 내용을 잘 모를 때",
              "보험료가 적절한지 궁금할 때",
              "비슷한 보장이 겹쳐 있는지 궁금할 때",
              "현재 보장이 충분한지 확인하고 싶을 때",
            ].map(
              (text) => (
                <div
                  key={text}
                  style={{
                    padding:
                      "16px 0",

                    borderBottom:
                      "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  ✓ {text}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* 점검내용 */}

      <section
        style={{
          maxWidth:
            "1100px",

          margin:
            "0 auto",

          padding:
            "75px 20px",
        }}
      >
        <div
          style={{
            textAlign:
              "center",

            marginBottom:
              "38px",
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
            }}
          >
            INSURANCE CHECK
          </div>

          <h2
            style={{
              fontSize:
                "34px",

              margin:
                "10px 0",
            }}
          >
            보험점검 항목
          </h2>

          <p
            style={{
              color:
                "#6b7280",
            }}
          >
            현재 가입한 보험을
            기준으로 확인합니다.
          </p>
        </div>

        <div
          style={{
            display:
              "grid",

            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",

            gap:
              "18px",
          }}
        >
          {checkItems.map(
            (item) => (
              <div
                key={
                  item.title
                }
                style={{
                  padding:
                    "28px",

                  background:
                    "#ffffff",

                  border:
                    "1px solid #e5e7eb",

                  borderRadius:
                    "20px",
                }}
              >
                <div
                  style={{
                    color:
                      "#2563eb",

                    fontWeight:
                      900,

                    marginBottom:
                      "15px",
                  }}
                >
                  {item.number}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p
                  style={{
                    color:
                      "#6b7280",

                    lineHeight:
                      1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* 지역 */}

      <section
        style={{
          background:
            "#eef4ff",

          padding:
            "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth:
              "1100px",

            margin:
              "0 auto",
          }}
        >
          <div
            style={{
              textAlign:
                "center",

              marginBottom:
                "35px",
            }}
          >
            <div
              style={{
                color:
                  "#2563eb",

                fontWeight:
                  900,
              }}
            >
              지역별 보험점검
            </div>

            <h2
              style={{
                fontSize:
                  "34px",
              }}
            >
              원하는 지역을
              선택하세요
            </h2>

            <p
              style={{
                color:
                  "#6b7280",
              }}
            >
              서울 · 경기 · 인천 ·
              충남 · 충북
            </p>
          </div>

          <div
            style={{
              display:
                "grid",

              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",

              gap:
                "15px",
            }}
          >
            {regions.map(
              (region) => (
                <Link
                  key={
                    region.slug
                  }
                  href={`/region/${region.slug}`}
                  style={{
                    padding:
                      "25px 18px",

                    background:
                      "#ffffff",

                    borderRadius:
                      "18px",

                    border:
                      "1px solid #dbeafe",

                    textDecoration:
                      "none",

                    color:
                      "#111827",

                    textAlign:
                      "center",
                  }}
                >
                  <strong
                    style={{
                      display:
                        "block",

                      fontSize:
                        "22px",

                      marginBottom:
                        "7px",
                    }}
                  >
                    {region.name}
                  </strong>

                  <span
                    style={{
                      color:
                        "#6b7280",

                      fontSize:
                        "14px",
                    }}
                  >
                    {region.desc}
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* 전화 */}

      <section
        style={{
          padding:
            "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth:
              "800px",

            margin:
              "0 auto",

            padding:
              "40px 25px",

            textAlign:
              "center",

            borderRadius:
              "24px",

            background:
              "#ffffff",

            border:
              "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              color:
                "#2563eb",

              fontWeight:
                900,
            }}
          >
            보험점검 문의
          </div>

          <h2
            style={{
              fontSize:
                "32px",
            }}
          >
            전화로 상담하세요
          </h2>

          <a
            href={PHONE_LINK}
            style={{
              display:
                "inline-block",

              marginTop:
                "10px",

              padding:
                "16px 26px",

              background:
                "#2563eb",

              color:
                "#ffffff",

              borderRadius:
                "14px",

              textDecoration:
                "none",

              fontSize:
                "20px",

              fontWeight:
                900,
            }}
          >
            ☎ {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <footer
        style={{
          padding:
            "35px 20px",

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

        서울 · 경기 · 인천 ·
        충남 · 충북 보험 보장분석 안내

        <br />

        상담전화 {PHONE_DISPLAY}
      </footer>
    </main>
  );
}
