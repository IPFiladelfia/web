import { BannerHome } from "../components/Home/BannerHome";
import { Header } from "../components/Header";
import { ScheduleHome } from "../components/Home/ScheduleHome";

export default function Home() {
  return (
    <>
      <Header />
      <BannerHome />
      <ScheduleHome />
    </>
  );
}
