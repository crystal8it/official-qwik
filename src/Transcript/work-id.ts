// ilens
import ilensBannerWebp from '~/assets/work/ilens/work-ilens-banner.webp';
import ilensBannerPng from '~/assets/work/ilens/work-ilens-banner.png';
import ilensLogoWebp from '~/assets/work/ilens/work-ilens-logo.webp';
import ilensLogoPng from '~/assets/work/ilens/work-ilens-logo.png';
import ilensCustomerWebp from '~/assets/work/ilens/work-ilens-customer.webp';
import ilensCustomerPng from '~/assets/work/ilens/work-ilens-customer.png';
import ilensProjectWebp from '~/assets/work/ilens/work-ilens-project.webp';
import ilensProjectPng from '~/assets/work/ilens/work-ilens-project.png';

// thrct
import thrctBannerWebp from '~/assets/work/thrct/work-thrct-banner.webp';
import thrctBannerPng from '~/assets/work/thrct/work-thrct-banner.png';
import thrctLogoWebp from '~/assets/work/thrct/work-thrct-logo.webp';
import thrctLogoPng from '~/assets/work/thrct/work-thrct-logo.png';
import thrctCustomerWebp from '~/assets/work/thrct/work-thrct-customer.webp';
import thrctCustomerPng from '~/assets/work/thrct/work-thrct-customer.png';
import thrctProjectWebp from '~/assets/work/thrct/work-thrct-project.webp';
import thrctProjectPng from '~/assets/work/thrct/work-thrct-project.png';

// grace888
import grace888BannerWebp from '~/assets/work/grace888/work-grace888-banner.webp';
import grace888BannerPng from '~/assets/work/grace888/work-grace888-banner.png';
import grace888LogoWebp from '~/assets/work/grace888/work-grace888-logo.webp';
import grace888LogoPng from '~/assets/work/grace888/work-grace888-logo.png';
import grace888CustomerWebp from '~/assets/work/grace888/work-grace888-customer.webp';
import grace888CustomerPng from '~/assets/work/grace888/work-grace888-customer.png';
import grace888ProjectWebp from '~/assets/work/grace888/work-grace888-project.webp';
import grace888ProjectPng from '~/assets/work/grace888/work-grace888-project.png';

// 4u2
import Au2BannerWebp from '~/assets/work/4u2/work-4u2-banner.webp';
import Au2BannerPng from '~/assets/work/4u2/work-4u2-banner.png';
import Au2LogoWebp from '~/assets/work/4u2/work-4u2-logo.webp';
import Au2LogoPng from '~/assets/work/4u2/work-4u2-logo.png';
import Au2CustomerWebp from '~/assets/work/4u2/work-4u2-customer.webp';
import Au2CustomerPng from '~/assets/work/4u2/work-4u2-customer.png';
import Au2ProjectWebp from '~/assets/work/4u2/work-4u2-project.webp';
import Au2ProjectPng from '~/assets/work/4u2/work-4u2-project.png';

interface workArticle {
  content: string;
  image: {
    src: string;
    sources: {
      srcSet: string;
      media?: string;
      type: 'image/webp' | 'image/png' | 'image/jpeg';
    }[];
    alt: string;
  };
}

interface TcustonerIntro extends workArticle {
  logo: {
    src: string;
    sources: {
      srcSet: string;
      media?: string;
      type: 'image/webp' | 'image/png' | 'image/jpeg';
    }[];
    alt: string;
  };
}

type TWorkTranscript = {
  banner: {
    eng: string;
    cht: string;
    tag: string[];
    image: {
      src: string;
      sources: {
        srcSet: string;
        media?: string;
        type: 'image/webp' | 'image/png' | 'image/jpeg';
      }[];
      alt: string;
    };
  };
  customerIntroduction: TcustonerIntro;
  projectBackground: workArticle;
  designConcept: { content: string };
  href: string;
};

