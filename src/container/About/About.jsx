import React from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { images } from "../../constants";

const abouts = [
  {
    title: "Software Developer",
    description: "I am good Software Developer",
    imgURL: images.about01,
  },
  {
    title: "FullStack Developer",
    description: "I am good FullStack Developer",
    imgURL: images.about02,
  },
  {
    title: "Azure Developer",
    description: "I am good Azure Developer",
    imgURL: images.about03,
  },
];

export default function About() {
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Design</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="bold-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
