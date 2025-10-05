export const HostelDetailCard = () => {
     
 
return (
    <section className="border-1 flex flex-col gap-2 rounded-2xl p-2">
        <h1 className="text-xl text-orange-500">$3020 - 40404 / Year</h1>
        <p className="text-lg font-bold">Overview </p>

        <div id="details" className="text-[#181818] flex md:flex-row flex-cols gap-2">
            {/* -------------- Interior ---------------------------- */}
            <section id="interior" className="mr-8">
                <div
                    id="bedrooms"
                    className="flex gap-2 justify-start items-center"
                >
                    <div className="border-1  border-[#7F7F7F] rounded-full p-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#FF5B19"
                        >
                            <path
                                d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 
            0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 
            0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Zm-40 
            200h640v-80q0-17-11.5-28.5T760-480H200q-17 0-28.5 11.5T160-440v80Zm640 0H160h640Z"
                            />
                        </svg>
                    </div>
                    <div className="flex flex-col ">
                        <h1 >BedRooms</h1>
                        <span className="text-sm"> 4 </span>
                    </div>
                </div>

                <div
                    id="bedrooms"
                    className="flex gap-2 justify-start items-center"
                >
                    <div className="border-1  border-[#7F7F7F] rounded-full p-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#FF5B19">
                            <path d="M280-600q-33 0-56.5-23.5T200-680q0-33
               23.5-56.5T280-760q33 0 56.5 23.5T360-680q0 33-23.5 56.5T280-600ZM200-80q-17 0-28.5-11.5T160-120q-33 0-56.5-23.5T80-200v-240h120v-30q0-38 26-64t64-26q20 0 37
                8t31 22l56 62q8 8 15.5 15t16.5 13h274v-326q0-14-10-24t-24-10q-6 0-11.5 2.5T664-790l-50 50q5 17 2 33.5T604-676L494-788q14-9 30-11.5t32 3.5l50-50q16-16 36.5-25t43.5-9q48
                0 81 33t33 81v326h80v240q0 33-23.5 56.5T800-120q0 17-11.5 28.5T760-80H200Zm-40-120h640v-160H160v160Zm0 0h640-640Z"/></svg>
                    </div>
                    <div className="flex flex-col ">
                        <h1 >Baths</h1>
                        <span className="text-sm"> 4 </span>
                    </div>
                </div>

                <div
                    id="bedrooms"
                    className="flex gap-2 justify-start items-center"
                >
                    <div className="border-1  border-[#7F7F7F] rounded-full p-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#FF5B19">
                            <path d="M120-520v-320h320v320H120Zm0
               400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400
               0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg>
                    </div>
                    <div className="flex flex-col ">
                        <h1 >Sqrft</h1>
                        <span className="text-sm"> 4 </span>
                    </div>
                </div>
            </section>
            {/* -------------------------- Exterior --------------------------------- */}
            <section id="exterior">
                <div
                    id="bedrooms"
                    className="flex gap-2 justify-start items-center"
                >
                    <div className="border-1  border-[#7F7F7F] rounded-full p-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#FF5B19"><path
                                d="M200-160v-366L88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-112-86v366H520v-240h-80v240H200Zm80-80h80v-240h240v240h80v-347L480-739
                   280-587v347Zm120-319h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Zm-40 319v-240h240v240-240H360v240Z" /></svg>
                    </div>
                    <div className="flex flex-col ">
                        <h1 >Type</h1>
                        <span className="text-sm"> 4 </span>
                    </div>
                </div>
   
            
                <div
                    id="bedrooms"
                    className="flex gap-2 justify-start items-center"
                >
                    <div className="border-1  border-[#7F7F7F] rounded-full p-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#FF5B19">
                            <path d="m620-120-20-240-60-40v-160q0-33 
              23.5-56.5T620-640h20l40 80 40-80h20q33 0 56.5 23.5T820-560v160l-60 40-20 240H620Zm60-560q-33 0-56.5-23.5T600-760h160q0 33-23.5 56.5T680-680Zm-80-120v-40q0-17
              11.5-28.5T640-880h80q17 0 28.5 11.5T760-840v40H600ZM320-120q-17 0-28.5-11.5T280-160v-40H80v-80h240v-200H80v-80h208l-42-120H80v-80h180q19 0 34.5 11t21.5 29l84
              240v320q0 17-11.5 28.5T360-120h-40ZM220-320q25 0 42.5-17.5T280-380q0-25-17.5-42.5T220-440q-25 0-42.5 17.5T160-380q0 25 17.5 42.5T220-320Z"/></svg>
                    </div>
                    <div className="flex flex-col ">
                        <h1 >Parking</h1>
                        <span className="text-sm"> 4 </span>
                    </div>
                </div>

            
                <div
                    id="bedrooms"
                    className="flex gap-2 justify-start items-center"
                >
                    <div className="border-1  border-[#7F7F7F] rounded-full p-1.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 -960 960 960"
                            width="20px"
                            fill="#FF5B19">
                            <path d="M42-120v-112q0-33 
              17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H42Zm80-80h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320q-71
              0-127.5 18T142-266q-9 5-14.5 14t-5.5 20v32Zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620q0-9 5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9
               5.5 14.5T302-720q9 0 14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v54q0 9 5.5 14.5T422-720q9 0 14.5-5.5T442-740v-38q36 21 58 57t22 81h10q9
                0 14.5 5.5T552-620q0 9-5.5 14.5T532-600h-10q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Zm300 160-6-30q-6-2-11.5-4.5T634-402l-28
                10-20-36 22-20v-24l-22-20 20-36 28 10q4-4 10-7t12-5l6-30h40l6 30q6 2 12 5t10 7l28-10 20 36-22 20v24l22 20-20 36-28-10q-5 5-10.5 7.5T708-390l-6 30h-40Zm20-70q12
                0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm72-130-8-42q-9-3-16.5-7.5T716-620l-42 14-28-48 34-30q-2-5-2-8v-16q0-3 2-8l-34-30 28-48 42 14q6-6
                 13.5-10.5T746-798l8-42h56l8 42q9 3 16.5 7.5T848-780l42-14 28 48-34 30q2 5 2 8v16q0 3-2 8l34 30-28 48-42-14q-6 6-13.5 10.5T818-602l-8 42h-56Zm28-90q21 0 35.5-14.5T832-700q0-21-14.5-35.5T782-750q-21
                  0-35.5 14.5T732-700q0 21 14.5 35.5T782-650ZM362-200Z"/></svg>
                    </div>
                    <div className="flex flex-col ">
                        <h1 >Build Year</h1>
                        <span className="text-sm"> 4 </span>
                    </div>
                </div>


            </section>
        </div>
    </section>
)
    

}