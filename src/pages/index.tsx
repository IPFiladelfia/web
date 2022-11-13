import { BannerHome } from "../components/Home/BannerHome";
import { Header } from "../components/Header";
import { ScheduleHome } from "../components/Home/ScheduleHome";
import { WatchOurOnlineServicesHome } from "../components/Home/WatchOurOnlineServicesHome";

export default function Home() {
  return (
    <>
      <Header />
      <BannerHome />
      <ScheduleHome />
      <WatchOurOnlineServicesHome />
    </>
  );
}
