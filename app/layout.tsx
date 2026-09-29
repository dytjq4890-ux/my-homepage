import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://my-homepage-red-theta.vercel.app"
  ),

  title: {
    default: "보험점검 | 보험 보장분석",
    template: "%s | 보험점검",
  },

  description:
    "지역별 보험점검 및 보험 보장분석 안내. 현재 가입한 보험의 보장내용, 중복보장, 부족한 보장 등을 확인해보세요.",
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
