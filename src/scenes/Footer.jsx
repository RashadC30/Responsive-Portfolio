import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-rubik font-semibold text-2xl text-teal">
            RASHAD CLEMENT
          </p>
          <p className="font-labrada text-md text-teal ">
            ©2023 CLEMENT. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
