import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import styles from './ufo.module.css';

export const UFO = component$(({ width = 40 }: { width?: number }) => {
  const isShow = useSignal(false);

  useVisibleTask$(({ cleanup }) => {
    const timeOut = setTimeout(() => {
      isShow.value = true;
    }, 50);

    cleanup(() => clearTimeout(timeOut));
  });

  return (
    <div>
      <svg
        width={width}
        height={width}
        class={[styles.ufo]}
        viewBox="0 0 379 378"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class={[styles.light, 'trans-3', isShow.value ? styles.active : '']}
          d="M230.347 95.9565L19.7312 222.916C19.7312 222.916 37.6513 292.694 140.392 328.469C243.132 364.245 300.516 320.689 300.516 320.689L230.347 95.9565Z"
          fill="url(#paint0_linear_2202_4370)"
        />
        <g filter="url(#filter0_ii_2202_4370)">
          <path
            d="M283.026 154.395C279.38 164.865 267.938 170.396 257.468 166.751C250.573 164.35 245.819 158.566 244.419 151.906L283.569 152.56C283.419 153.174 283.238 153.786 283.026 154.395Z"
            fill="#F2EB46"
          />
          <path
            d="M203.968 159.337C193.499 155.691 187.967 144.249 191.613 133.779C191.825 133.171 192.063 132.578 192.326 132.004L230.069 145.146C229.919 145.76 229.738 146.372 229.526 146.981C225.88 157.45 214.438 162.982 203.968 159.337Z"
            fill="#F2EB46"
          />
          <path
            d="M158.104 131.996C147.635 128.35 142.103 116.908 145.748 106.438L176.492 129.289C171.356 133.007 164.546 134.239 158.104 131.996Z"
            fill="#F2EB46"
          />
        </g>
        <g filter="url(#filter1_i_2202_4370)">
          <path
            d="M122.395 78.7294C115.391 98.8464 152.552 132.936 206.494 151.717C260.437 170.498 310.734 166.858 317.738 146.741C324.742 126.624 286.691 95.0914 232.748 76.3104C178.806 57.5294 129.399 58.6124 122.395 78.7294Z"
            fill="url(#paint1_radial_2202_4370)"
          />
          <path
            d="M122.395 78.7294C115.391 98.8464 152.552 132.936 206.494 151.717C260.437 170.498 310.734 166.858 317.738 146.741C324.742 126.624 286.691 95.0914 232.748 76.3104C178.806 57.5294 129.399 58.6124 122.395 78.7294Z"
            fill="url(#paint2_radial_2202_4370)"
          />
        </g>
        <g filter="url(#filter2_i_2202_4370)">
          <path
            d="M172.507 77.0746C169.178 86.6353 190.49 102.746 220.109 113.058C249.728 123.37 276.437 123.979 279.765 114.419C283.094 104.858 284.735 65.253 241.944 50.3523C199.152 35.4515 175.836 67.514 172.507 77.0746Z"
            fill="url(#paint3_linear_2202_4370)"
            fill-opacity="0.95"
          />
          <ellipse
            cx="56.7868"
            cy="16.8682"
            rx="56.7868"
            ry="16.8682"
            transform="matrix(-0.944396 -0.32881 -0.328805 0.944398 284.83 99.8672)"
            fill="url(#paint4_linear_2202_4370)"
          />
          <path
            d="M178.621 77.4099C176.131 84.5621 194.852 99.6966 221.248 108.887C247.643 118.077 271.718 117.843 274.208 110.69C276.698 103.538 257.319 90.2901 230.923 81.1C204.528 71.9098 181.111 70.2577 178.621 77.4099Z"
            fill="url(#paint5_linear_2202_4370)"
          />
        </g>
        <defs>
          <filter
            id="filter0_ii_2202_4370"
            x="144.627"
            y="106.438"
            width="143.368"
            height="64.9751"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3.53959" />
            <feGaussianBlur stdDeviation="1.7698" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_2202_4370"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4.42449" dy="3.53959" />
            <feGaussianBlur stdDeviation="2.21224" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_innerShadow_2202_4370"
              result="effect2_innerShadow_2202_4370"
            />
          </filter>
          <filter
            id="filter1_i_2202_4370"
            x="120.638"
            y="61.0867"
            width="197.93"
            height="102.907"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-0.908812" dy="-1.81762" />
            <feGaussianBlur stdDeviation="1.81762" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 0.945098 0 0 0 0 0.454902 0 0 0 0.38 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_2202_4370"
            />
          </filter>
          <filter
            id="filter2_i_2202_4370"
            x="171.734"
            y="46.4648"
            width="114.338"
            height="76.0039"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="7.18965" dy="0.79885" />
            <feGaussianBlur stdDeviation="2.39655" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.34 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_2202_4370"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2202_4370"
            x1="233.516"
            y1="61.0337"
            x2="135.66"
            y2="342.059"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F0E57F" />
            <stop offset="1" stop-color="#9EFBE4" stop-opacity="0.06" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_2202_4370"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(225.536 97.5971) rotate(109.199) scale(52.9617 122.013)"
          >
            <stop stop-color="#6AE4FF" />
            <stop offset="0.223958" stop-color="#81EDC0" />
            <stop offset="0.609375" stop-color="#3AB6DD" />
            <stop offset="0.984375" stop-color="#5580D2" />
          </radialGradient>
          <radialGradient
            id="paint2_radial_2202_4370"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(225.536 97.5971) rotate(109.199) scale(52.9617 122.013)"
          >
            <stop stop-color="#6AE4FF" />
            <stop offset="0.223958" stop-color="#81EDC0" />
            <stop offset="0.609375" stop-color="#3AB6DD" />
            <stop offset="0.984375" stop-color="#5580D2" />
          </radialGradient>
          <linearGradient
            id="paint3_linear_2202_4370"
            x1="240.195"
            y1="54.4806"
            x2="220.159"
            y2="113.075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2FF4D1" stop-opacity="0.67" />
            <stop offset="0.250663" stop-color="#3FE3F5" stop-opacity="0.52" />
            <stop offset="0.614583" stop-color="#2A40B7" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_2202_4370"
            x1="56.7868"
            y1="0"
            x2="56.7868"
            y2="33.7364"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#8267F0" />
            <stop offset="1" stop-color="#20AEC1" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_2202_4370"
            x1="230.923"
            y1="81.1"
            x2="221.906"
            y2="107"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#100F42" stop-opacity="0" />
            <stop offset="0.994792" stop-color="#100F42" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
});
