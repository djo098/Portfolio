import React, { useEffect, useState } from "react";
import { ReactComponent as LineSvg } from "../images/50px line.svg";
import "../styles/Projects.scss";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

const Projetos = () => {
  const [user, setUser] = useState([]);

  const fetchRepos = () => {
    fetch(`https://api.github.com/users/djo098/repos`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const userElements = user.map((userElement) => {
    return (
      <div className="repo-card" key={userElement.id}>
        <p className="repo-name">{userElement.name}</p>
        <p className="description">{userElement.description}</p>
        <Stack direction="row" spacing={2}>
            <Button className="mui-button" href={userElement.html_url} target="_blank" rel="noreferrer">
                <GitHubIcon />
            </Button>
            <Button className="mui-button disabled" disabled href={userElement.html_url} target="_blank" rel="noreferrer">
                <OpenInNewRoundedIcon />
            </Button>
        </Stack>
      </div>
    );
  });

  return (
    <div className="projects">
      <div className="container">
        <div className="header">
          <LineSvg className="Svg1" /> <h1>&#60;Projetos /&#62;</h1>
        </div>
        {userElements}
      </div>
    </div>
  );
};

export default Projetos;
