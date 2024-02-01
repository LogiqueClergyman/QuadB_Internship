import React from 'react'
function LandingPage() {
    const imageStyle = {
        backgroundImage: `url(${"https://static.tvmaze.com/uploads/images/original_untouched/494/1235114.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    
    return (
        <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          {/* div for gradient effect on backdrop image */}
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
  
          {/* backdrop image object using base url with sizing and template literal with optional chaining(?.) to read nested value in object */}
          <img
            className="w-full h-full " style={imageStyle}
            src={``}
            alt=""
          />
  
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            {/* title object */}
            <h1 className="text-3xl md:text-5xl font-bold"></h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Play
              </button>
              <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>
            {/* release date object */}
            <p className="text-gray-400 text-sm">
            </p>
            {/* overview object with truncate function to limit characters to 150 */}
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              
            </p>
          </div>
        </div>
      </div>
    );
  }

export default LandingPage