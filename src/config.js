const githubUserName = "PhillOliver-Dev";

const getGithubURL = () => {
  return "https://api.github.com/users/" + githubUserName + "/repos";
};

module.exports = {
  getGithubURL
};
