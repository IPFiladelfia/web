import { PageHeader } from "../components/common/PageHeader";
import React from "react";
import { ScheduleHome } from "../components/Home/ScheduleHome";
import { Schedule } from "../components/common/Schedule";

const QuemSomos = () => {
  return (
    <>
      <PageHeader title="Agenda de cultos" />
      <div className="container mx-auto py-12 flex flex-col lg:flex-row justify-between lg:items-center mb-8">
        <Schedule />
      </div>
    </>
  );
};

export default QuemSomos;
