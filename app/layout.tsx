import type { Metadata } from "next";

const SITE_URL = "https://bohumreport.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "보험점검 | 보험 보장분석",
    template: "%s | 보험점검",
  },

  description:
    "서울·경기·인천·충남·충북 지역별 보험점검 및 보험 보장분석 안내. 현재 가입한 보험의 보장내용, 중복보장, 부족할 수 있는 보장 등을 확인해보세요.",

  verification: {
    other: {
      "naver-site-verification":
        "9859fc43acc82f5c0ac00890a47f1780a6c5c367",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        style={{
          margin: 0,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Noto Sans KR', Arial, sans-serif",
          background: "#f6f8fb",
          color: "#1f2937",
        }}
      >
        {children}
      </body>
    </html>
  );
}
