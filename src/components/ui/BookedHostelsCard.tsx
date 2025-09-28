import hostelImage from "../../assets/images/hostel.jpg";

const bookedHostels = [
    {
        image: hostelImage,
        name: "Araba A2 Plaza",
        lowestPrice: 200,
        highestPrice: 2344,
        distance: 2.34,
        status : "Pending"

    }
]

export const BookedHostelCard = () => {
  return (
    <div
      id="card"
      className="bg-[#F4F4F4] shadow-lg text-sm text-[#7F7F7F] rounded-xl  w-fit p-2 pb-4"
    >
      <div id="card-image">
        <img
          src={bookedHostels[0].image}
          height={162}
          width={282}
          alt="Hostel Image"
          className="rounded-lg h-fit"
        />
      </div>
      <div id="card-texts" className="mt-1 flex flex-col gap-2">
        <h1 className="text-[#656060] text-md font-semi-bold">{bookedHostels[0].name}</h1>
        <p className="text-[#FF5B19]">${bookedHostels[0].lowestPrice} - ${bookedHostels[0].highestPrice} </p>
      </div>
      <div id="locations-hostel" className="flex ">
        <p className="mr-auto ">{bookedHostels[0].distance} km from Ashesi </p>
        <p className="flex gap-1">Status: <span className="text-orange-500">{bookedHostels[0].status}</span></p>
      </div>
    </div>
  );
};
