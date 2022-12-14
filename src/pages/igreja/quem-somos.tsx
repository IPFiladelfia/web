import Image from "next/image";
import { PageHeader } from "../../components/common/PageHeader";
import { PageTitle } from "../../components/common/PageTitle";
import { SectionTitle } from "../../components/common/SectionTitle";
import { Section } from "../../components/Section";

const QuemSomos = () => {
  return (
    <>
      <PageHeader title="Quem somos" />
      <div className="container mx-auto py-12">
        <PageTitle
          className="lg:max-w-[75%] mx-auto mb-8 text-center"
          title="Somos uma igreja que ama, serve, evengeliza, faz discípulos e os envia"
        />
        <p className="italic">
          “A Igreja Presbiteriana do Brasil é uma federação de igrejas da qual a
          Igreja Presbiteriana Filadélfia de Sorocaba faz parte. As origens
          históricas mais remotas do presbiterianismo remontam aos primórdios da
          Reforma Protestante do século XVI de tradição calvinista.
          Historicamente, a IPB pertence à família das igrejas reformadas ao
          redor do mundo, tendo chegado no Brasil em 12 de agosto de 1859
          através do Rev. Ashbel Green Simoton como fruto do trabalho
          missionário da Igreja Presbiteriana dos Estados Unidos.
        </p>
        <p>
          A igreja Presbiteriana Filadélfia de Sorocaba teve seu início dia 25
          de junho de 1937 e foi organizada em fevereiro de 1940. Somos uma
          igreja que Ama, Serve, Evangeliza, Faz Discípulos e os Envia.”
        </p>
        <Image
          width={1100}
          height={880}
          className="mx-auto"
          src="/assets/about-the-church.jpeg"
          alt="Uma imagem da igreja, tirada do fundo, mostrando a igreja cheia, com as luzes apagadas, e o povo de mãos dadas, com o Pastor Junior falando ao micronone na frente."
        />
      </div>
    </>
  );
};

export default QuemSomos;
