import hostelImage from "../../assets/images/hostel.jpg";
import likes from "../../assets/likes.svg";

const hostel = [
  {
    image: hostelImage,
    name: "AA Residentials",
    lowestPrice: 302,
    highestPrice: 2024,
    distance: 3.34,
    likes: 403,
  },
];

export const HostelCard = () => {
  return (
    <div
      id="card"
      className="bg-[#F4F4F4] shadow-sm text-sm text-[#7F7F7F] rounded-2xl px-2 pt-2 pb-6 hover:scale-101"
    >
      <div id="card-image">
        <img
          src={hostel[0].image}
          alt="Hostel Image"
          className="rounded-xl "
        />
      </div>

      <div id="card-texts" className="mt-2 flex flex-col gap-2">
        <h1 className="text-[#181818] text-md font-semi-bold">
          {hostel[0].name}
        </h1>

        {/* -------------------- Hostel meta info -------------------- */}
        <div className="flex flex-col justify-start items-start">
          <p className="  mt-2 text-[#FF5B19]">
            ${hostel[0].lowestPrice} - ${hostel[0].highestPrice}{" "}
          </p>
        </div>
        <div id="locations-hostel" className="mt-1 flex ">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#7F7F7F"
            >
              <path
                d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 
            294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150
             96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
              />
            </svg>
            <p className="mr-auto ">{hostel[0].distance}km from Ashesi</p>
          </div>
          <p className="ml-auto flex gap-1">
            {hostel[0].likes}{" "}
            <img src={likes} height={15} width={15} alt="Likes" />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
