import SideBar from "@/components/SideBar/SideBar";


export default function Home() {
  return (
    <div className="flex flex-col xl:flex-row bg-black px-10 md:px-20 lg:px-40 gap-10 py-16">
      <SideBar />
      <div className="bg-green-500">main content scroll with full page</div>
    </div>
  );
}
