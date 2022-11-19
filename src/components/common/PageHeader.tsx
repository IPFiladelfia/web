import Image from "next/image";
import { Button } from "../Button";
import { SectionTitle } from "./SectionTitle";

export const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="relative w-full pt-20 max-h-screen">
      <div className="flex py-16 items-end h-full after:content-[''] after:absolute after:bg-gradient-to-b after:from-black after:to-[#00000050] after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-[50%]">
        <Image
          className="object-cover -z-[1]"
          src="/assets/bg-banner-home.jpeg"
          fill
          quality={100}
          alt=""
        />
        <div className="container mx-auto z-10">
          <SectionTitle title={title} />
        </div>
      </div>
    </div>
  );
};
