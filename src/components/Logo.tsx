import Image from "next/image";

export const Logo = () => (
  <Image
    width={200}
    height={40}
    quality={100}
    src="/assets/logo.svg"
    alt="Logo da Igreja Presbiteriana Filadélfia Sorocaba"
  />
);
