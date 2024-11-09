import Card from "./Card.jsx";

const Contact_Us = () => {
  return (
      <div id="contact_us" className="w-full flex flex-col items-center justify-center text-white mt-20 scroll-mt-16">
        <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        <div className="flex justify-center items-center flex-wrap gap-16 mt-16">
          <Card
            title="Email"
            subtitle="We'd love to here from you! Reach out anytime."
            info="communication@awslc.com"
          />
          <Card
            title="Phone"
            subtitle="Call us for inquiries or support; we’re here to help!"
            info="+1 (555) 000-0000"
          />
          <Card
            title="Place"
            subtitle="College of Computer Studies - UPHSL"
            info="123 Sample St, Sydney NSW 2000 AU"
          />
        </div>
      </div>
  );
};

export default Contact_Us;
