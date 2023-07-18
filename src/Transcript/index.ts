// Protofolio
import thrctProtofolioPng from '~/assets/protofolio/thrct.png';
import thrctProtofolioWebp from '~/assets/protofolio/thrct.webp';
import grProtofolioPng from '~/assets/protofolio/gr.png';
import grProtofolioWebp from '~/assets/protofolio/gr.webp';
import ilensProtofolioPng from '~/assets/protofolio/ilens.png';
import ilensProtofolioWebp from '~/assets/protofolio/ilens.webp';
import pastaCoProtofolioPng from '~/assets/protofolio/pastaCo.png';
import pastaCoProtofolioWebp from '~/assets/protofolio/pastaCo.webp';

// logo
import ilensLogoPng from '~/assets/logo/ilensLogo.png';
import ilensLogoWebp from '~/assets/logo/ilensLogo.webp';
import yljLogoPng from '~/assets/logo/yljLogo.png';
import yljLogoWebp from '~/assets/logo/yljLogo.webp';
import pastaCoLogoPng from '~/assets/logo/pastaCoLogo.png';
import pastaCoLogoWebp from '~/assets/logo/pastaCoLogo.webp';
import grLogoPng from '~/assets/logo/grLogo.png';
import grLogoWebp from '~/assets/logo/grLogo.webp';
import cyberbizLogoPng from '~/assets/logo/cyberbizLogo.png';
import cyberbizLogoWebp from '~/assets/logo/cyberbizLogo.webp';
import thrctLogoPng from '~/assets/logo/thrctLogo.png';
import thrctLogoWebp from '~/assets/logo/thrctLogo.webp';
import kkckLogoPng from '~/assets/logo/kkckLogo.png';
import kkckLogoWebp from '~/assets/logo/kkckLogo.webp';

type TServiceTranscript = {
  title: string;
  engTitle: string;
  content: string;
};

const ServiceTranscript: TServiceTranscript[] = [
  {
    title: '網頁設計與系統開發',
    engTitle: 'Web & system design',
    content:
      'RWD網站可以幫助企業展示品牌形象，並吸引更多目標受眾。良好的系統也可以根據需求進行客製化，讓讓業務流程更加順暢。',
  },
  {
    title: '數據分析和機器人代操',
    engTitle: 'Data analysis & automation',
    content:
      '我們提供數據管理服務，幫助您優化SEO、了解流量、用戶行為和市場趨勢，進而增加銷量。客製化系統更更可以通過數據管理流程、訂單、客戶等，省下更多人力資源。',
  },
  {
    title: '企業數位化諮詢與協助',
    engTitle: 'Digital transformation',
    content:
      '多重驗證、定期備份、加密和授權限制等，都是確保資料安全的好方法，我們也能替您在大流量進入時監控把關，確保運行穩定，斷絕可能存在的風險和意外。',
  },
];

type TProtofolioTranscript = {
  title: string;
  subTitle: string;
  tag: string[];
  src: string;
  sources: {
    srcSet: string;
    type: 'image/webp' | 'image/png' | 'image/jpeg';
  }[];
  alt: string;
};

const ProtofolioTranscript: TProtofolioTranscript[] = [
  {
    title: '財團法人方興中馬匹輔學健康社福基金會募資網站',
    subTitle: '募資進度與目標輕鬆掌握',
    tag: ['活動網站', '公益行銷'],
    src: thrctProtofolioPng,
    sources: [{ srcSet: thrctProtofolioWebp, type: 'image/webp' }],
    alt: '財團法人方興中馬匹輔學健康社福基金會',
  },
  {
    title: '廣容綠化有限公司專案管理系統',
    subTitle: '脫離紙本苦海,專案.人員管理都變輕鬆了',
    tag: ['系統設計', '工商企業'],
    src: grProtofolioPng,
    sources: [{ srcSet: grProtofolioWebp, type: 'image/webp' }],
    alt: '廣容綠化有限公司',
  },
  {
    title: '愛能視隱形眼鏡銷售據點',
    subTitle: '據點與販售系列都能一手掌握',
    tag: ['CYBERBIZ系統頁面客製', '工商企業'],
    src: ilensProtofolioPng,
    sources: [{ srcSet: ilensProtofolioWebp, type: 'image/webp' }],
    alt: '愛能視隱形眼鏡',
  },
  {
    title: 'PASTA & CO 電子信箱網域設定',
    subTitle: 'email地址也是pastaco.tw了,專業形象upup!',
    tag: ['網路服務', '工商企業'],
    src: pastaCoProtofolioPng,
    sources: [{ srcSet: pastaCoProtofolioWebp, type: 'image/webp' }],
    alt: 'PASTA & CO Resaturant',
  },
];

type TPartnerTranscript = {
  href: string;
  src: string;
  sources: {
    srcSet: string;
    type: 'image/webp' | 'image/png' | 'image/jpeg';
  }[];
  alt: string;
};

const PartnerTranscript: TPartnerTranscript[] = [
  {
    href: 'https://www.ilens.com.tw/',
    src: ilensLogoPng,
    sources: [{ srcSet: ilensLogoWebp, type: 'image/webp' }],
    alt: '愛能視隱形眼鏡, Ilens',
  },
  {
    href: 'https://www.grace888.com.tw/',
    src: yljLogoPng,
    sources: [{ srcSet: yljLogoWebp, type: 'image/webp' }],
    alt: '翊麗嘉環境工程有限公司',
  },
  {
    href: 'https://www.pastaco.tw/zh-TW',
    src: pastaCoLogoPng,
    sources: [{ srcSet: pastaCoLogoWebp, type: 'image/webp' }],
    alt: 'PASTA & CO',
  },
  {
    href: 'https://www.grace888.com.tw/',
    src: grLogoPng,
    sources: [{ srcSet: grLogoWebp, type: 'image/webp' }],
    alt: '廣容綠化有限公司',
  },

  {
    href: 'https://www.cyberbiz.io/',
    src: cyberbizLogoPng,
    sources: [{ srcSet: cyberbizLogoWebp, type: 'image/webp' }],
    alt: 'CYBERBIZ線上商務與線下整合開店平台, 順利智慧股份有限公司',
  },
  {
    href: 'https://www.thrct.org/',
    src: thrctLogoPng,
    sources: [{ srcSet: thrctLogoWebp, type: 'image/webp' }],
    alt: '希望馬場, 財團法人方興中馬匹輔學健康社福基金會',
  },
  {
    href: 'https://www.blossombeaute.com/',
    src: kkckLogoPng,
    sources: [{ srcSet: kkckLogoWebp, type: 'image/webp' }],
    alt: '諄宏企業股份有限公司, 4u2, blossombeaute',
  },
];

type TProcessTranscript = {
  content: string;
};

const ProcessTranscript: TProcessTranscript[] = [
  {
    content: '瞭解需求',
  },
  {
    content: '提供報價',
  },
  {
    content: '設計開發',
  },
  {
    content: '測試優化',
  },
  {
    content: '上線交付',
  },
  {
    content: '維護支援',
  },
];

export {
  ServiceTranscript,
  ProtofolioTranscript,
  PartnerTranscript,
  ProcessTranscript,
};
