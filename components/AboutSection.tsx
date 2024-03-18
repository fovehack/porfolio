import React from "react"
import Image from "next/image"

const skills = [
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Angular" },
  { skill: "Refine" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Node.js" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Docker" },
  { skill: "SQL" },
  { skill: "NoSQL" },
  { skill: "PHP" },
  { skill: "AWS" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Welcome! I'm Daniel, a{" "}
              <span className="font-bold text-teal-500">{"very ambitious"}</span> and
              <span className="font-bold text-teal-500">{" driven"}</span> Fullstack Web Developer with
              <span className="font-bold text-teal-500">{" 2 years"}</span> of experience based in Málaga, Spain.
            </p>
            <br />
            <p>
            Beyond my professional endeavors, I am motivated by a wide range of interests and passions. Whether immersing myself in literature, staying active through sports, exploring new destinations, or participating in programming projects, I constantly seek opportunities for growth and enrichment.
            </p>
            <br />
            <p>
            Driven by an unwavering commitment to personal and professional development, I firmly believe in the relentless pursuit of knowledge and innovation. With an unwavering passion for technology, I am dedicated to pushing the boundaries of what can be achieved in the digital realm.
            </p>
            <br />
            <p>
            I am eager to continue evolving my career and excited to explore new avenues of growth and opportunities. Don't hesitate to contact me, I am always open to new connections and collaborations.
            </p>
            <br />
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Contact me!
            </h1>
            <p>
            <span className="font-bold text-teal-500">
              ✉️ danielgonzalez.infoo@gmail.com
              <br />
              📱 +34 656 61 18 15
              </span>{" "}
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <button
                    key={idx}
                    className="bg-gray-200 mr-2 mt-2 text-gray-500  font-semibold flex items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3 rounded-md hover:bg-teal-500 hover:text-gray-200 transition cursor-pointer"
                  >
                    {item.skill}
                  </button>
                )
              })}
            </div>
            <Image
              src="/pc.webp"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
