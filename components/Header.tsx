type Props = {
  page: string;
  changePage: (page: string) => void;
};

const Header: React.SFC<Props> = ({ page, changePage }) => {
  return (
    <div className="flex items-center p-4 text-grayish text-4xl font-semibold">
      <div className="mx-2">
        <a href="/">
          <img
            src="/images/jblogo.jpg"
            alt="Johnny Boueiz"
            className="h-20 rounded-lg"
          />
        </a>
      </div>
      <div
        className={`mx-4 border-yellow-500 ${
          page === "HOME" ? "border-b-2" : "border-0"
        }`}
      >
        <button
          className="rounded-lg px-2 focus:outline-none hover:text-yellow-500 duration-200"
          onClick={() => changePage("HOME")}
        >
          HOME
        </button>
      </div>
      <div
        className={`mx-4 border-yellow-500 ${
          page === "PROJECTS" ? "border-b-2" : "border-0"
        }`}
      >
        <button
          className="rounded-lg px-2 focus:outline-none hover:text-yellow-500 duration-200"
          onClick={() => changePage("PROJECTS")}
        >
          PROJECTS
        </button>
      </div>
      <div
        className={`mx-4 border-yellow-500 ${
          page === "ABOUT" ? "border-b-2" : "border-0"
        }`}
      >
        <button
          className="rounded-lg px-2 focus:outline-none hover:text-yellow-500 duration-200"
          onClick={() => changePage("ABOUT")}
        >
          ABOUT
        </button>
      </div>
    </div>
  );
};

export default Header;
