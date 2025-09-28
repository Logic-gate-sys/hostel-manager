import { BookedHostelCard } from "../../components/ui/BookedHostelsCard"

export const Bookings = () => {
    return (
        <div className="h-screen overflow-y-scroll text-black p-8">
            <h1 className="m-4 text-2xl font-semi-bold"> My Bookings </h1>
            <section id="Booked-hostels" className="flex flex-wrap gap-4 ">
                <BookedHostelCard />  
                <BookedHostelCard />  
                <BookedHostelCard />  
                <BookedHostelCard />  
                <BookedHostelCard />  
                <BookedHostelCard />  
                <BookedHostelCard />  
            </section>
           
        </div>
    )
}