import Team from "./Team.jsx";
import Top from "./Top.jsx";
import Mission from "./Mission.jsx";

const About_Us = () => {
  return (
    <div className="w-fill bg-black scroll-mt-16 mx-4" id="about_us">
      <Top />
      <Team />
      <Mission />
    </div>
  );
};

export default About_Us;
