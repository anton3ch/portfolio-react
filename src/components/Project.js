import React from "react";
import PropTypes from "prop-types";


function Project(props) {
  return(
    <div className="col-md-4 project">
      <div className="card card-s animate__animated animate__headShake">
        <div className="card-body">
          <h3 className="card-title text-center"><a href={props.deployedLink} target="_blank" rel="noreferrer">{props.projectName}</a></h3>
          <a href={props.deployedLink} target="_blank" rel="noreferrer"> <img className="card-img ci" src={props.img} onMouseOver={e => (e.currentTarget.src = props.imgGit)} onMouseOut={e => (e.currentTarget.src = props.img)} border="0" alt={props.imgAlt} /></a>
          <h5 className="card-text">Description:</h5>
          <p className="card-text">{props.description}</p>
          <h5 className="card-text">Technologies Used:</h5>
          <ul className="card-text">
          {props.technologies.map((technology, i) => {   
            return (<li key={i}><a href={technology.link} target="_blank" rel="noreferrer">{technology.name}</a></li>) 
          })}
          </ul>
          <p className="card-footer text-center"><a href={props.gitRepo} target="_blank" rel="noreferrer">github repository</a></p>
        </div>
      </div>
    </div>


);
}

Project.propTypes = {
  deployedLink: PropTypes.string,
  projectName: PropTypes.string
};

export default Project;