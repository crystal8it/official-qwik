import { component$ } from '@builder.io/qwik';

type source = {
  srcSet: string;
  type: 'image/webp' | 'image/png' | 'image/jpeg';
  media?: string;
};

type ImageProps = {
  src: string;
  alt: string;
  fitPosition?: 'top' | 'center' | 'bottom';
  width?: string;
  height?: string;
  sources?: source[];
};

export default component$(
  ({
    src,
    alt,
    fitPosition = 'top',
    width = '100%',
    height = '100%',
    sources,
  }: ImageProps) => {
    return (
      <picture>
        {sources !== undefined && sources.length > 0
          ? sources?.map(({ srcSet, media, type }) => (
              <source key={srcSet} media={media} srcSet={srcSet} type={type} />
            ))
          : null}
        <img
          width={width}
          height={height}
          style={{
            'objectFit': 'cover',
            'userDrag': 'none',
            '-webkitUserDrag': 'none',
            '-mozUserDrag': 'none',
            '-msUserDrag': 'none',
            'objectPosition': fitPosition,
          }}
          alt={alt}
          src={src}
          loading="lazy"
        />
      </picture>
    );
  }
);
