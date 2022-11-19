import { BannerHome } from "../components/Home/BannerHome";
import { ScheduleHome } from "../components/Home/ScheduleHome";
import { WatchOurOnlineServicesHome } from "../components/Home/WatchOurOnlineServicesHome";
import { OurBeliefs } from "../components/Home/OurBeliefs";
import { LatestPosts } from "../components/Home/LatestPosts";

export default function Home() {
  return (
    <>
      <BannerHome />
      <ScheduleHome />
      <WatchOurOnlineServicesHome />
      <OurBeliefs />
      <LatestPosts />
      {/* ADD MAP HERE */}
    </>
  );
}
