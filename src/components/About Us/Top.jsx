import Top_Card from "./Top_Card.jsx";

const Top = () => {
  return (
    <div className="w-full bg-black flex flex-col justify-center items-center py-4 mb-20">
      <h1 className="text-white text-center sm:text-lg">
        We offer a mix of educational programs and community-driven activities
        designed to help you excel in AWS.
      </h1>
      <div className="flex flex-wrap justify-center mt-8 items-center px-2 pb-4 gap-8">
        <Top_Card
          title="Hands-On Workshops"
          subtitle="Practical, interactive sessions to help you build real-world AWS skills."
        />
        <Top_Card
          title="Expert-Led Webinars"
          subtitle="Learn from industry professionals with deep AWS experience."
        />
        <Top_Card
          title="Community Networking"
          subtitle="Connect, collaborate, and grow with other cloud enthusiasts."
        />
      </div>
    </div>
  );
};

export default Top;
