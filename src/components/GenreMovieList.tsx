import { IoChevronForwardSharp } from "react-icons/io5";
import GenresList from "./constant/GenresList";

function GenreMovieList() {
  return (
    <div className="mt-24 p-5 px-10 md:px-20">
      {GenresList.genere.map(
        (item: any, index) =>
          index <= 4 && (
            <div>
              <h2 className="text-white text-[23px] fold-bold  ">
                {item.name}
                <span className="font-normal text-[16px] cursor-pointer text-gray-400  float-right flex">
                  VIEW ALL <IoChevronForwardSharp className="text-white ml-2" />
                </span>
              </h2>
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
