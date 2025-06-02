import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">Game Of Thrones</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:opacity-80 inline-flex justify-center items-center gap-1">
          <FaPlay className="h-4 w-4" />
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl opacity-50 rounded-lg inline-flex justify-center items-center gap-1">
        <IoIosInformationCircleOutline className="h-4 w-4" />
         More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
