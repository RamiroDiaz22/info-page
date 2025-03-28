import Image from "next/image";

interface ImageCustomProps {
  image: string;
  alt: string;
  className: string;
}

const ImageCustom: React.FC<ImageCustomProps> = ({ image, alt, className }) => {
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_STRAPI_URL_API}${image}`}
      alt={alt}
      fill
      className={className}
    />
  );
};

export default ImageCustom;
