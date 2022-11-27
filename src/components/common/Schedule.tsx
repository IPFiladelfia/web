import clsx from "clsx";
import Image from "next/image";
import { ScheduleDateTitle } from "../Home/ScheduleDateTitle";
import { SectionTitle } from "./SectionTitle";

const schedule = [
  {
    date: "Domingo",
    events: ["Juventude Ruah", "Ministério Infantil"],
  },
  {
    date: "Terça",
    events: ["Células"],
  },
  {
    date: "Quarta a Sábado",
    events: ["Células"],
  },
  {
    date: "Sábado",
    events: [
      "09h00 - Escola Bíblica",
      "18h30 - Culto de Celebração (Espaço Filadélfia)",
      "Culto Infantil nos dois horários (Templo Filadélfia)",
    ],
  },
];

export const Schedule = () => {
  return (
    <>
      <div>
        <SectionTitle title="Programação" />
        <ul>
          {schedule.map((date, index) => (
            <li key={date.date} className="mt-6">
              <ScheduleDateTitle className="mb-4" title={date.date} />
              <ul>
                {date.events.map((event, index) => (
                  <li className={clsx({ "mt-2": index > 0 })} key={event}>
                    {event}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="
          relative 
          self-end
          mt-20  
          after:right-0 
          after:absolute 
          after:content-[''] 
          after:top-[50%] 
          after:h-[120%] 
          after:-z-10 
          after:translate-y-[-50%] 
          after:w-[50%] 
          after:bg-primary-900
          before:right-0 
          before:absolute 
          before:content-[''] 
          before:top-[50%] 
          before:h-[110%] 
          before:-z-[5] 
          before:translate-y-[-50%] 
          before:w-[75%] 
          before:bg-secondary
        "
      >
        <Image
          src="/assets/bg-schedule.jpeg"
          width={675}
          height={438}
          quality={100}
          alt="Imagem de dois homens adultos se cumprimentando"
        />
      </div>
    </>
  );
};
