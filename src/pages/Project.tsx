import React from 'react'
import ProjectBeginning from '../components/projectComponents/projectBeginning'
import ProjectOutro from '../components/projectComponents/ProjectOutro'

function Project() {
  return (
    <div className="mt-28 px-3 sm:px-0 flex flex-col items-center justify-center gap-y-6 w-full mx-auto">
      <ProjectBeginning />
      <ProjectOutro />
    </div>
  )
}

export default Project