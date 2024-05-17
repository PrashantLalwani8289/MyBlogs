import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPost from "../components/Home/FeaturedPost";
import RecentPost from "../components/Home/RecentPost";


export default function Home() {
  // console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs= {allBlogs}></HomeCoverSection>
      <FeaturedPost blogs= {allBlogs}></FeaturedPost>
      <RecentPost blogs={allBlogs}></RecentPost>
    </main>
  )
}
