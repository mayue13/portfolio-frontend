import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import  ReactTooltip from 'react-tooltip';

import './Skills.scss'
import { AppWrap } from "../../wrapper/index";
import { urlFor, client } from "../../client";

 function Skills() {

    const [skills, setSkills] = useState([]);
    const [experience, setexperience] = useState([])

  useEffect(() => {
    const expQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
   
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
     
    });

    client.fetch(expQuery).then((data) => {
      setexperience(data);     
    });

  }, []);

  return (
    <>
      <h2 className="head-text">Skills <span>&</span> Experience</h2>

      <div className="app__skills-container">
         <motion.div className="app__skills-list">

          {skills.map((skill) => (
            <motion.div
             whileInView={{opacity:[0,1]}}
             transition={{duration:0.5}}
             className="app__skills-item app__flex"
             key={skill.name}
            >
               <div className="app__flex" style={{backgraoundColor:skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name}/>
               </div>

               <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
         </motion.div>

      </div>
    </>
  )
}

export default AppWrap(Skills,'skills')
