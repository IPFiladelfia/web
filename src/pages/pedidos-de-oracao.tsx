import Head from "next/head";
import { Envelope, Phone, User } from "phosphor-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { PageHeader } from "../components/common/PageHeader";

type Type = "mail" | "name" | "phone" | "prayerRequest";

const QuemSomos = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = () => {
    //
  };

  const Wrapper = ({
    children,
    type,
  }: {
    children: React.ReactNode;
    type: Type;
  }) => (
    <div className="border flex flex-1 items-center">
      {type !== "prayerRequest" && (
        <div className="bg-black w-10 h-10 flex items-center justify-center">
          {type === "mail" && <Envelope size={24} className="text-white" />}
          {type === "name" && <User size={24} className="text-white" />}
          {type === "phone" && <Phone size={24} className="text-white" />}
        </div>
      )}
      <div className="flex-1 py-2 px-3">{children}</div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Pedidos de Oração</title>
      </Head>
      <PageHeader title="Pedidos de Oração" />
      <div className="container mx-auto py-12">
        <h3 className="text-xl text-center px-20 mb-8 font-semibold">
          Faça o seu pedido e estaremos orando por você!
        </h3>
        <form
          className="flex flex-col justify-center max-w-4xl mx-auto gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <Wrapper type="name">
              <input
                className="w-full focus-within:outline-none"
                placeholder="Digite seu nome"
                {...register("name")}
              />
            </Wrapper>
            <Wrapper type="mail">
              <input
                className="w-full focus-within:outline-none"
                placeholder="Digite seu e-mail"
                {...register("email")}
              />
            </Wrapper>
            <Wrapper type="phone">
              <input
                className="w-full focus-within:outline-none"
                placeholder="Seu telefone (WhatsApp)"
                {...register("phone")}
              />
            </Wrapper>
          </div>
          <div className="flex">
            <Wrapper type="prayerRequest">
              <textarea
                rows={10}
                className="w-full focus-within:outline-none resize-none"
                placeholder="Qual o seu pedido de oração?"
                {...register("prayer_request")}
              />
            </Wrapper>
          </div>
          <Button className="" text="Enviar" />
        </form>
      </div>
    </>
  );
};

export default QuemSomos;
