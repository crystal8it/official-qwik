import thrctProtofolioPng from '../assets/protofolio/thrct.png';
import thrctProtofolioWebp from '../assets/protofolio/thrct.webp';
import grProtofolioPng from '../assets/protofolio/gr.png';
import grProtofolioWebp from '../assets/protofolio/gr.webp';
import ilensProtofolioPng from '../assets/protofolio/ilens.png';
import ilensProtofolioWebp from '../assets/protofolio/ilens.webp';
import pastaCoProtofolioPng from '../assets/protofolio/pastaCo.png';
import pastaCoProtofolioWebp from '../assets/protofolio/pastaCo.webp';

type TProtofolioTranscript = {
  id: string;
  title: string;
  subTitle: string;
  href: string;
  tag: string[];
  src: string;
  sources: {
    srcSet: string;
    media?: string;
    type: 'image/webp' | 'image/png' | 'image/jpeg';
  }[];
  alt: string;
};

const ProtofolioTranscript: TProtofolioTranscript[] = [
  {
    id: '財團法人方興中馬匹輔學健康社福基金會募資網站',
    title: '財團法人方興中馬匹輔學健康社福基金會募資網站',
    subTitle: '募資進度與目標輕鬆掌握',
    href: '/work/財團法人方興中馬匹輔學健康社福基金會募資網站',
    tag: ['活動網站', '公益行銷'],
    src: thrctProtofolioPng,
    sources: [
      {
        srcSet: thrctProtofolioWebp,
        type: 'image/webp',
      },
    ],
    alt: '財團法人方興中馬匹輔學健康社福基金會',
  },
  {
    id: '廣容綠化有限公司專案管理系統',
    title: '廣容綠化有限公司專案管理系統',
    subTitle: '脫離紙本苦海,專案.人員管理都變輕鬆了',
    href: '/work/廣容綠化有限公司專案管理系統',
    tag: ['系統設計', '工商企業'],
    src: grProtofolioPng,
    sources: [
      {
        srcSet: grProtofolioWebp,
        type: 'image/webp',
      },
    ],
    alt: '廣容綠化有限公司',
  },
  {
    id: '愛能視隱形眼鏡銷售據點',
    title: '愛能視隱形眼鏡銷售據點',
    subTitle: '據點與販售系列都能一手掌握',
    href: '/work/愛能視隱形眼鏡銷售據點',
    tag: ['CYBERBIZ系統頁面客製', '工商企業'],
    src: ilensProtofolioPng,
    sources: [
      {
        srcSet: ilensProtofolioWebp,
        type: 'image/webp',
      },
    ],
    alt: '愛能視隱形眼鏡',
  },
  {
    id: 'PASTA&CO電子信箱網域設定',
    title: 'PASTA & CO 電子信箱網域設定',
    subTitle: 'email地址也是pastaco.tw了,專業形象upup!',
    href: '/work/PASTA&CO電子信箱網域設定',
    tag: ['網路服務', '工商企業'],
    src: pastaCoProtofolioPng,
    sources: [
      {
        srcSet: pastaCoProtofolioWebp,
        type: 'image/webp',
      },
    ],
    alt: 'PASTA & CO Resaturant',
  },
];

export default ProtofolioTranscript;
