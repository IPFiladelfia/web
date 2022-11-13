import Image from "next/image";
import { Button } from "../Button";

export const BannerHome = () => {
  return (
    <div className="relative w-full h-[46rem] max-h-screen">
      <div className="flex flex-col justify-center p-4 h-full after:content-[''] after:absolute after:bg-gradient-to-b after:from-black after:to-[#00000050] after:top-0 after:bottom-0 after:left-0 after:right-0 after:opacity-[50%]">
        <Image
          className="object-cover -z-[1]"
          src="/assets/bg-banner-home.jpeg"
          fill
          quality={100}
          alt=""
        />
        <div className="container mx-auto z-10">
          <p className="text-white font-medium text-3xl z-10 lg:max-w-[50rem]">
            Uma igreja que
            <span className="block text-6xl font-extrabold">
              ama, serve, evangeliza, faz discípulos e os envia
            </span>
          </p>
          <Button href="iasji">Saiba mais</Button>
        </div>
      </div>
    </div>
  );
};
