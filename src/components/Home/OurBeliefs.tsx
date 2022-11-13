import Image from "next/image";
import { Button } from "../Button";

export const OurBeliefs = () => {
  return (
    <div className="bg-primary-900 h-80">
      <div className="container flex items-center justify-center lg:grid lg:grid-cols-2 h-full">
        <div className="w-full h-full relative overflow-hidden hidden lg:block">
          <Image
            className="object-contain h-[150%] absolute top-[50%] translate-y-[-50%] mix-blend-multiply opacity-50"
            fill
            src="/assets/bg-our-beliefs.png"
            alt=""
          />
        </div>
        <div className="text-white flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-2">No que cremos</h2>
          <p>Conheça nossa profissão de fé e o catecismo que seguimos</p>
          <Button href="rjdsij">Conheça</Button>
        </div>
      </div>
    </div>
  );
};
