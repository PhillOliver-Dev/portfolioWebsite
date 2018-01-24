const githubUserName = "philloliver-dev";

const getGithubURL = suffix => {
  return "https://api.github.com/users/" + githubUserName + (suffix || "");
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
  navBarLinks
};
