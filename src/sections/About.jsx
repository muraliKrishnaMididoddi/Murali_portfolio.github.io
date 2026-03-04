import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef(null);

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="relative flex items-end grid-default-color grid-1 overflow-hidden">
          <img
            src="./assets/coding-pov.png"
            alt="Coding workspace"
            className="absolute scale-[1.6] -right-[4rem] -top-[1rem] md:scale-[2.6] md:left-50 md:inset-y-10 lg:scale-[2.2]"
          />

          <div className="z-10">
            <p className="headtext">Hi, I’m Murali Krishna Mididoddi</p>
            <p className="subtext">
              I’m a Data Engineer / Analytics & GenAI professional with 2+ years of experience
              building AWS-based data pipelines, real-time dashboards, and NLP/LLM-powered insights.
              I focus on turning messy data into reliable products that stakeholders actually use.
            </p>

            <p className="subtext mt-3">
              Currently open to Data Engineer / Data Analyst / Analytics Engineer opportunities (US or Remote).
            </p>
          </div>

          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="relative grid-default-color grid-2 overflow-hidden">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-4xl md:text-5xl text-gray-500 tracking-wide">
              DATA → INSIGHTS → IMPACT
            </p>

            {/* Core stack cards */}
            <Card
              style={{ rotate: "70deg", top: "18%", left: "18%" }}
              text="Python"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "58%", left: "48%" }}
              text="SQL"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "12%", left: "52%" }}
              text="AWS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-40deg", top: "62%", left: "10%" }}
              text="ETL / ELT"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", top: "70%", left: "72%" }}
              text="Power BI"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", top: "38%", left: "72%" }}
              text="GenAI / NLP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "95deg", top: "40%", left: "28%" }}
              text="Streaming"
              containerRef={grid2Container}
            />

            {/* Dev stack logos (keep if these are truly part of your portfolio) */}
            <Card
              style={{ rotate: "30deg", top: "78%", left: "55%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-35deg", top: "76%", left: "30%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "8%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="relative grid-black-color grid-3 overflow-hidden">
          <div className="z-10 w-[60%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Based in the US (Eastern Time). Open to remote roles and global collaboration.
            </p>
          </div>

          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Want to collaborate or discuss a role?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="relative grid-default-color grid-5 overflow-hidden">
          <div className="z-10 w-[60%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              End-to-end data & AI delivery: ingestion → transformation → warehousing → dashboards → LLM-powered experiences.
              I build solutions that are scalable, monitored, and production-ready.
            </p>
          </div>

          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
