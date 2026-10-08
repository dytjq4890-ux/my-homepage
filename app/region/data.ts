export const PHONE = "01086462117";

export const PHONE_DISPLAY = "010-8646-2117";

export const PHONE_LINK = `tel:${PHONE}`;

export const SITE_URL =
  "https://bohumreport.com";


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


export type RegionSlug =
  keyof typeof REGION_DATA;


/* =====================================
   지역명 자동 변환
===================================== */

/*
  강남구 → 강남
  영등포구 → 영등포
  수원시 → 수원
  강화군 → 강화

  단, 실제 페이지 URL과 원래 지역명은
  절대로 변경하지 않습니다.
*/
export function getShortDistrictName(
  districtName: string
) {
  if (
    districtName.endsWith("구") ||
    districtName.endsWith("시") ||
    districtName.endsWith("군")
  ) {
    return districtName.slice(0, -1);
  }

  return districtName;
}


/* =====================================
   지역명 정규화
===================================== */

/*
  검색할 때

  부천   → 부천
  부천시 → 부천

  수원   → 수원
  수원시 → 수원

  영등포   → 영등포
  영등포구 → 영등포

  처럼 동일하게 인식하도록 합니다.
*/
export function normalizeDistrictName(
  districtName: string
) {
  return districtName
    .trim()
    .replace(/특별시$/g, "")
    .replace(/광역시$/g, "")
    .replace(/특별자치시$/g, "")
    .replace(/특별자치도$/g, "")
    .replace(/자치도$/g, "")
    .replace(/도$/g, "")
    .replace(/시$/g, "")
    .replace(/군$/g, "")
    .replace(/구$/g, "");
}


/* =====================================
   지역명 일치 여부 확인
===================================== */

/*
  부천 ↔ 부천시
  수원 ↔ 수원시
  영등포 ↔ 영등포구

  모두 같은 지역으로 판단합니다.
*/
export function isSameDistrict(
  districtA: string,
  districtB: string
) {
  return (
    normalizeDistrictName(districtA) ===
    normalizeDistrictName(districtB)
  );
}


/* =====================================
   지역 검색어 자동 생성
===================================== */

export function getDistrictSearchTerms(
  districtName: string,
  regionName: string
) {
  const shortName =
    getShortDistrictName(districtName);

  return [
    /* 지역명 */
    shortName,
    districtName,

    /* 보험점검 */
    `${shortName} 보험점검`,
    `${districtName} 보험점검`,

    /* 보험상담 */
    `${shortName} 보험상담`,
    `${districtName} 보험상담`,

    /* 보험분석 */
    `${shortName} 보험분석`,
    `${districtName} 보험분석`,

    /* 보장분석 */
    `${shortName} 보장분석`,
    `${districtName} 보장분석`,

    /* 광역지역 + 지역 */
    `${regionName} ${shortName}`,
    `${regionName} ${districtName}`,

    `${regionName} ${shortName} 보험점검`,
    `${regionName} ${districtName} 보험점검`,
  ];
}


/* =====================================
   지역 SEO 정보 자동 생성
===================================== */

export function getDistrictSeoData(
  districtName: string,
  regionName: string
) {
  const shortName =
    getShortDistrictName(districtName);

  return {
    shortName,

    fullName: districtName,

    searchTerms:
      getDistrictSearchTerms(
        districtName,
        regionName
      ),

    title:
      `${shortName} 보험점검 | 보험 보장분석 상담`,

    description:
      `${shortName} 보험점검 및 보험 보장분석 안내. ` +
      `가입한 보험의 보장내용과 보험료, 중복보장, 부족할 수 있는 보장을 확인해보세요.`,

    heading:
      `${shortName} 보험점검`,

    subHeading:
      `${shortName} 보험 보장분석 및 보험상담`,

    consultationTitle:
      `${shortName} 보험점검 상담`,

    regionText:
      `${regionName} ${shortName}`,
  };
}
