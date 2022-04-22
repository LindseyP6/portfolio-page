import React, {useEffect, useState} from 'react'

function Projects() {
    const [projects, setProjects] = useState();

    useEffect(()=>{
        fetch("/projects")
        .then(r => r.json())
        .then(setProjects)
      }, [])
      
       
  return (
    <div className="projects-main">
        <ul>
        {
        projects?.map(project => {
            return (
                <div key={project.id}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
           </div>
            )
        })
        }
        </ul>
    </div>
  )
}

export default Projects