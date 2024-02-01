import React from "react";
import { Link } from "react-router-dom";

function Thumbnail(props) {
  let imageUrl = props.movie.show.image && props.movie.show.image.medium;

  imageUrl =
    imageUrl !== null
      ? imageUrl
      : "https://www2.brockport.edu/live/resource/image/_resources/images/directory_index_default.rev.1649271413.png";

  let showName = props.movie.show.name;
  let rating = props.movie.show.rating.average;
  let genre = props.movie.show.genres;
  let desc = props.movie.show.summary;

  const imageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // console.log("Thumbnail State:", { movie: props.movie });

  return (
    <Link to = "/details" state={{movie: props.movie}}>
      <div
        className="block w-44 h-64 rounded-xl shadow hover:-translate-y-2 duration-500 mt-2 hover:rounded-xl ease-in-out transition-all  hover:bg-gray-100"
        style={imageStyle}
      >
        <div className="flex flex-col group hover:bg-black w-full h-full hover:bg-opacity-60 transition-all rounded-xl duration-500 ease-in-out">
          <div className="group-hover:block hidden h-1/2 px-2">
            <p className="text-2xl text-white font-semibold mt-2">{showName}</p>
            <div className="text-white text-sm my-2">
              {`${desc.substring(0, 80)}...`}
            </div>
            <div>
              <span className="text-white font-semibold text-sm">Rating: </span>
              <span className="text-white text-sm">
                {rating !== null ? rating + "/10" : "Unrated"}
              </span>
            </div>
            <div className="flex flex-wrap gap-1 my-10">
              {genre.map((genre, index) => (
                <span
                  key={index}
                  className="text-white font-light text-sm border-2 border-white rounded-full px-1"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Thumbnail;
