import Link from "next/link";

import {
  PHONE_DISPLAY,
  PHONE_LINK,
} from "./region/data";

const KAKAO_URL =
  "https://open.kakao.com/o/sDHKtQJi";

const PROFILE_IMAGE =
  "/profile.png";

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
    desc: "인천 구·군",
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
      "비슷한 보장이 여러 보험에 겹쳐 있는지 확인합니다.",
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
          background: "rgba(255,255,255,0.96)",
          borderBottom: "1px solid #e5e7eb",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "15px 20px",
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
              fontSize: "22px",
            }}
          >
            보험점검
          </Link>

          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "11px 14px",
                borderRadius: "11px",
                background: "#FEE500",
                color: "#191919",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 900,
              }}
            >
              카톡상담
            </a>

            <a
              href={PHONE_LINK}
              style={{
                padding: "11px 14px",
                borderRadius: "11px",
                background: "#2563eb",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 900,
              }}
            >
              전화상담
            </a>
          </div>
        </div>
      </header>

      {/* 히어로 */}

      <section
        style={{
          padding: "85px 20px",
          background:
            "linear-gradient(135deg,#1d4ed8,#2563eb,#3b82f6)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(290px,1fr))",
            gap: "45px",
            alignItems: "center",
          }}
        >
          {/* 왼쪽 */}

          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 15px",
                marginBottom: "18px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.15)",
                border:
                  "1px solid rgba(255,255,255,0.2)",
                fontWeight: 800,
                fontSize: "14px",
              }}
            >
              보험 보장분석 안내
            </div>

            <h1
              style={{
                margin: "0 0 20px",
                fontSize:
                  "clamp(42px,7vw,66px)",
                lineHeight: 1.15,
                letterSpacing: "-2px",
              }}
            >
              내 보험,
              <br />
              제대로
              확인해보세요
            </h1>

            <p
              style={{
                maxWidth: "620px",
                margin: 0,
                fontSize: "18px",
                lineHeight: 1.8,
                opacity: 0.95,
              }}
            >
              현재 가입한 보험의
              보장내용, 중복보장,
              부족할 수 있는 보장 등을
              확인할 수 있도록 안내합니다.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "30px",
              }}
            >
              <a
                href={PHONE_LINK}
                style={{
                  padding: "16px 22px",
                  borderRadius: "14px",
                  background: "#ffffff",
                  color: "#2563eb",
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
                  padding: "16px 22px",
                  borderRadius: "14px",
                  background: "#FEE500",
                  color: "#191919",
                  textDecoration: "none",
                  fontWeight: 900,
                }}
              >
                카카오톡 상담
              </a>
            </div>
          </div>

          {/* 오른쪽 프로필 */}

          <div
            style={{
              background: "rgba(255,255,255,0.12)",
              border:
                "1px solid rgba(255,255,255,0.2)",
              borderRadius: "28px",
              padding: "26px",
              textAlign: "center",
              boxShadow:
                "0 18px 50px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                width: "190px",
                height: "190px",
                margin: "0 auto 20px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "5px solid #ffffff",
                background: "#ffffff",
              }}
            >
              <img
                src={PROFILE_IMAGE}
                alt="보험점검 상담"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              style={{
                fontSize: "22px",
                fontWeight: 900,
                marginBottom: "8px",
              }}
            >
              보험점검 상담
            </div>

            <p
              style={{
                margin: "0 0 20px",
                lineHeight: 1.7,
                opacity: 0.9,
                fontSize: "15px",
              }}
            >
              현재 가입한 보험을
              함께 확인하고
              보장내용을 안내드립니다.
            </p>

            <a
              href={PHONE_LINK}
              style={{
                display: "block",
                padding: "15px",
                borderRadius: "13px",
                background: "#ffffff",
                color: "#2563eb",
                textDecoration: "none",
                fontWeight: 900,
                marginBottom: "10px",
              }}
            >
              ☎ {PHONE_DISPLAY}
            </a>

            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "15px",
                borderRadius: "13px",
                background: "#FEE500",
                color: "#191919",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              카카오톡 바로 상담
            </a>
          </div>
        </div>
      </section>

      {/* 보험점검 항목 */}

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "75px 20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "38px",
          }}
        >
          <div
            style={{
              color: "#2563eb",
              fontWeight: 900,
              fontSize: "14px",
            }}
          >
            INSURANCE CHECK
          </div>

          <h2
            style={{
              fontSize: "34px",
              margin: "10px 0",
            }}
          >
            보험점검 항목
          </h2>

          <p
            style={{
              color: "#6b7280",
            }}
          >
            현재 가입한 보험을
            기준으로 확인합니다.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "18px",
          }}
        >
          {checkItems.map((item) => (
            <div
              key={item.title}
              style={{
                padding: "28px",
                background: "#ffffff",
                border:
                  "1px solid #e5e7eb",
                borderRadius: "20px",
                boxShadow:
                  "0 8px 28px rgba(15,23,42,0.04)",
              }}
            >
              <div
                style={{
                  color: "#2563eb",
                  fontWeight: 900,
                  marginBottom: "15px",
                }}
              >
                {item.number}
              </div>

              <h3>
                {item.title}
              </h3>

              <p
                style={{
                  color: "#6b7280",
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 지역 */}

      <section
        style={{
          background: "#eef4ff",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "35px",
            }}
          >
            <div
              style={{
                color: "#2563eb",
                fontWeight: 900,
              }}
            >
              지역별 보험점검
            </div>

            <h2
              style={{
                fontSize: "34px",
                marginBottom: "10px",
              }}
            >
              원하는 지역을
              선택하세요
            </h2>

            <p
              style={{
                color: "#6b7280",
              }}
            >
              서울 · 경기 · 인천 ·
              충남 · 충북
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "15px",
            }}
          >
            {regions.map((region) => (
              <Link
                key={region.slug}
                href={`/region/${region.slug}`}
                style={{
                  padding: "25px 18px",
                  background: "#ffffff",
                  borderRadius: "18px",
                  border:
                    "1px solid #dbeafe",
                  textDecoration: "none",
                  color: "#111827",
                  textAlign: "center",
                  boxShadow:
                    "0 6px 18px rgba(37,99,235,0.05)",
                }}
              >
                <strong
                  style={{
                    display: "block",
                    fontSize: "22px",
                    marginBottom: "7px",
                  }}
                >
                  {region.name}
                </strong>

                <span
                  style={{
                    color: "#6b7280",
                    fontSize: "14px",
                  }}
                >
                  {region.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 */}

      <section
        style={{
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            padding: "42px 25px",
            textAlign: "center",
            borderRadius: "24px",
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
            보험점검 문의
          </div>

          <h2
            style={{
              fontSize: "32px",
              marginBottom: "10px",
            }}
          >
            편한 방법으로 상담하세요
          </h2>

          <p
            style={{
              color: "#6b7280",
              marginBottom: "25px",
            }}
          >
            전화 또는 카카오톡으로
            문의할 수 있습니다.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <a
              href={PHONE_LINK}
              style={{
                padding: "16px 25px",
                background: "#2563eb",
                color: "#ffffff",
                borderRadius: "14px",
                textDecoration: "none",
                fontSize: "18px",
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
                padding: "16px 25px",
                background: "#FEE500",
                color: "#191919",
                borderRadius: "14px",
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: 900,
              }}
            >
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      {/* 안내 */}

      <section
        style={{
          maxWidth: "950px",
          margin: "0 auto",
          padding: "0 20px 70px",
        }}
      >
        <div
          style={{
            padding: "20px",
            background: "#fff7ed",
            border: "1px solid #fed7aa",
            borderRadius: "16px",
            color: "#7c2d12",
            fontSize: "14px",
            lineHeight: 1.8,
          }}
        >
          보험 상품의 가입·변경·해지는
          개인의 상황과 계약 조건에 따라
          달라질 수 있습니다.
          기존 보험을 변경하거나
          해지하기 전에는 현재 계약의
          보장내용, 해지환급금 및
          새로운 보험의 가입 가능 여부 등을
          반드시 확인하시기 바랍니다.
        </div>
      </section>

      {/* 푸터 */}

      <footer
        style={{
          padding: "38px 20px",
          background: "#111827",
          color: "#d1d5db",
          textAlign: "center",
          lineHeight: 1.9,
          fontSize: "14px",
        }}
      >
        <strong
          style={{
            color: "#ffffff",
            fontSize: "17px",
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
