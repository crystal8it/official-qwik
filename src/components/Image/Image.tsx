import { component$ } from '@builder.io/qwik';

type ImageProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

export default component$(
  ({ src, alt, width = '100%', height = '100%' }: ImageProps) => {
    return (
      <img
        width={width}
        height={height}
        style="object-fit:cover;object-position:center"
        alt={alt}
        src={src}
      />
    );
  }
);
