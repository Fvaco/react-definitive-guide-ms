import React, { Component } from "react";

class Course extends Component {
  state = {
    title: ""
  };

  componentDidMount() {
    this.parseQueryString();
  }
  componentDidUpdate() {
    this.parseQueryString();
  }
  parseQueryString = () => {
    const query = new URLSearchParams(this.props.location.search);
    const title = query.get("title");
    this.setState(prevState => {
      if (prevState.title !== title) {
        return {
          title
        };
      }
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
