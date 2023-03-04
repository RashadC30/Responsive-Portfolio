import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-rubik font-semibold text-4xl mb-5">
            My <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            A skilled programmer with a passion for bringing projects from
            conception to existence. With a well-rounded background in HTML
            JavaScript for frontend along with Node and React for backend web
            development and C# coding for applications and video games. Thanks
            to my background I have the ability to adapt my skills within a team
            that allows me to blend and connect with anyone.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left10 
                    before:w-full before:h-full before:border-2 before:border-teal before:z-[-1]"
            >
              <img
                src="assets/skills-image.png"
                className="z-10"
                alt="skills"
              />
            </div>
          ) : (
            <img src="assets/skills-image.png" className="z-10" alt="skills" />
          )}
        </div>
      </div>
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Experience */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-rubik font-semibold text-5xl">01</p>
              <p className="font-rubik font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-teal absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 ">Insert professional experience here</p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-rubik font-semibold text-5xl">02</p>
              <p className="font-rubik font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-navy absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
            fugit dignissimos mollitia dolorem reprehenderit. Repellat maxime
            doloremque, neque cumque optio officia commodi corrupti rerum
            expedita nobis vitae natus autem harum velit quia!
          </p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-rubik font-semibold text-5xl">03</p>
              <p className="font-rubik font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            excepturi at deserunt mollitia, facere voluptatem voluptas! In
            distinctio minus consequuntur atque? Esse, laboriosam totam quam
            libero vitae dolor possimus omnis?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
