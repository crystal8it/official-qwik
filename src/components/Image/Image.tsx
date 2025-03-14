import { component$ } from "@builder.io/qwik";

type source = {
  srcSet: string;
  type: "image/webp" | "image/png" | "image/jpeg";
  media?: string;
};

type ImageProps = {
  src: string;
  alt: string;
  obectFit?: "cover" | "contain";
  fitPosition?: "top" | "center" | "bottom";
  width?: any;
  height?: any;
  sources?: source[];
};

export default component$(
  ({
    src,
    alt,
    obectFit = "cover",
    fitPosition = "top",
    width = "100%",
    height = "100%",
    sources,
  }: ImageProps) => {
    return (
      <picture style="width: fit-content;height: fit-content">
        {sources !== undefined && sources.length > 0
          ? sources?.map(({ srcSet, media, type }) => (
              <source key={srcSet} media={media} srcset={srcSet} type={type} />
            ))
          : null}
        <img
          width={width}
          height={height}
          style={{
            objectFit: obectFit,
            objectPosition: fitPosition,
            width: "100%",
            height: "100%",
          }}
          alt={alt}
          src={src}
        />
      </picture>
    );
  },
);
