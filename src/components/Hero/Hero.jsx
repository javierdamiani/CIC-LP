import Form from "../Form/Form";
import heroImg from "/hero-bg.svg";
import heroGirl from "/hero-girl.svg";

function Hero() {
  const backgroundStyle = {
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="sm:h-[800px] overflow-hidden flex flex-col sm:flex-row"
      style={backgroundStyle}
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-5 sm:h-full m-auto">
        <img
          className="sm:h-auto pt-10 sm:mt-0 sm:ml-0"
          src={heroGirl}
          alt=""
        />
        <div className="flex justify-center items-center sm:h-full">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Hero;
