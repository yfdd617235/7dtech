
import React from 'react';

function AboutUs() {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white mt-20 md:mt-0">
      <div className="mx-auto py-14 px-4 lg:px-20 2xl:px-60">
        <div className="flex flex-col gap-12 md:flex-row justify-center items-center">

          {/* Video Section */}
          <div className="flex flex-col md:w-2/5 justify-center items-center">
          <img
              src={`${import.meta.env.BASE_URL}logoWH.svg`}
              alt="PPI"
              className="h-36 w-full"
            />
            {/* Video 1 */}
            <div className="w-full">
              <video
                className="w-full h-full object-contain rounded-lg shadow-lg"
                src={`${import.meta.env.BASE_URL}chip1.mp4`}
                poster={`${import.meta.env.BASE_URL}chip1.png`}
                muted
                autoPlay
                loop
                playsInline
                onError={(e) => (e.target.style.display = 'none')}
              />
            </div>
          </div>



          {/* Text Section */}
          <div className="md:w-3/5">
            <h2 className="text-lg md:text-2xl font-bold text-center mb-6">About Us</h2>
            <p className="text-justify text-sm md:text-lg my-4">
              Welcome to <span className="text-[#0CC0DF] font-bold">7D Technologies</span>, where innovation meets the art of precision. We don’t just develop software—we engineer possibilities, crafting solutions that empower businesses to conquer uncharted horizons.
            </p>
            <p className="text-justify text-sm md:text-lg my-4">
              <strong>Algorithmic and Market Analysis Software</strong><br />
              Our technology bridges the gap between data and decision-making. With advanced algorithms and market insights, we transform raw information into actionable strategies. Fast, adaptive, and intelligent, our software illuminates opportunities hidden within the noise of the markets.
            </p>
            <p className="text-justify text-sm md:text-lg my-4">
              <strong>BPO Development: Custom Software Solutions</strong><br />
              Every business has its own rhythm, and we design systems that sync perfectly with yours. At <span className="text-[#0CC0DF] font-bold">7D Technologies</span>, we specialize in creating bespoke software solutions tailored to streamline your processes, maximize efficiency, and unleash your potential.
            </p>
            <p className="text-justify text-sm md:text-lg my-4">
              We are pioneers of progress, architects of innovation, and your partners in navigating the complexities of a digital world. At <span className="text-[#0CC0DF] font-bold">7D Technologies</span>, we don’t just create software—we create futures.
            </p>
            
          </div>


        </div>
      </div>
    </div>
  );
}

export default AboutUs;
