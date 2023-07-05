import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hey Dear,
            <br />
            I'm KingDavid.
          </motion.span>
          <motion.span className="secondaryText"variants={fadeIn("left", "tween", 0.4, 1)}>
          A software developer with expertise in HTML, CSS, JavaScript, React.js, Next.js, Node.js, MongoDB, Java, WordPress, Figma, Dart, and Flutter. My specialization lies in creating cross-platform and cross-browser compatible React applications, as well as utilizing CSS and HTML to design interfaces that are user-friendly, visually appealing, and responsive. My ultimate goal is to ensure the usability and pleasant experience of as many users as possible. I am also a fast learner who is always eager to learn new technologies and frameworks.
            <br />
          </motion.span>
          {/* <br />
          <br/>
            <br /> */}
            {/* <br /> */}
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:abutankokingdavid@icloud.com">
          abutankokingdavid@icloud.com
        </a>

        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
            <div className="primaryText">3</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>PROFESSIONAL</span>
            <span>WEB AND MOBILE DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
