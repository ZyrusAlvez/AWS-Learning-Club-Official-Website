import april from "../../assets/Events/April.jpg";
import Buttons from "./Buttons";

const April = () => {
  return (
    <div className="text-white sm:flex sm:flex-row-reverse sm:items-center">
      <img src={april} className="w-full aspect-square mb-4 sm:w-1/2" />
      <div className="flex flex-col gap-4 sm:mr-8">
        <h1 className="text-pink text-2xl font-bold sm:text-4xl">April 2024</h1>
        <h2 className="text-xl font-bold sm:text-2xl">
          UNLOCK THE POWER OF CLOUD: <br />
          Introduction to{" "}
          <span className="text-yellow font-extrabold">AWS</span> Career
          Opportunities
        </h2>
        <h3>
          Explore the vast world of cloud computing with AWS and unlock a
          multitude of career opportunities. Join us for an enlightening webinar
          where you'll delve into the core of Amazon Web Services, demystify its
          functionalities, and discover the diverse career paths it offers.
        </h3>
        <Buttons />
      </div>
    </div>
  );
};

export default April;
