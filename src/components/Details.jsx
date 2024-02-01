import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// import imdb from "imdb-icon.svg"
function Details() {
  const location = useLocation();
  const movie = location.state?.movie || {};
  //   console.log("DetailsComponent Location:", location);
  console.log("DetailsComponent Location State:", { movie });
  let genre = movie.show.genres;
  let language = movie.show.language;
  let imdb = movie.show.externals.imdb;
  let rating = movie.show?.rating?.average || "Unrated";
  let officialLink = movie.show.officialSite;
  let preTime = movie.show.schedule?.time || "Unknown";
  let preDays = movie.show.schedule?.days || [];
  let preZone = movie.show.network?.country.timezone || "Unknown";
  let preNetName = movie.show.network?.name || "Unknown";
  let status = movie.show.status || "Unknown";
  let premiered = movie.show.premiered || "Unknown";
  let runtime = movie.show.averageRuntime || "Unknown";

  return (
    <div className="flex flex-col w-full sm:flex-row py-10 ">
      <div className="md:w-2/5">
        <div className="m-1 md:m-5">
          <img
            src={
              movie.show.image?.original ||
              "https://www2.brockport.edu/live/resource/image/_resources/images/directory_index_default.rev.1649271413.png"
            }
            className=" h-[600px] rounded-xl md:rounded-3xl md:outline-1 md:-outline-offset-8 md:outline md:outline-white"
            alt=""
          />
        </div>
      </div>
      <div className="md:w-4/5 p-5 sm:p-10">
        <div>
          <div className="flex justify-between">
            <h1 className="text-5xl font-bold text-white underline">
              {movie.show.name}
            </h1>
            <p className="text-white">
              <span className="flex text-md mt-1 sm:mr-5 pt-2 sm:px-2">
                <img src={"imdb-icon.svg"} className="h-7 sm:mr-2" alt="" />
                {rating}
              </span>
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-10">
            {genre.map((genre, index) => (
              <span
                key={index}
                className="text-white font-serif font-normal text-md border-2 border-white rounded-full p-1 px-5"
              >
                {genre}
              </span>
            ))}
          </div>
          {/* <p className="text-white text-sm font-light">{movie.show.genres.join(", ")}</p> */}
          <div className="mt-2 mb-8 text-white">
            Language: <span className="italic"> {language}</span>
          </div>
          <p className="text-white text-md font-light bg-black bg-opacity-60 px-3 sm:px-5 pb-5 pt-3 rounded-xl">
            <span className="text-white text-xl font-normal sm:pr-4">
              Premise:
            </span>
            <span
              dangerouslySetInnerHTML={{ __html: movie.show.summary }}
            ></span>
          </p>
          <div className="mr-2 text-white my-2 flex justify-end">
            <p className="mr-4">Official:</p>
            <a href={officialLink}>
              <img src={"link.png"} className="h-5 mt-1  " alt="" />
            </a>
          </div>
          <div className="flex sm:justify-between mt-5">
            <div className="md:w-1/2 p-10">
              <div className="p-5  border-black border-2 rounded-xl bg-gradient-to-l from-yellow-700 via-amber-400 to-yellow-700">
                <p className="text-black font-semibold font-mono">
                  Register with us and get access to your favourite shows right
                  now !!!
                </p>
                <div className="flex justify-end mt-4">
                  <Link
                    to="/register"
                    state={{
                      form: { name: movie.show.name, id: movie.show.id },
                    }}
                  >
                    <button className="hover:bg-transparent hover:outline hover:outline-1 bg-gray-700 bg-opacity-80 text-white text-xl rounded-md py-1 px-3 font-serif hover:text-black hover:text-2xl ease-in-out transition-all duration-200 ">
                      Join Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-white md:w-1/2">
              <p className="underline text-xl pb-2">Runtime:</p>
              <div className="border-l-4 pl-2">
                <div>
                  Time: <span className="text-sm font-light">{preTime}</span>
                </div>
                <div>
                  Timezone:{" "}
                  <span className="text-sm font-light">{preZone}</span>
                </div>
                <div>
                  Network:{" "}
                  <span className="text-sm font-light">{preNetName}</span>
                </div>
                <div>
                  Days:{" "}
                  <span className="text-white text-sm font-light">
                    {preDays.length > 0 ? preDays.join(", ") : "Unknown"}
                  </span>
                </div>
                <div>
                  First Primiered:{" "}
                  <span className="text-white text-sm font-light">
                    {premiered}
                  </span>
                </div>
                <div>
                  Status:{" "}
                  <span className="text-white text-sm font-light">
                    {status}
                  </span>
                </div>
                <div>
                  Avg. runtime:{" "}
                  <span className="text-white text-sm font-light">
                    {runtime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
