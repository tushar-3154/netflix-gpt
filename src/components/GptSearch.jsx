import { BG_IMG_URL } from "../utils/constants";
import GptMoviewSuggection from "./GptMovieSuggection";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div>
       <div className="absolute -z-10">
        <img
          src={BG_IMG_URL}
          alt="bgImage"
        />
      </div>
      <GptSearchBar />
      <GptMoviewSuggection />
    </div>
  );
};

export default GPTSearch;
  