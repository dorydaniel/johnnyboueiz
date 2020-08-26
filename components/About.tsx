const About: React.SFC = () => {
  return (
    <div className="mt-16 mb-24" style={{ textShadow: "2px 2px #000000" }}>
      <div className="m-auto" style={{ width: "200px", height: "200px" }}>
        <img
          src="/images/johnnyboueiz.jpg"
          alt="Johnny Boueiz"
          className="rounded-full"
        />
      </div>
      <div className="w-10/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-8/12 m-auto mt-8 text-center text-yellowor text-sm sm:text-sm md:text-lg lg:text-2xl xl:text-2xl">
        <p>
          I am a 28 year old Lebanese citizen holding a Masters Degree in
          Agricultural Engineering (April 2016) from the prestigious University
          of Holy Spirit in Lebanon.
          <br />
          My professors, employers and family, can attest to my great work
          ethic. I'm an Energetic, hardworking agricultural specialist who has a
          passion for landscaping. Currently living in Lebanon,seeking an
          appropriate opportunity with a reputable employer whether in my
          country or not and that helps me to improve my skills and my career.
          <br />
          My enclosed resume provides additional details about my work history
          and education. Please do not hesitate to contact me if you have any
          questions, comments or suggestions.
        </p>
      </div>
    </div>
  );
};

export default About;
