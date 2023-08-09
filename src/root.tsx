// @ts-ignore
import { component$ } from '@builder.io/qwik';
import { QwikPartytown } from './components/partytown/partytown';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './global.css';

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />

        <QwikPartytown forward={['dataLayer.push']} />
        <script
          type="text/partytown"
          src="https://www.googletagmanager.com/gtag/js?id=G-C1G8SZW33Y"
        ></script>

        <script
          type="text/partytown"
          dangerouslySetInnerHTML="
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M32JDPX3');
        "
        ></script>

        <script
          type="text/partytown"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7669818123382596"
          crossOrigin="anonymous"
        ></script>

        <RouterHead />
      </head>
      <body lang="zh-TW">
        <RouterOutlet />
        <ServiceWorkerRegister />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M32JDPX3"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
      </body>
    </QwikCityProvider>
  );
});
