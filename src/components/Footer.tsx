import Image from "next/image";
import { SocialMedia } from "./common/SocialMedia";

interface ColumnProps {
  children: React.ReactNode;
}

const Column = ({ children }: ColumnProps) => {
  return (
    <div className="flex flex-col items-center my-4 md:w-[50%] lg:w-[25%]">
      {children}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="py-16 bg-grey-900 text-white flex flex-col items-center text-center md:flex-row md:flex-wrap lg:flex-nowrap md:justify-center lg:px-8 gap-8">
      <Column>
        <h3 className="text-lg font-bold">Igreja Online</h3>
        <p>Siga-nos em nossas plataformas digitais</p>
        <div className="mt-2">
          <SocialMedia />
        </div>
      </Column>
      <Column>
        <h3 className="text-lg font-bold">Secretaria</h3>
        <div>
          <p>Temporariamente no Templo Filadélfia</p>
          <p>(99) 3333-3333</p>
          <p>Rua João Ferreira da Silva, 84 {"\n"} Além Ponte, Sorocaba/SP</p>
          <p>Seg à Sex 8h30 às 17h30</p>
        </div>
      </Column>
      <Column>
        <h3 className="text-lg font-bold">Templo Filadélfia</h3>
        <div>
          <p>Rua João Ferreira da Silva, 84 {"\n"} Além Ponte, Sorocaba/SP</p>
        </div>
        <h3 className="text-lg font-bold">Espaço Filadélfia</h3>
        <div>
          <p>Rua João Ferreira da Silva, 84 {"\n"} Além Ponte, Sorocaba/SP</p>
        </div>
      </Column>
      <Column>
        <Image
          src="/assets/ipb-logo.svg"
          width={117}
          height={80}
          quality={100}
          alt="Logo da Igreja Presbiteriana do Brasil"
        />
      </Column>
    </footer>
  );
};
