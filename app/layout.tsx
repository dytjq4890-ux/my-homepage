import type { Metadata } from "next";

const SITE_URL = "https://bohumreport.com";

const SITE_TITLE = "보험점검센터 | 보험점검·보장분석";

const SITE_DESCRIPTION =
  "가입한 보험의 보장내용과 보험료, 중복·부족한 보장을 확인하는 보험점검센터입니다.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | 보험점검센터",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "보험점검",
    "보험점검센터",
    "보험분석",
    "보험보장분석",
    "보험료점검",
    "보험가입점검",
    "보험설계사",
    "신요섭",
    "서울 보험점검",
    "경기 보험점검",
    "인천 보험점검",
    "충남 보험점검",
    "충북 보험점검",
  ],

  authors: [
    {
      name: "신요섭",
    },
  ],

  creator: "신요섭",

  publisher: "보험점검센터",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  verification: {
    other: {
      "naver-site-verification":
        "9859fc43acc82f5c0ac00890a47f1780a6c5c367",
    },
  },

  openGraph: {
    type: "website",

    locale: "ko_KR",

    url: SITE_URL,

    siteName: "보험점검센터",

    title: SITE_TITLE,

    description:
      "가입한 보험의 보장내용과 보험료, 중복·부족한 보장을 확인해보세요.",

    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "보험점검센터",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: SITE_TITLE,

    description:
      "가입한 보험의 보장내용과 보험료, 중복·부족한 보장을 확인해보세요.",

    images: ["/profile.png"],
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
