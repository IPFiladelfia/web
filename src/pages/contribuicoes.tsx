import Head from "next/head";
import Image from "next/image";
import { PageHeader } from "../components/common/PageHeader";

const QuemSomos = () => {
  return (
    <>
      <Head>
        <title>Contribuições</title>
      </Head>
      <PageHeader title="Contribuições" />
      <div className="container mx-auto py-12">
        <blockquote className="italic text-center">
          “O dízimo é a doação fiel e voluntária de 10% do rendimento da pessoa,
          família ou empresa. É o padrão mínimo no Novo Testamento. O dízimo foi
          praticado por Abraão, nos dias de Moisés, após o cativeiro babilônico,
          referendado no Novo Testamento e incentivado por nosso Senhor Jesus
          Cristo (Mt. 23:23; Lc 11:42). Ofertas são as doações feitas além do
          dízimo e reflete a generosidade do coração da pessoa. Dízimos e
          ofertas são expressões de nossa devoção e amor a Deus e, como tal,
          contraria o padrão do mundo, cujo foco é a avareza (Gn. 28:16-22; Ml.
          3:7, Hb 13.4-5). Ao entregar dízimos e ofertas, declaramos nossa fé em
          Deus, que é o supridor de nossas necessidades (Gn. 14:20-23). A
          sustentação do ministério cristão através de dízimos e ofertas é um
          fato registrado em toda a história da igreja, feita por crentes fiéis,
          zelosos, visionários da obra missionária e comprometidos com a
          expansão da influência do Reino de Cristo no mundo.”{" "}
          <span className="block font-bold mt-4">- Pr Jeremias Pereira</span>
        </blockquote>
        <p className="text-center mt-8 text-lg lg:w-[80%] mx-auto">
          A Consagração dos Dízimos e Ofertas podem ser feitas presencialmente
          nos nossos cultos e também através das contas da Igreja Presbiteriana
          Filadélfia de Sorocaba:
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
