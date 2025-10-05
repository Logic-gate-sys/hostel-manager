import { useState } from "react";
import companyLogo from "../../assets/house.svg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  //responsive state keeper
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  return (
    <div className="flex">
      {/*===================================== Desktop View =================================================== */}
      <nav className=" hidden  bg-[#152259] h-screen box-shadow-2xl font-semi-bold text-sm md:flex flex-col p-1">
        {/* -------------------- Logo & Name ------------------------------------ */}
        <div
          id="logo-container"
          className="mt-4 flex flex-col gap-4  items-center"
        >
          <img src={companyLogo} alt="Company Logo" width={40} height={40} />
          <h1>RoomFind</h1>
          <hr className="mt-4 mb-4 w-[100%] border-zinc-400 border-1 font-bold" />
        </div>

        {/* ----------------- Navigation  Links ----------------------- */}
        <section className="mt-4  flex flex-col gap-5 justify-center  p-2 ">
          <div
            id="hostels"
            className="hover:bg-blue-400 active:bg-amber-400 p-1 rounded-lg flex gap-1  items-center"
          >
            {/*  hostel - link */}
            <div id="hostel-link" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className="fill-white"
              >
                <path
                  d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160
               160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160
               480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"
                />
              </svg>
              <Link to="/"> Hostels </Link>
            </div>
          </div>

          <div
            id="bookings"
            className="hover:bg-blue-400 active:bg-amber-400 p-1 rounded-lg "
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1f1f1f"
                className="fill-white"
              >
                <path
                  d="M680-80v-120H560v-80h120v-120h80v120h120v80H760v120h-80Zm-480-80q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h40v-80h80v80h240v-80h80v80h40q33
             0 56.5 23.5T760-720v244q-20-3-40-3t-40 3v-84H200v320h280q0 20 3 40t11 40H200Zm0-480h480v-80H200v80Zm0 0v-80 80Z"
                />
              </svg>
              <Link to="/bookings"> Bookings </Link>
            </div>
          </div>

          <div
            id="dashboard"
            className="hover:bg-blue-400 active:bg-amber-400 p-1 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="white"
              >
                <path
                  d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400
             0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"
                />
              </svg>
              <Link to="/dashboard"> DashBoard </Link>
            </div>
          </div>

          <div
            id="settings"
            className="hover:bg-blue-400 active:bg-amber-400 p-1 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="white"
              >
                <path
                  d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 
              119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103
               78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14
                7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5
                23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13
                106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"
                />
              </svg>
              <Link to="/settings"> Setting </Link>
            </div>
          </div>
          <div
            id="hostels"
            className="hover:bg-blue-400 active:bg-amber-400 p-1 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="white"
              >
                <path
                  d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33
               7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32
               0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54
               127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0
                227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                />
              </svg>
              <Link to="/faqs"> FAQs </Link>
            </div>
          </div>
        </section>
      </nav>

      {/* ==================================== Mobile View ==================================================== */}
      {!openMobileMenu ? (
        <div className="md:hidden flex items-start gap-2 bg-[#152259] w-screen p-[3%]">
          <img src={companyLogo} alt="Company Logo" width={30} height={30} />
          <button onClick={() => setOpenMobileMenu(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="white"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
      ) : (
        <nav className="absolute innet-0 z-22 h-screen  bg-[#152259] opacity-95 w-screen">
          <div className="flex flex-col p-4">
            {/* ----------------------------- Cancel ----------------------------------------------- */}
            <button
              onClick={() => setOpenMobileMenu(false)}
              className="ml-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="white"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
            {/* ----------------- Navigation  Links ----------------------- */}
            <section className="mt-4  flex flex-col gap-5 justify-center  p-2 ">
              <div
                id="hostels"
                className="hover:bg-blue-400 active:bg-amber-400 p-1 rounded-lg flex gap-1  items-center"
              >
                {/*  hostel - link */}
                <div id="hostel-link" className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    className="fill-white"
                  >
                    <path
                      d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160
               160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160
               480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"
                    />
                  </svg>
                  <button onClick={() => setOpenMobileMenu(false)}>
                    <Link to="/"> Hostels </Link>
                  </button>
                </div>
              </div>

              <div
                id="bookings"
                className="hover:bg-blue-400 active:bg-amber-400 p-1 rounded-lg "
              >
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#1f1f1f"
                    className="fill-white"
                  >
                    <path
                      d="M680-80v-120H560v-80h120v-120h80v120h120v80H760v120h-80Zm-480-80q-33 0-56.5-23.5T120-240v-480q0-33 23.5-56.5T200-800h40v-80h80v80h240v-80h80v80h40q33
             0 56.5 23.5T760-720v244q-20-3-40-3t-40 3v-84H200v320h280q0 20 3 40t11 40H200Zm0-480h480v-80H200v80Zm0 0v-80 80Z"
                    />
                  </svg>
                  <button onClick={() => setOpenMobileMenu(false)}>
                    <Link to="/bookings"> Bookings </Link>
                  </button>
                </div>
              </div>

              <div
                id="dashboard"
                className="hover:bg-blue-400 active:bg-amber-400 p-1 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="white"
                  >
                    <path
                      d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400
             0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"
                    />
                  </svg>
                  <button onClick={() => setOpenMobileMenu(false)}>
                    <Link to="/dashboard"> DashBoard </Link>
                  </button>
                </div>
              </div>

              <div
                id="settings"
                className="hover:bg-blue-400 active:bg-amber-400 p-1 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="white"
                  >
                    <path
                      d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 
              119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103
               78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14
                7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5
                23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13
                106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"
                    />
                  </svg>
                  <button onClick={() => setOpenMobileMenu(false)}>
                    <Link to="/settings"> Setting </Link>
                  </button>
                </div>
              </div>
              <div
                id="hostels"
                className="hover:bg-blue-400 active:bg-amber-400 p-1 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="white"
                  >
                    <path
                      d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33
               7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32
               0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54
               127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0
                227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
                    />
                  </svg>
                  <button onClick={() => setOpenMobileMenu(false)}>
                    <Link to="/faqs"> FAQs </Link>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </nav>
      )}
    </div>
  );
};
