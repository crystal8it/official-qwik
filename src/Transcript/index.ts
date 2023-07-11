import thrctPng from '~/assets/thrct.png';
import thrctWebp from '~/assets/thrct.webp';
import grPng from '~/assets/gr.png';
import grWebp from '~/assets/gr.webp';
import ilensPng from '~/assets/ilens.png';
import ilensWebp from '~/assets/ilens.webp';
import pastaCoPng from '~/assets/pastaCo.png';
import pastaCoWebp from '~/assets/pastaCo.webp';

const WebDesignAndSystemDesignTranscript = [
  {
    title: '網站與系統客製化',
    content:
      '適應各裝置的RWD網站可以幫助企業展示品牌形象，並吸引更多目標受眾。良好的系統也可以根據需求進行客製化，讓讓業務流程更加順暢。',
  },
  {
    title: '安全與可靠性',
    content:
      '多重驗證、定期備份、加密和授權限制等，都是確保資料安全的好方法，我們也能替您在大流量進入時監控把關，確保運行穩定，斷絕可能存在的風險和意外。',
  },
  {
    title: '有效的數據管理',
    content:
      '我們提供數據管理服務，幫助您優化SEO、了解流量、用戶行為和市場趨勢，進而增加銷量。客製化系統更更可以通過數據管理流程、訂單、客戶等，省下更多人力資源。',
  },
];

type ProtofolioTranscript = {
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

const ProtofolioTranscript: ProtofolioTranscript[] = [
  {
    title: '財團法人方興中馬匹輔學健康社福基金會募資網站',
    subTitle: '募資進度與目標輕鬆掌握',
    tag: ['活動網站', '公益行銷'],
    src: thrctPng,
    sources: [{ srcSet: thrctWebp, type: 'image/webp' }],
    alt: '財團法人方興中馬匹輔學健康社福基金會',
  },
  {
    title: '廣容綠化有限公司專案管理系統',
    subTitle: '脫離紙本苦海,專案.人員管理都變輕鬆了',
    tag: ['系統設計', '工商企業'],
    src: grPng,
    sources: [{ srcSet: grWebp, type: 'image/webp' }],
    alt: '廣容綠化有限公司',
  },
  {
    title: '愛能視隱形眼鏡銷售據點',
    subTitle: '據點與販售系列都能一手掌握',
    tag: ['CYBERBIZ系統頁面客製', '工商企業'],
    src: ilensPng,
    sources: [{ srcSet: ilensWebp, type: 'image/webp' }],
    alt: '愛能視隱形眼鏡',
  },
  {
    title: 'PASTA & CO 電子信箱網域設定',
    subTitle: 'email地址也是pastaco.tw了,專業形象upup!',
    tag: ['網路服務', '工商企業'],
    src: pastaCoPng,
    sources: [{ srcSet: pastaCoWebp, type: 'image/webp' }],
    alt: 'PASTA & CO Resaturant',
  },
];

export { WebDesignAndSystemDesignTranscript, ProtofolioTranscript };
