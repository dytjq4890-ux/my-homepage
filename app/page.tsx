import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px 20px",
          background:
            "linear-gradient(135deg, #2563eb, #1d4ed8)",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 700,
              marginBottom: "16px",
            }}
          >
            보험 보장분석 안내
          </div>

          <h1
            style={{
              fontSize: "42px",
              lineHeight: 1.3,
              margin: "0 0 18px",
            }}
          >
            내 보험
            <br />
            제대로 확인해보세요
          </h1>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              marginBottom: "30px",
              opacity: 0.95,
            }}
          >
            현재 가입한 보험의 보장내용,
            중복보장, 부족할 수 있는 보장 등을
            확인할 수 있도록 안내합니다.
          </p>

          <Link
            href="/region/seoul"
            style={{
              display: "inline-block",
              background: "#ffffff",
              color: "#2563eb",
              padding: "15px 24px",
              borderRadius: "12px",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            서울 지역 보험점검
          </Link>
        </div>
      </section>
    </main>
  );
}
