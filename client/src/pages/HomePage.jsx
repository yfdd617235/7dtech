import { EnvelopeIcon } from "@heroicons/react/24/solid"

const HomaPage = () => {

  return (
    <div className="flex flex-col">
  {/* Jumbotron Section */}
  <div className="relative h-screen w-full bg-center flex justify-center items-center">
    
    {/* Video */}
    <video
      className="w-full h-full object-cover"
      src={`${import.meta.env.BASE_URL}techworld.mp4`}
      muted
      autoPlay
      loop
      playsInline
    />

    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black opacity-30"></div>

    {/* Overlay Content */}
    <div className="absolute flex flex-col text-white px-4 md:px-0 text-center">
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
