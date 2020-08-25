import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

export default function Home() {
  const [page, setPage] = useState("HOME");
  const changePage = (page: string) => {
    setPage(page);
  };

  return (
    <div
      className="bg-fixed bg-no-repeat bg-cover bg-center h-screen"
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

      <Header page={page} changePage={changePage} />
      <Footer />
    </div>
  );
}
