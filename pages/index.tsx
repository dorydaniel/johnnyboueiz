import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home() {
  const [page, setPage] = useState("HOME");
  const changePage = (page: string) => {
    setPage(page);
  };

  const projects = [
    {
      id: "project1",
      url: "/images/boueizvilla.jpg",
      alt: "Boueiz Villa",
      title: "Boueiz Villa",
      period: "30 July - 05 August 2020",
      description: "This is the text area for this paragraph.",
      li: true,
      twt: true,
      insta: true,
      wtp: false,
    },
    {
      id: "project2",
      url: "/images/dubaigarden.jpg",
      alt: "Dubai Garden",
      title: "Dubai Garden",
      period: "10 May - 10 September 2019",
      description: "This is the text area for this paragraph.",
      li: true,
      twt: false,
      insta: false,
      wtp: true,
    },
    {
      id: "project3",
      url: "/images/zoukgarden.jpg",
      alt: "Zouk Garden",
      title: "Zouk Garden",
      period: "01 July - 01 October 2015",
      description: "This is the text area for this paragraph.",
      li: true,
      twt: false,
      insta: true,
      wtp: false,
    },
    {
      id: "project4",
      url: "/images/hamadvilla.jpg",
      alt: "Hamad Super Villa",
      title: "Hamad Super Villa",
      period: "01 June - 01 July 2011",
      description: "This is the text area for this paragraph.",
      li: false,
      twt: false,
      insta: false,
      wtp: true,
    },
  ];

  return (
    <div
      className="flex bg-fixed bg-no-repeat bg-cover bg-center h-full"
      style={{
        backgroundImage: `url('/images/${
          page === "HOME"
            ? "lily_yellow_flower.jpg"
            : page === "PROJECTS"
            ? "lily_3.jpg"
            : "lily_2.jpg"
        }')`,
        transitionDuration: "400ms",
      }}
    >
      <Head>
        <title>Johnny Boueiz - Official Website</title>
        <link rel="icon" href="/images/logo-jb.ico" />
      </Head>
      <div
        className="h-full w-11/12 m-auto"
        style={{
          backgroundColor: "rgba(0,0,0,0.2)",
          backdropFilter: "blur(5px)",
          boxShadow: "rgba(0,0,0,0.25) 0 3px 11px 0",
        }}
      >
        <Header page={page} changePage={changePage} />

        {page === "HOME" ? (
          <div
            className="mt-16 mb-40 text-yellowor font-medium text-lg sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl"
            style={{ textShadow: "2px 2px #000000" }}
          >
            <div className="my-6">
              <img src="/images/agriculture.svg" alt="Agriculture" />
            </div>
            <p>
              AGRICULTURE
              <br />
              is our wisest pursuit
              <br />
              because it will in the end
              <br />
              contribute most to real wealth,
              <br />
              good morals and happiness.
            </p>
          </div>
        ) : page === "PROJECTS" ? (
          <div className="flex flex-wrap mt-8 mb-24">
            {projects.map((project) => (
              <Projects key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <About />
        )}

        <Footer />
      </div>
    </div>
  );
}
