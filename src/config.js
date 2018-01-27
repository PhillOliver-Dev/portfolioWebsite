const githubUserName = "philloliver-dev";

const getURL = suffix => {
  return "https://github.com/" + (suffix || githubUserName);
};

const getGithubURL = suffix => {
  return "https://api.github.com/users/" + githubUserName + (suffix || "");
};

const getReadMeUrl = project => {
  return (
    "https://raw.githubusercontent.com/" +
    githubUserName +
    "/" +
    project +
    "/master/README.md"
  );
};

const navBarLinks = {
  Home: {
    link: "/"
  },
  Projects: {
    link: "projects"
  },
  Contact: {
    link: "contact"
  }
};

module.exports = {
  getURL,
  getGithubURL,
  getReadMeUrl,
  navBarLinks
};
