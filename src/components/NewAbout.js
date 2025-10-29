export default function NewAbout() {
  return (
    <section
      id="about"
      className="text-[#05386b] bg-[#fdfffa] py-16 px-12 lg:px-24 scroll-mt-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
          <img
            src="./headshot.jpeg"
            alt="Emma headshot"
            className="w-full md:w-80 h-auto object-cover"
          />
        </div>

        <div className="flex flex-col justify-center space-y-4 text-center md:text-left max-w-2xl">
          <h1 className="title-font text-5xl lg:text-6xl font-semibold mb-2">
            Hi! I'm Emma,
          </h1>

          <p className="text-2xl lg:text-3xl text-[#05386b]/90">
            a software engineer focused on building accessible, beautiful
            interfaces.
          </p>

          <p className="text-lg leading-relaxed">
            I currently build React web apps at the{" "}
            <a
              href="https://nypl.org"
              className="text-[#3c8f7e] underline hover:text-[#2c7a6b]"
            >
              New York Public Library
            </a>
            . I graduated from Northwestern University in 2023 after completing
            SWE internships at the{" "}
            <a
              href="https://newyorker.com"
              className="text-[#3c8f7e] underline hover:text-[#2c7a6b]"
            >
              New Yorker
            </a>{" "}
            and{" "}
            <a
              href="https://www.fusestudio.net/"
              className="text-[#3c8f7e] underline hover:text-[#2c7a6b]"
            >
              FUSE STEM Labs
            </a>
            .
          </p>

          <p className="text-lg leading-relaxed">
            I'm always interested in work that contributes to sustainability,
            equity, or education.
          </p>

          <p className="title-font text-xl">
            Get in touch 👉{" "}
            <a
              className="text-[#3c8f7e] underline hover:text-[#2c7a6b]"
              href="mailto:emilyjmansell@gmail.com"
            >
              emilyjmansell@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
