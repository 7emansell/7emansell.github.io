export default function NewAbout() {
  return (
    <section
      id="about"
      className="text-[#05386b] bg-[#fdfffa] py-10 body-font scroll-mt-20"
    >
      <div className="flex flex-col">
        <h1 className="title-font text-6xl lg:text-7xl mb-4 font-medium">
          Hi! I'm Emma,
        </h1>
        <p className="title-font text-2xl lg:text-4xl">
          a software engineer focused on building accessible, beautiful
          interfaces.
        </p>
        <p className="text-lg">
          I'm a full stack engineer, building Next.js websites at the{" "}
          <a href="https://nypl.org" className="text-[#3c8f7e] underline">
            New York Public Library
          </a>
          . I graduated from Northwestern University in 2023 after completing
          SWE internships at the{" "}
          <a href="https://newyorker.com" className="text-[#3c8f7e] underline">
            New Yorker
          </a>{" "}
          and{" "}
          <a
            href="https://www.fusestudio.net/"
            className="text-[#3c8f7e] underline"
          >
            FUSE STEM Labs
          </a>
          .
        </p>
        <p className="text-lg">
          I'm always interested in work that contributes to sustainability,
          equity, or education.
        </p>
        <p className="text-lg">
          {" "}
          Email me at{" "}
          <a
            className="text-[#3c8f7e] underline"
            href="mailto:emilyjmansell@gmail.com"
          >
            emilyjmansell@gmail.com
          </a>{" "}
          or drop me a message on{" "}
          <a
            className="text-[#3c8f7e] underline"
            href="https://www.linkedin.com/in/emmamansell/"
          >
            Linkedin
          </a>
          !
        </p>
      </div>
    </section>
  );
}
