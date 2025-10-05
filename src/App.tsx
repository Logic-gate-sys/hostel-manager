import { NavBar } from "./components/nav/navBar";
import { Routes, Route } from 'react-router-dom';
import { Hostels } from "./pages/hostel/Hostels";
import { Bookings } from "./pages/booking/Bookings";
import { Dashboard } from "./pages/dashboards/Dashboard";
import { Settings } from "./pages/Setting";
import { FAQs } from "./pages/FAQs";
import { HostelDetail } from "./pages/hostel/HostelDetail";



function App() {
  return (
    <>
      <div className="relative bg-[#F4F4F4] font-roboto text-lg text-white flex flex-col  md:flex-row">
        <section id="nav-bar" >
         <NavBar />
        </section>
        {/* ---------------------- Routes --------------------------------  */}
        <section id="main-bar" className=" ">
          <Routes>
            <Route path='/' element={<Hostels />} />
            <Route path='/bookings' element={<Bookings />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/faqs' element={<FAQs />} />
            <Route path='/hostel/detail' element={<HostelDetail/>} />
          </Routes>
        </section>
      </div>
    </>
  );
}

export default App;
