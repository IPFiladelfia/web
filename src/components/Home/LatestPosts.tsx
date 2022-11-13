import { BlogPreview } from "../common/BlogPreview";
import { Section } from "../Section";

export const LatestPosts = () => {
  return (
    <Section>
      <h2 className="text-4xl font-bold md:w-96">O que tem rolado por aqui</h2>

      <div className="flex flex-col md:flex-row items-center justify-around mt-9 flex-wrap">
        <BlogPreview
          category="Evento"
          description="Lorem ipsum dolor sit amet consectetur. Maecenas sed dui at amet sit pretium suscipit mi. Nulla turpis vel ante ac viverra. Sed massa sed faucibus purus quam..."
          thumbnail="/assets/bg-banner-home.jpeg"
          title="Acampa Ruah 2022: Mundo Invertido"
          url="#"
          className="mb-4"
        />
        <BlogPreview
          category="Evento"
          description="Lorem ipsum dolor sit amet consectetur. Maecenas sed dui at amet sit pretium suscipit mi. Nulla turpis vel ante ac viverra. Sed massa sed faucibus purus quam..."
          thumbnail="/assets/bg-banner-home.jpeg"
          title="Acampa Ruah 2022: Mundo Invertido"
          url="#"
          className="mb-4"
        />
        <BlogPreview
          category="Evento"
          description="Lorem ipsum dolor sit amet consectetur. Maecenas sed dui at amet sit pretium suscipit mi. Nulla turpis vel ante ac viverra. Sed massa sed faucibus purus quam..."
          thumbnail="/assets/bg-banner-home.jpeg"
          title="Acampa Ruah 2022: Mundo Invertido"
          url="#"
          className="mb-4"
        />
      </div>
    </Section>
  );
};