const WorkTranscript: { [key: string]: TWorkTranscript } = {
  'thrct': {
    banner: {
      eng: 'The Fang Hsing-Chung Social Welfare Foundation for Horses in Education and Health',
      cht: '財團法人方興中馬匹輔學健康社福基金會募資網站',
      tag: ['活動網站', '公益行銷'],
      image: {
        src: thrctBannerPng,
        sources: [
          {
            srcSet: thrctBannerWebp,
            type: 'image/webp',
          },
        ],
        alt: '希望馬場',
      },
    },
    customerIntroduction: {
      logo: {
        src: thrctLogoPng,
        sources: [
          {
            srcSet: thrctLogoWebp,
            type: 'image/webp',
          },
        ],
        alt: '希望馬場',
      },

      content:
        '財團法人方興中馬匹輔學健康社福基金會致力推廣身心障礙馬術治療，旗下的希望馬場為全台唯一身心障礙者馬匹輔助教育團隊，提供專業馬術治療課程，並定期舉辦馬術比賽和相關公益活動，讓身心障礙者有機會接觸和參與馬術運動展現自我。',
      image: {
        src: thrctCustomerPng,
        sources: [
          {
            srcSet: thrctCustomerWebp,
            type: 'image/webp',
          },
        ],
        alt: '希望馬場',
      },
    },
    projectBackground: {
      content:
        '馬術治療的場地、設備、馬匹培育和專業人員等，每年皆需支出龐大的經費，為使希望馬場能永續經營並為身心障礙學童分擔經濟重擔，期望藉助募資網站匯集社會大眾的力量，讓更多身心障礙者在"馬"上看到希望。',
      image: {
        src: thrctProjectPng,
        sources: [
          {
            srcSet: thrctProjectWebp,
            type: 'image/webp',
          },
        ],
        alt: '希望馬場',
      },
    },
    designConcept: {
      content:
        '延續官網配色與設計，除了募款內容外另加設募款目標和階段動畫以及贊助人次，讓欲捐款者清楚知道捐款進度和金額，並引導捐款者回到財團法人方興中馬匹輔學健康社福基金會的官網進行捐款。',
    },
    href: 'https://support.thrct.org',
  },
  'ilens': {
    banner: {
      eng: 'Ilens Sales Location Page',
      cht: '愛能視隱形眼鏡銷售據點網頁',
      tag: ['CYBERBIZ系統頁面客製', '工商企業'],
      image: {
        src: ilensBannerPng,
        sources: [
          {
            srcSet: ilensBannerWebp,
            type: 'image/webp',
          },
        ],
        alt: 'Ilens 愛能視, 隱形眼鏡專家',
      },
    },
    customerIntroduction: {
      logo: {
        src: ilensLogoPng,
        sources: [
          {
            srcSet: ilensLogoWebp,

            type: 'image/webp',
          },
        ],
        alt: 'Ilens 愛能視, 隱形眼鏡專家',
      },
      content:
        '愛能視秉持著安全、舒適和清晰的產品理念堅持創新，憑藉獨創的圖紋設計，領先時尚潮流。多年來用心耕耘台灣市場，如今已在全台擁有超過16000個眼鏡店面和藥妝門市，成為業界的領航者。',
      image: {
        src: ilensCustomerPng,
        sources: [
          {
            srcSet: ilensCustomerWebp,
            type: 'image/webp',
          },
        ],
        alt: 'Ilens 愛能視, 隱形眼鏡專家',
      },
    },
    projectBackground: {
      content:
        '業主深知客戶尋找門市的重要性，因此委託製作此專案，為了提供顧客以方便快捷的方式，尋找最近的銷售據點，讓顧客無論在何處，都能輕鬆找到他們心儀的隱形眼鏡。',
      image: {
        src: ilensProjectPng,
        sources: [
          {
            srcSet: ilensProjectWebp,
            type: 'image/webp',
          },
        ],
        alt: 'Ilens 愛能視, 隱形眼鏡專家',
      },
    },
    designConcept: {
      content:
        '延續業主官網的配色及企業形象，我們將愛能視的主要色彩做為基礎，選用與他們形象相符的視覺元素和設計風格。增強業主的品牌識別度，使顧客在尋找門市時感受到熟悉和親近，同時傳達出對客戶需求的關懷和用心。',
    },
    href: 'https://www.ilens.com.tw/pages/%E8%B2%A9%E5%94%AE%E9%80%9A%E8%B7%AF',
  },
  'grace888': {
    banner: {
      eng: 'Grace888 Project Management System',
      cht: '廣容綠化有限公司專案管理系統',
      tag: ['系統設計', '工商企業'],
      image: {
        src: grace888BannerPng,
        sources: [
          {
            srcSet: grace888BannerWebp,
            type: 'image/webp',
          },
        ],
        alt: '廣容綠化有限公司',
      },
    },
    customerIntroduction: {
      logo: {
        src: grace888LogoPng,
        sources: [
          {
            srcSet: grace888LogoWebp,
            media: '123',
            type: 'image/webp',
          },
        ],
        alt: '廣容綠化有限公司',
      },
      content:
        '廣容綠化以最新的技術與設備綠化環境，創造充滿美學、朝氣、友善植物健康的環境，並提升國人公共生活空間品質，對於樹木養護有多年專業經驗，秉持愛護樹木的理念，盡力協助每一次的相關工作，以樹木美化後的面貌達到環境、生態、美學的平衡為使命。',
      image: {
        src: grace888CustomerPng,
        sources: [
          {
            srcSet: grace888CustomerWebp,
            media: '123',
            type: 'image/webp',
          },
        ],
        alt: '廣容綠化有限公司',
      },
    },
    projectBackground: {
      content:
        '此專案背景業主希望進行企業轉型，實現無紙化經營，並朝系統化管理邁進，希望擺脫繁瑣的人工處理，因此我們為其設計了一套PMS系統，以滿足客戶的需求，將其業務流程轉化為高效、整潔、且易於管理的數字化平台。',
      image: {
        src: grace888ProjectPng,
        sources: [
          {
            srcSet: grace888ProjectWebp,
            media: '123',
            type: 'image/webp',
          },
        ],
        alt: '廣容綠化有限公司',
      },
    },
    designConcept: {
      content:
        '此專案的設計概念以簡約、舒適和直覺為主要方向。讓使用者體驗到簡單易懂的界面和流程。簡約的設計風格能減少不必要的複雜性，舒適的使用體驗能使工作效率增強，直覺的操作方式更能降低學習門檻，使業主能夠輕鬆享受高效率的企業轉型與管理過程。',
    },
    href: 'https://www.ilens.com.tw/pages/%E8%B2%A9%E5%94%AE%E9%80%9A%E8%B7%AF',
  },
  '4U2': {
    banner: {
      eng: '4U2 Sales Location Page',
      cht: '4U2台灣總代理銷售據點',
      tag: ['CYBERBIZ系統頁面客製', '工商企業'],
      image: {
        src: Au2BannerPng,
        sources: [
          {
            srcSet: Au2BannerWebp,
            media: '123',
            type: 'image/webp',
          },
        ],
        alt: '4U2台灣總代理銷售據點',
      },
    },
    customerIntroduction: {
      logo: {
        src: Au2LogoPng,
        sources: [
          {
            srcSet: Au2LogoWebp,
            type: 'image/webp',
          },
        ],
        alt: '4U2台灣總代理銷售據點',
      },
      content:
        'IG霸屏率最高熱銷高顏值彩妝4U2台灣官方總代理，致力以平實的價格，提供給消費者優質的美妝產品，創造高CP值的美妝護膚體驗',
      image: {
        src: Au2CustomerPng,
        sources: [
          {
            srcSet: Au2CustomerWebp,
            type: 'image/webp',
          },
        ],
        alt: '4U2隱形眼鏡',
      },
    },
    projectBackground: {
      content:
        '業主深知客戶尋找門市的重要性，因此委託製作此專案，為了提供顧客以方便快捷的方式，尋找最近的銷售據點，讓顧客無論在何處，都能輕鬆找到他們心儀的彩妝商品。',
      image: {
        src: Au2ProjectPng,
        sources: [
          {
            srcSet: Au2ProjectWebp,
            type: 'image/webp',
          },
        ],
        alt: '4U2隱形眼鏡',
      },
    },
    designConcept: {
      content:
        '延續業主官網的配色及企業形象，我們將4U2的主要色彩做為基礎，選用與他們形象相符的視覺元素和設計風格。增強業主的品牌識別度，使顧客在尋找門市時感受到熟悉和親近，同時傳達出對客戶需求的關懷和用心。',
    },
    href: 'https://www.ilens.com.tw/pages/%E8%B2%A9%E5%94%AE%E9%80%9A%E8%B7%AF',
  },
};

export default WorkTranscript;
