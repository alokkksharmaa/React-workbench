import React,{ Component } from "react";
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log("Constructor: Component Created");
  }// MOUNTING
  componentDidMount() {
    console.log("componentDidMount: Component Mounted");
  }// UPDATING
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component Updated");
    console.log("Previous Count:", prevState.count);
  }// UNMOUNTING
  componentWillUnmount() {
    console.log("componentWillUnmount: Component Will Unmount");
  }
//   increase = () => {this.setState({ count: this.state.count + 1 });};
//   decrease = () => {this.setState({ count: this.state.count - 1 });};
  render() {
    console.log("Render: Component Rendering");
    return (
      <div>
        <h2>Lifecycle Component</h2>
        <p>Count: {this.state.count}</p>
        {/* <button onClick={this.increase}>Increase Count</button> */}
        {/* <button onClick={this.decrease}>Decrease Count</button> */}
      </div>
    );
  }
}
export default LifeCycle;