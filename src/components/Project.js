import React from "react";
import PropTypes from "prop-types";
import ScrollReveal from "scrollreveal";

function Project(props) {
  return (
    <div className="col-lg-4 project">
      <div className="card card-s animate__animated animate__headShake">
        <a href={props.deployedLink} target="_blank" rel="noreferrer">
          {" "}
          <img
            className="ci"
            src={props.img}
            // onMouseOver={(e) => (e.currentTarget.src = props.imgGit)}
            // onMouseOut={(e) => (e.currentTarget.src = props.img)}
            alt={props.imgAlt}
          />
        </a>
        <div className="card-body">
          <h3 className="card-title text-center">
            <a href={props.deployedLink} target="_blank" rel="noreferrer">
              {props.projectName}
            </a>
          </h3>
          <h5 className="card-text">Description:</h5>
          <p className="card-text">{props.description}</p>
          <h5 className="card-text">Technologies Used:</h5>
          <ul className="card-text techList">
            {props.technologies.map((technology, i) => {
              return (
                <li key={i}>
                  <a href={technology.link} target="_blank" rel="noreferrer">
                    {technology.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="card-footer text-center">
            <a href={props.gitRepo} target="_blank" rel="noreferrer">
              GitHub repository
            </a>
          </p>
        </div>
      </div>
      {ScrollReveal().reveal(".project", {
        delay: 200,
        distance: "50px",
        duration: 600,
        useDelay: "once",
        reset: true,
      })}

      {/* {ScrollReveal().reveal(".card-body", {
        delay: 250,
        interval: 0,
        reset: true,
      })} */}
    </div>
  );
}

Project.propTypes = {
  deployedLink: PropTypes.string,
  projectName: PropTypes.string,
};

export default Project;
