import clsx from "clsx";
import Image from "next/image";
import { Button } from "../Button";

interface BlogPreviewProps {
  category: string;
  thumbnail: string;
  title: string;
  description: string;
  url: string;
  className?: string;
}

export const BlogPreview = ({
  category,
  thumbnail,
  title,
  description,
  url,
  className,
}: BlogPreviewProps) => {
  return (
    <div className={clsx("w-80 relative", className)}>
      <span className="inline-block px-2 py-1 bg-secondary font-bold text-sm text-white absolute -top-3 -right-2 z-10">
        {category}
      </span>
      <div className="relative h-52">
        <Image className="object-cover" fill src={thumbnail} alt={title} />
      </div>
      <h3 className="text-lg font-bold leading-[1.5rem] mt-2">{title}</h3>
      <p className="text-sm mt-2">{description}</p>
      <div className="flex justify-end">
        <Button variation="DARK" href={url}>
          Leia mais
        </Button>
      </div>
    </div>
  );
};
