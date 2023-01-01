import Head from "next/head";
import Image from "next/image";
import { CopyField } from "../components/common/CopyField";
import { PageHeader } from "../components/common/PageHeader";
import { BankAccount } from "../components/contributions/BankAccount";
import { IBankAccount } from "../types";

const QuemSomos = ({ pix, email }: { pix: string; email: string }) => {
  const bankAccounts: IBankAccount[] = [
    {
      url: "/assets/banco-do-brasil.svg",
      title: "Banco do Brasil",
      account: "32000-5",
      agency: "2923-8",
    },
    {
      url: "/assets/banco-itau.svg",
      title: "Banco Itaú",
      account: "10782-1",
      agency: "0513",
    },
  ];
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
        <div className="flex justify-center my-8">
          <Image
            className="opacity-25"
            src="/assets/divider-icon.svg"
            alt=""
            width={48}
            height={18}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center md:items-center gap-10 md:gap-20">
          {bankAccounts.map((account) => (
            <BankAccount
              account={account.account}
              agency={account.agency}
              title={account.title}
              url={account.url}
              key={account.title}
            />
          ))}
        </div>

        <p className="text-center flex justify-center mt-8 text-xl font-semibold">
          <CopyField value={pix} toastMessage="Pix copiado com sucesso!">
            PIX: {pix}
          </CopyField>
        </p>

        <p className="text-center flex justify-center mt-8">
          Comprovantes de depósitos devem ser encaminhados para identificação e
          registro no e-mail:
          <CopyField
            className="ml-2"
            toastMessage="Email copiado com sucesso!"
            value={email}
          >
            {email}
          </CopyField>
        </p>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const pix = process.env.CNPJ;
  const email = process.env.EMAIL;
  return {
    props: {
      pix,
      email,
    },
  };
}

export default QuemSomos;
