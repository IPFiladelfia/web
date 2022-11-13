import { BannerHome } from "../components/Home/BannerHome";
import { Header } from "../components/Header";
import { ScheduleHome } from "../components/Home/ScheduleHome";
import { WatchOurOnlineServicesHome } from "../components/Home/WatchOurOnlineServicesHome";
import { OurBeliefs } from "../components/Home/OurBeliefs";
import { LatestPosts } from "../components/Home/LatestPosts";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <BannerHome />
      <ScheduleHome />
      <WatchOurOnlineServicesHome />
      <OurBeliefs />
      <LatestPosts />
      {/* ADD MAP HERE */}
      <Footer />
    </>
  );
}
