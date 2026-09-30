export const PHONE = "01086462117";
export const PHONE_DISPLAY = "010-8646-2117";
export const PHONE_LINK = `tel:${PHONE}`;

export const SITE_URL =
  "https://bohumreport.com";

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
