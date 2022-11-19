import { PageHeader } from "../components/common/PageHeader";
import { PageTitle } from "../components/common/PageTitle";

const QuemSomos = () => {
  return (
    <>
      <PageHeader title="Nossa equipe" />
      <div className="container mx-auto py-12">
        <PageTitle title="Equipe pastoral" />
        <PageTitle title="Presbíteros" />
        <PageTitle title="Junta Diaconal" />
        <PageTitle title="Evangelistas" />
        <PageTitle title="Missionários" />
      </div>
    </>
  );
};

export default QuemSomos;
