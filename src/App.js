import React from "react";
import "./App.css";
import { connect } from "react-redux";
import MiddlewareExample from "./MiddlewareExample";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>
          {" "}
          <div>
            Age:<span>{this.props.age}</span>
          </div>
        </h1>
        <button onClick={() => this.props.onAgeUp()}>Age Up</button>
        <button onClick={() => this.props.onAgeDown()}>Age Down</button>
        <div style={{ margin: "50px" }}>
          <MiddlewareExample />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.reducerAge.age,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: "Age_Up" }),
    onAgeDown: () => dispatch({ type: "Age_Down" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
