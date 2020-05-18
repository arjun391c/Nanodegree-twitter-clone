import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import LoadingBar from "react-redux-loading";
import TweetInfo from "./TweetInfo";

import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <React.Fragment>
        <LoadingBar />
        <div className="container">
          <Nav />
          {this.props.loading === true ? null : (
            <div>
              <Route exact path="/" component={Dashboard} />
              <Route path="/new" component={NewTweet} />
              <Route path="/tweet/:id" component={TweetInfo} />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    loading: authUser === null,
  };
}

export default connect(mapStateToProps)(App);
