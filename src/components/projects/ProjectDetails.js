import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-o">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>ihefoihwv;knwefoi e0f [e09fuaw[oeif joweifaoweifh weiheoie;oif weio kv er rejkerg jge ngr jkergj kbreg jkr jkregj efj ewf j </p>
        </div>
        <div className="card-action grey lighten-4 grey.text">
          <div>Posted by Zoe</div>
          <div>23rd March</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
