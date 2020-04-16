import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./App.css";

const postQuery = gql`
  query {
    post @rest(type: "POSTS", path: "posts/1") {
      title
    }
  }
`;
function App() {
  return (
    <Query query={postQuery}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error Message: ${error.message}`;
        if (data) {
          return (
            <div className="App">
              <h1>Post Detail</h1>
              <p>{data.post.title}</p>
            </div>
          );
        }
      }}
    </Query>
  );
}

export default App;
