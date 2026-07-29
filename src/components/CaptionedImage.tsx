import type { ImageType } from "../types/ImageType";

type CaptionedImageProps = {
  width: number;
  height: number;
  image: ImageType;
};

const CaptionedImage = ({ width, height, image }: CaptionedImageProps) => {
  return (
    <figure>
      <div>
        <img width={width} height={height} src={image.src} alt={image.alt} />
      </div>
      <figcaption>
        <span className="text-sm font-light">{image.caption}</span>
      </figcaption>
    </figure>
  );
};

export default CaptionedImage;
