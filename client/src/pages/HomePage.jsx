import { EnvelopeIcon } from "@heroicons/react/24/solid"

const HomaPage = () => {

  return (
    <div className="flex flex-col">
      {/* Jumbotron Section */}
      <div className="relative h-screen w-full bg-center flex justify-center items-center ">
        {/* Video */}
        <video
          className="w-full h-full object-cover bg-black opacity-90"
          src={`${import.meta.env.BASE_URL}techworld.mp4`}
          poster={`${import.meta.env.BASE_URL}techworld.png`}
          muted
          autoPlay
          loop
          playsInline
          onError={(e) => (e.target.style.display = 'none')}
        />

        {/* Poster Image as Fallback */}
        <img
          src={`${import.meta.env.BASE_URL}techworld.png`}
          alt="Video Poster"
          className="absolute w-full h-full object-cover bg-black opacity-70"
          style={{ display: 'none' }}
          onLoad={(e) => {
            const video = document.querySelector('video');
            if (video && video.style.display === 'none') {
              e.target.style.display = 'block';
            }
          }}
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Overlay Content */}
        <div className="absolute flex flex-col text-white px-5 md:px-0 items-center">
          {/* <div className="h-32 w-32 flex">
            <img
              src={`${import.meta.env.BASE_URL}7DNL6.svg`}
              alt="PPI"
              className="h-full w-full object-cover "
            />
          </div> */}
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
            style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 1)" }}
          >
            7D - Technologies
          </h1>
          <p
            className="text-sm sm:text-base md:text-2xl font-light"
            style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 1)" }}
          >
            Transforming visions into reality, guiding every dimension of growth and innovation.
          </p>
        </div>
      </div>

    </div>

  );
};

export default HomaPage;
