export const site = {
  name: "東関東馬事高等学院",
  shortName: "バジガク",
  tagline: "馬と共に過ごす、かけがえのない高校3年間。",
  description:
    "千葉県山武市にある馬の学校「東関東馬事高等学院（バジガク）」。広域通信制高校・中央国際高等学校との連携により、馬と共に過ごしながら高校卒業資格を取得。騎手・厩務員・乗馬業界への進路を全力でサポートします。",
  url: "https://bajigaku.net",
  tel: "050-6875-3336",
  telHours: "平日 9:00 - 17:00",
  fax: "050-6875-3337",
  address: "〒289-1213 千葉県山武市雨坪10番地（旧・日向小学校）",
  principal: "野口佳槻",
  founded: "2009年1月",
  sns: {
    youtube: "https://www.youtube.com/@umastable",
    instagram: "https://www.instagram.com/bajigakuin/",
    twitter: "https://twitter.com/bajigakuin",
  },
  forms: {
    shiryo: "https://bajigaku.net/shiryo/",
    taiken: "https://bajigaku.net/taiken-1/",
    contact: "/contact",
  },
} as const;

export type NavChild = { label: string; href: string; en?: string };
export type NavItem = {
  label: string;
  href?: string;
  en?: string;
  children?: NavChild[];
};

export const nav: NavItem[] = [
  { label: "TOP", href: "/", en: "TOP" },
  { label: "本校の特徴", href: "/tokucho", en: "FEATURES" },
  { label: "コース紹介", href: "/course", en: "COURSES" },
  { label: "募集要項", href: "/boshu", en: "ADMISSION" },
  { label: "学校見学", href: "/opencampus", en: "OPEN CAMPUS" },
  {
    label: "進路・サポート",
    en: "SUPPORT",
    children: [
      { label: "JRA厩務員を目指す方へ", href: "/kyumuin" },
      { label: "騎手を目指す方へ", href: "/jockey" },
      { label: "中3対象・騎手受験事前合宿", href: "/camp" },
      { label: "不登校からの高校進学", href: "/support" },
    ],
  },
  { label: "学校概要", href: "/gaiyo", en: "ABOUT" },
  { label: "FAQ", href: "/qa", en: "Q&A" },
];

export const footerNav: { label: string; href: string }[] = [
  { label: "HOME", href: "/" },
  { label: "本校の特徴", href: "/tokucho" },
  { label: "コース紹介", href: "/course" },
  { label: "募集要項", href: "/boshu" },
  { label: "学校見学・オープンキャンパス", href: "/opencampus" },
  { label: "学校概要", href: "/gaiyo" },
  { label: "JRA厩務員を目指す方へ", href: "/kyumuin" },
  { label: "騎手を目指す方へ", href: "/jockey" },
  { label: "騎手受験事前合宿（中3対象）", href: "/camp" },
  { label: "不登校からの高校進学", href: "/support" },
  { label: "よくある質問 Q&A", href: "/qa" },
];
