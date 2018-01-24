const githubUserName = "philloliver-dev";

const getGithubURL = suffix => {
  return "https://api.github.com/users/" + githubUserName + (suffix || "");
};

module.exports = {
  getGithubURL
};
