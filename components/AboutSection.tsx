import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Sass" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Express.js" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Node.js" },
  { skill: "SQL" },
  { skill: "NoSQL" },
  { skill: "PHP" },
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
              Hi, my name is Daniel and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> web developer
              from Málaga, spain.
            </p>
            <br />
            <p>
            I am studying my last year of higher degree in computer
            science. I love everything related to Frontend and 
            Backend, and in the future I would like to work on Fullstack.
            </p>
            <br />
            <p>
            I have a wide range of hobbies and passions that keep me 
            busy. From reading, playing sports, traveling to doing new 
            programming projects, I am always looking for new 
            experiences and love to stay involved and learn new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and
              always open to new opportunities. 🙂
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
