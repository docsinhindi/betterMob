import AuthLoginForm from "./home/contact/contact-form";
import Container from "./layout/page-layout";

const ContactPersonalData = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h4 className="font-normal text-lg">Better Mobility</h4>
        <p className="font-normal text-lg text-[#404040]">
          22023 Teuku Umar, Dubai, UAE
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48011.66848182367!2d69.2057574!3d41.2276697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1716114423770!5m2!1sen!2s"
       className=" w-[100%] h-[300px] md:w-[320px]  lg:w-[500px] lg:h-[450px] xl:w-[600px]"
        style={{ border: "0" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <ul className=" flex flex-col lg:flex-row  lg:items-center lg:justify-between gap-4">
        <li className="relative before:border before:border-gray-400 before:absolute before:left-0 before:bottom-0 before:h-full p-2">
          <h4 className="font-bold text-lg">General</h4>
          <p className="font-normal text-lg">hello@bettermobi.com</p>
        </li>
        <li className="relative before:border before:border-gray-400 before:absolute before:left-0 before:bottom-0 before:h-full p-2">
          <h4 className="font-bold text-lg">Support</h4>
          <p className="font-normal text-lg">support@bettermobi.com</p>
        </li>
      </ul>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <Container className="py-20 space-y-16">
        <h2 className=" text-3xl md:text-6xl font-semibold">
          Get in touch with our lovely team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactPersonalData />
          <AuthLoginForm />
        </div>
      </Container>
    </div>
  );
};

export default Contact;
