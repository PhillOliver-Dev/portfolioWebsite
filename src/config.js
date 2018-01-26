const githubUserName = "philloliver-dev";

const getGithubURL = suffix => {
  return "https://api.github.com/users/" + githubUserName + (suffix || "");
};

const getReadMeUrl = project => {
  return (
    "https://raw.githubusercontent.com/PhillOliver-Dev/" +
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
  getGithubURL,
  getReadMeUrl,
  navBarLinks
};
