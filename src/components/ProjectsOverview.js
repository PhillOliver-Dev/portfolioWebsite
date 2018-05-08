import React, { Component } from "react";
import { CircularProgress } from "material-ui/Progress";
import Card, { CardContent, CardHeader } from "material-ui/Card";
import Typography from "material-ui/Typography";
import { Pie } from "react-chartjs";
import { styles } from "../styles/components/ProjectsOverview.style";

import ComputerIcon from "material-ui-icons/Computer";

const numToBytes = bytes => {
  const logBytes = Math.floor(Math.log(bytes) / Math.log(1024));
  const bitMajor = logBytes > 0 ? 1024 * logBytes : 1;
  const suffix = ["B", "KB", "MB", "GB", "TB"];
  return Math.floor(bytes / bitMajor) + suffix[logBytes];
};

class ProjectsOverview extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      projectURLs: [],
      languages: {}
    };
  }

  componentDidMount() {
    fetch(this.props.repoUrl)
      .then(res => res.json())
      .then(out => {
        this.setState({
          projectURLs: out
        });
        this.calculateLanguageUse(out);
      });
  }

  calculateLanguageUse = repos => {
    const languages = {};
    repos.forEach(repo => {
      fetch(repo.languages_url)
        .then(res => res.json())
        .then(out => {
          Object.keys(out).forEach(language => {
            if (languages[language]) {
              languages[language] += out[language];
            } else {
              languages[language] = out[language];
            }
          });
          this.setState({
            languages,
            isLoading: false
          });
        });
    });
  };

  convertLanguageToDataSchema = languages => {
    const data = [];
    const intervals = Object.keys(languages).length;
    Object.keys(languages).forEach((l, index) => {
      const blueAdjust = 255 / intervals * index;
      data.push({
        value: languages[l],
        label: l,
        color: "#00AA" + Math.floor(255 - blueAdjust).toString(16)
      });
    });
    return data;
  };

  render() {
    const width =
      window.screen.availWidth - 100 > styles.graph.width
        ? styles.graph.width
        : window.screen.availWidth - 100;
    return (
      <div className="AppCard">
        {this.state.isLoading ? (
          <CircularProgress className="Progress" />
        ) : (
          <div>
            <Card>
              <CardHeader
                avatar={<ComputerIcon />}
                title={
                  <Typography variant="headline" component="h1">
                    {"User Overview"}
                  </Typography>
                }
                subheader={
                  <Typography variant="subheading" component="h3">
                    {"Taken from user's github projects"}
                  </Typography>
                }
              />
              <CardContent>
                <div style={styles.graphContainer}>
                  <Pie
                    data={this.convertLanguageToDataSchema(
                      this.state.languages
                    )}
                    options={{
                      tooltipTemplate: function(d) {
                        return d.label + ": " + numToBytes(d.value);
                      }
                    }}
                    width={width}
                    height={styles.graph.height}
                  />
                  <Typography variant="subheading" component="h3">
                    {"Language Usage Across Projects"}
                  </Typography>
                  <hr />
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  }
}

export default ProjectsOverview;
