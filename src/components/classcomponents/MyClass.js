import React, { Component } from "react";

export class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "kiran", age: 25 };
  }

  componentDidMount() {
    //on load
    //db connection
    alert("hello");
  }

  componentDidUpdate() {
    //execute on any state update
    alert(JSON.stringify(this.state));
  }

  componentWillUnmount() {
    //close future executing enets
  }
  render() {
    return (
      <div>
        <br />
        {this.state.name}
        <br />
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        ></input>

        <input
          value={this.state.age}
          onChange={(e) => this.setState({ age: e.target.value })}
        ></input>
        <button onClick={() => alert(JSON.stringify(this.state))}>
          Click Me
        </button>
        <p>
          {this.state.name}
          {this.state.age}
        </p>
      </div>
    );
  }
}

export default MyClass;
