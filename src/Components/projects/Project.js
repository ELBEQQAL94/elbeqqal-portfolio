import React from "react";

const Project = ({ bg, previewLink, githubLink }) => (
  <>
    <div className="project_item" style={{background: `url(${bg})`}}/>
    <div className="project_view">
      <button>
        <a href={previewLink} target="_blank">
          preview
        </a>
      </button>
      <button>
        <a href={githubLink} target="_blank">
          github
        </a>
      </button>
    </div>
  </>
);

export default Project;
