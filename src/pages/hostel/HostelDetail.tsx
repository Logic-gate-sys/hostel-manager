import { ImageCarousal } from "../../components/hostel-detail/ImageCarousal";
import { HostelDetailCard } from "../../components/hostel-detail/HostelDetailCard";
import { HostelCard } from "../../components/ui/HostelCard";


export const HostelDetail = () => {
    return (
        <div className="h-screen overflow-y-scroll text-zinc-800 px-8 pb-6 pt-2">
            {/* ======================== Details ============================================ */}
            <h1 className="text-xl ml-2"> Hostel Name... </h1>
            <section className=" md:grid md:grid-cols-[2.5fr_2fr] gap-2 ">
                <ImageCarousal />
                <HostelDetailCard />
            </section>
            {/*============================== Rooms in hostel ================================ */}
            <h1 className="mt-8 text-3xl font-semi-bold text-orange-500">Rooms in hostel </h1>
            <section className=" flex flex-col md:flex-row md:flex-wrap gap-3">
                <HostelCard />
                <HostelCard />
                <HostelCard />
                <HostelCard />
                <HostelCard />
                 <HostelCard />
            </section>
        </div>
    )
}