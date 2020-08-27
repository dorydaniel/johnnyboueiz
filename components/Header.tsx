type Props = {
  page: string;
  changePage: (page: string) => void;
};

const Header: React.SFC<Props> = ({ page, changePage }) => {
  return (
    <div className="flex flex-wrap justify-between items-center px-4 text-grayish text-xs sm:text-xs md:text-2xl lg:text-3xl xl:text-4xl">
      <div className="mx-2 my-4">
        <a href="/">
          <img
            src="/images/jblogo.jpg"
            alt="Johnny Boueiz"
            className="rounded-lg h-10 sm:h-10 md:h-12 lg:h-16 xl:h-20"
          />
        </a>
      </div>
      <div className="flex flex-1 justify-around">
        <div
          className={`mx-2 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-4 border-yellow-500 ${
            page === "HOME"
              ? "border-b-2 text-yellowish duration-100"
              : "border-0"
          }`}
        >
          <button
            className="rounded-lg font-semibold focus:outline-none hover:text-yellowish duration-200"
            style={{ textShadow: "2px 2px #000000" }}
            onClick={() => changePage("HOME")}
          >
            HOME
          </button>
        </div>
        <div
          className={`mx-2 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-4 border-yellow-500 ${
            page === "PROJECTS"
              ? "border-b-2 text-yellowish duration-100"
              : "border-0"
          }`}
        >
          <button
            className="rounded-lg font-semibold focus:outline-none hover:text-yellowish duration-200"
            style={{ textShadow: "2px 2px #000000" }}
            onClick={() => changePage("PROJECTS")}
          >
            PROJECTS
          </button>
        </div>
        <div
          className={`mx-2 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-4 border-yellow-500 ${
            page === "ABOUT"
              ? "border-b-2 text-yellowish duration-100"
              : "border-0"
          }`}
        >
          <button
            className="rounded-lg font-semibold focus:outline-none hover:text-yellowish duration-200"
            style={{ textShadow: "2px 2px #000000" }}
            onClick={() => changePage("ABOUT")}
          >
            ABOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
