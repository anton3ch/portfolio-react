import React from "react";
import PropTypes from "prop-types";

function Project(props) {
  return (
    <div className="col-lg-4 project">
      <div className="card card-s">
        <img
          className="ci"
          src={props.img}
          alt={props.imgAlt}
        />
        <div className="card-body">
          <h3 className="card-title text-center">
            <a href={props.deployedLink} target="_blank" rel="noreferrer">
              {props.projectName}
            </a>
          </h3>
          {/* <h5 className="card-text">Description:</h5> */}
          <p className="card-text">{props.description}</p>
          <h5 className="card-text">Technologies Used:</h5>
          <div className="card-text techList">
            {props.technologies.map((technology, i) => {
              return (

                  <a href={technology.link} target="_blank" rel="noreferrer" className="mainProjectTech">
                    {technology.name}
                  </a>

              );
            })}
          </div>
          <p className="card-footer text-center">
            {props.gitRepo && (
              <a href={props.gitRepo} target="_blank" rel="noreferrer">
                GitHub repository
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  deployedLink: PropTypes.string,
  projectName: PropTypes.string,
};

export default Project;
