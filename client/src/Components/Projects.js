import React, {useEffect, useState} from 'react'
import { VscGithub } from "react-icons/vsc";

function Projects() {
    const [projects, setProjects] = useState();
    const [toggle, setToggle] = useState({});

    useEffect(()=>{
        fetch("/projects")
        .then(r => r.json())
        .then(setProjects)
      }, [])
      
    function handleToggleClick(index){
      setToggle((toggle) => !toggle)
    }
      
  return (
    <div id="projects">
      <h1>My Projects</h1>
        {
        projects?.map(project => {
            return (
              <div key={project.id} className="project-display">
                <div className="project-details">
                  <h2>{project.name}</h2>
                  <h3>{project.tag_line}</h3>
                  <p>{project.description}</p>
                  <a href={project.github_link} target="_blank" rel="noreferrer"><VscGithub /></a> 
                  <p><strong>Tech Stack Used: </strong> {project.technologies}</p>
                </div> 
                <div className="project-image">
                  <iframe onClick={handleToggleClick} src={project.demo_link} title="{project.name} demo video" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen/>
                </div>
           </div>
            )
        })
        }
    </div>
  )
}

export default Projects