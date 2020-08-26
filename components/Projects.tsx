type Props = {
  project: {
    id: string;
    url: string;
    alt: string;
    title: string;
    period: string;
    description: string;
    li: boolean;
    twt: boolean;
    insta: boolean;
    wtp: boolean;
  };
};

const Projects: React.SFC<Props> = ({ project }) => {
  const shadow = {
    boxShadow: "rgba(0,0,0,0.25) 0 3px 11px 0",
    backgroundColor: "rgba(255,255,255,0.7)",
    backdropFilter: "blur(5px)",
  };

  return (
    <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 my-6 px-2">
      <div className="w-full h-full flex flex-row rounded-lg" style={shadow}>
        <div className="flex w-1/2 h-40 sm:h-40 md:h-48 lg:h-56 xl:h-56">
          <div
            className="w-full h-full bg-scroll bg-no-repeat bg-cover bg-center rounded-l-lg"
            style={{ backgroundImage: `url(${project.url})` }}
          ></div>
        </div>
        <div className="w-1/2 flex flex-col justify-between py-2 px-3">
          <p className="text-base sm:text-base md:text-2xl lg:text-3xl xl:text-3xl font-medium break-words">
            {project.title}
          </p>
          <p className="text-blue-700 text-xs sm:text-xs md:text-sm lg:text-base xl:text-base leading-4">
            {project.period}
          </p>
          <p className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-base leading-4">
            {project.description}
          </p>
          <div className="flex flex-row">
            {project.li && (
              <a
                className="mx-1 flex flex-col justify-center"
                href="https://linkedin.com"
              >
                <img src="images/linkedin.svg" alt="LinkedIn" />
              </a>
            )}
            {project.twt && (
              <a
                className="mx-1 flex flex-col justify-center"
                href="https://twitter.com"
              >
                <img src="/images/twitter.svg" alt="Twitter" />
              </a>
            )}
            {project.insta && (
              <a
                className="mx-1 flex flex-col justify-center"
                href="https://instagram.com"
              >
                <img src="/images/instagram.svg" alt="Instagram" />
              </a>
            )}
            {project.wtp && (
              <a className="mx-1 flex flex-col justify-center" href="">
                <img src="images/whatsapp.svg" alt="Whatsapp" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
