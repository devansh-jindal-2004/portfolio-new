import Body from "@/components/Body/Body";
import SideBar from "@/components/SideBar/SideBar";


export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row bg-black px-3 sm:px-20 lg:px-40 gap-5 xl:gap-10 py-5 md:py-16">
      <SideBar />
      <Body />
    </div>
  );
}
