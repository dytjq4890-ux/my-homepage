
export const PHONE = "01086462117";
export const PHONE_DISPLAY = "010-8646-2117";
export const PHONE_LINK = `tel:${PHONE}`;

export const SITE_URL = "https://bohumreport.com";

/* =====================================
   지역 데이터
===================================== */

export const REGION_DATA = {
  seoul: {
    name: "서울",
    fullName: "서울특별시",
    districts: {
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
    },
  },

  gyeonggi: {
    name: "경기",
    fullName: "경기도",
    districts: {
      suwon: "수원시",
      seongnam: "성남시",
      uijeongbu: "의정부시",
      anyang: "안양시",
      bucheon: "부천시",
      gwangmyeong: "광명시",
      pyeongtaek: "평택시",
      dongducheon: "동두천시",
      ansan: "안산시",
      goyang: "고양시",
      gwacheon: "과천시",
      guri: "구리시",
      namyangju: "남양주시",
      osan: "오산시",
      siheung: "시흥시",
      gunpo: "군포시",
      uiwang: "의왕시",
      hanam: "하남시",
      yongin: "용인시",
      paju: "파주시",
      icheon: "이천시",
      anseong: "안성시",
      gimpo: "김포시",
      hwaseong: "화성시",
      gwangju: "광주시",
      yangju: "양주시",
      pocheon: "포천시",
      yeoju: "여주시",
      yeoncheon: "연천군",
      gapyeong: "가평군",
      yangpyeong: "양평군",
    },
  },

  incheon: {
    name: "인천",
    fullName: "인천광역시",
    districts: {
      jung: "중구",
      dong: "동구",
      michuhol: "미추홀구",
      yeonsu: "연수구",
      namdong: "남동구",
      bupyeong: "부평구",
      gyeyang: "계양구",
      seo: "서구",
      ganghwa: "강화군",
      ongjin: "옹진군",
    },
  },

  chungnam: {
    name: "충남",
    fullName: "충청남도",
    districts: {
      cheonan: "천안시",
      gongju: "공주시",
      boryeong: "보령시",
      asan: "아산시",
      seosan: "서산시",
      nonsan: "논산시",
      gyeryong: "계룡시",
      dangjin: "당진시",
      geumsan: "금산군",
      buyeo: "부여군",
      seocheon: "서천군",
      cheongyang: "청양군",
      hongseong: "홍성군",
      yesan: "예산군",
      taean: "태안군",
    },
  },

  chungbuk: {
    name: "충북",
    fullName: "충청북도",
    districts: {
      cheongju: "청주시",
      chungju: "충주시",
      jecheon: "제천시",
      boeun: "보은군",
      okcheon: "옥천군",
      yeongdong: "영동군",
      jeungpyeong: "증평군",
      jincheon: "진천군",
      goesan: "괴산군",
      eumseong: "음성군",
      danyang: "단양군",
    },
  },
} as const;

/* =====================================
   타입
===================================== */

export type RegionSlug = keyof typeof REGION_DATA;

export type DistrictSeoData = {
  region: RegionSlug;
  district: string;
  regionName: string;
  regionFullName: string;
  districtName: string;
  fullName: string;
  title: string;
  description: string;
  h1: string;
  canonical: string;
  keywords: string[];
};

/* =====================================
   지역 조회
===================================== */

export function getRegionName(
  region: string
): string | null {
  if (!(region in REGION_DATA)) {
    return null;
  }

  return REGION_DATA[region as RegionSlug].name;
}

export function getRegionFullName(
  region: string
): string | null {
  if (!(region in REGION_DATA)) {
    return null;
  }

  return REGION_DATA[region as RegionSlug].fullName;
}

export function getDistrictName(
  region: string,
  district: string
): string | null {
  if (!(region in REGION_DATA)) {
    return null;
  }

  const districts = REGION_DATA[
    region as RegionSlug
  ].districts as Record<string, string>;

  return districts[district] ?? null;
}

/* =====================================
   전체 지역 URL 생성
===================================== */

export function getAllDistricts() {
  const result: {
    region: RegionSlug;
    district: string;
    name: string;
  }[] = [];

  for (const region of Object.keys(
    REGION_DATA
  ) as RegionSlug[]) {
    const districts = REGION_DATA[
      region
    ].districts as Record<string, string>;

    for (const [district, name] of Object.entries(
      districts
    )) {
      result.push({
        region,
        district,
        name,
      });
    }
  }

  return result;
}

/* =====================================
   지역별 SEO 데이터
===================================== */

export function getDistrictSeoData(
  region: string,
  district: string
): DistrictSeoData | null {
  if (!(region in REGION_DATA)) {
    return null;
  }

  const regionSlug = region as RegionSlug;
  const regionData = REGION_DATA[regionSlug];

  const districts = regionData.districts as Record<
    string,
    string
  >;

  const districtName = districts[district];

  if (!districtName) {
    return null;
  }

  const fullName =
    `${regionData.fullName} ${districtName}`;

  const canonical =
    `${SITE_URL}/region/${region}/${district}`;

  const title =
    `${districtName} 보험점검 | 보험 보장분석 및 가입내역 확인 - 보험점검리포트`;

  const description =
    `${fullName} 보험점검 안내. 기존 보험 가입내역, 보장 구성, 중복 보장 및 부족할 수 있는 보장 항목을 확인하는 보험점검리포트 상담 정보를 제공합니다.`;

  const h1 =
    `${districtName} 보험점검 및 보장분석 안내`;

  const keywords = [
    `${districtName} 보험점검`,
    `${districtName} 보험분석`,
    `${districtName} 보험리모델링`,
    `${districtName} 보험상담`,
    `${districtName} 보장분석`,
    `${regionData.name} 보험점검`,
    "보험 가입내역 확인",
    "보험 보장분석",
    "보험점검리포트",
  ];

  return {
    region: regionSlug,
    district,
    regionName: regionData.name,
    regionFullName: regionData.fullName,
    districtName,
    fullName,
    title,
    description,
    h1,
    canonical,
    keywords,
  };
}
