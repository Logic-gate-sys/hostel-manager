import { HostelCard } from "../../components/ui/HostelCard";
import { Link } from "react-router-dom";
import { Filters } from "../../components/ui/Filters";





export const Hostels = () => {
    return (
        <div className="h-screen p-4 text-black overflow-y-scroll">
            {/*--------------------- Hostel Filters -------------------- */}
            <div className="">
                <Filters />
            </div>
            {/*--------------------- Hostels  --------------------------- */}
            <section className="mt-6">
            <div className="mb-2 flex gap-4 text-sm font-semi-bold">
                <button className="text-[#181818] focus:text-orange-500">Recommended</button>
                <button className="text-[#181818] focus:text-orange-500">Popular</button>
                <button className="text-[#181818] focus:text-orange-500">Nearest</button>
          </div>
            <div className=" flex flex-wrap gap-3 p-3">
                <Link to='/hostel/detail'>
                     <HostelCard />
                </Link>            
                 <Link to='/hostel/detail'>
                     <HostelCard />
                </Link>            
                 <Link to='/hostel/detail'>
                     <HostelCard />
                </Link>            
                 <Link to='/hostel/detail'>
                     <HostelCard />
                </Link>            
                 <Link to='/hostel/detail'>
                     <HostelCard />
                </Link>            
                 <Link to='/hostel/detail'>
                     <HostelCard />
                </Link>            
                 <Link to='/hostel/detail'>
                     <HostelCard />
                </Link>            
                 <Link to='/hostel/detail'>
                     <HostelCard />
                </Link>            
              
                
                </div> 
                </section>
        </div>
    )
}