import { BlogPreview } from "../common/BlogPreview";
import { SectionTitle } from "../common/SectionTitle";
import { Section } from "../Section";

export const LatestPosts = () => {
  return (
    <Section>
      <SectionTitle title="O que tem rolado por aqui" className="md:w-96" />

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
