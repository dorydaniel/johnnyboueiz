const Footer: React.SFC = () => {
  return (
    <div className="p-4 absolute bottom-0 w-full">
      <div className="flex justify-center items-center">
        <div className="mx-2">
          <a href="https://lb.linkedin.com/public-profile/in/johnny-boueiz-a03606114">
            <img src="/images/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>

        <div className="mx-2">
          <a href="https://twitter.com/johnnyboueiz">
            <img src="/images/twitter.svg" alt="Twitter" />
          </a>
        </div>

        <div className="mx-2">
          <a href="https://www.instagram.com/jo8nnyb/">
            <img src="/images/instagram.svg" alt="Instagram" />
          </a>
        </div>

        <div className="mx-2">
          <a href="https://wa.me/9613499584">
            <img src="/images/whatsapp.svg" alt="Whatsapp" />
          </a>
        </div>
      </div>

      <div
        className="text-white text-center mt-2"
        style={{ textShadow: "2px 2px #000000" }}
      >
        <h3>
          Created by <span>DD</span>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
