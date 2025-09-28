export const Filters = () => {
  return (
    <div className="flex gap-3 justify-start">
      {/* ------------- Search --------------------- */}
      <div
        id="search"
        className="flex gap-1 border-zinc-500 border-1 p-2 rounded-3xl"
      >
        <input
          type="text"
          placeholder="Search Here..."
          className="border-none outline-0"
        />
        <span className="flex gap-3">
          <div className="border-l-2 h-6.5"></div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#FF5B19"
            >
              <path
                d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109
                                 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0
                                 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
              />
            </svg>
          </button>
        </span>
          </div>
          {/* ------------------ Price Filter ----------------------------------- */}
          <div id="price" className="flex gap-2 justify-start items-center rounded-3xl border-zinc-400 border-1 p-2">
              <input type="text" placeholder="Price..." className="border-none outline-0" />
              <span className="text-[#FF5B19]">$$</span>
          </div>
          {/* ------------------ Beds filter  ----------------------- */}
          <div id="beds" className="bg-[#FF5B19] text-white p-2 rounded-2xl px-5">
              <select name="beds-filter" id="beds-filter" className="bg-[#FF5B19] border-none outline-0">
                  <option value="" disabled selected>Room Type</option>
                  <option value="1 Bed" >1 Beds </option>
                  <option value="2 Beds" >2 Beds </option>
                  <option value="2-4 Beds" >2-4 Beds </option>
                  <option value="4-8 Beds"> 4-8 Beds</option>      
              </select>
          </div>
          {/* ---------------------- Property Type --------------------- */}
          <div id="beds" className=" text-[#B7BFC5] p-2 border-zinc-400 border-1 rounded-2xl px-5">
              <select name="beds-filter" id="beds-filter" className=" border-none outline-0">
                  <option value="" disabled selected>Property Type</option>
                  <option value="Hostel">Hostel</option>
                  <option value="Kitchen">Kitchen </option>
                  <option value="Party-House">Party-House </option>
                  <option value="4-8 Beds">Conference Room</option>      
              </select>
          </div>
    </div>
  );
};
