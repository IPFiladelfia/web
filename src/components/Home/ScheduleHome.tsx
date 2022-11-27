import { Schedule } from "../common/Schedule";
import { Section } from "../Section";

export const ScheduleHome = () => {
  return (
    <Section className="flex flex-col lg:flex-row justify-between lg:items-center">
      <Schedule />
    </Section>
  );
};
