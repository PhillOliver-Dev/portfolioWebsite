const githubUserName = "PhillOliver-Dev";

const getGithubURL = () => {
  return "https://api.github.com/users/" + githubUserName + "/repos";
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
