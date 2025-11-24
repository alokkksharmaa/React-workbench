import React,{ Component } from "react";
class Lifecycle extends Component {
  constructor(props) { super(props);this.state = { count: 0};
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
  }// updating counter value
  increase = () => {this.setState({ count: this.state.count + 1 });};
  decrement = () =>{this.setState({ count:this.state.count -1});};
 render() {
    console.log("Render: Component Rendering");
    return (<div><h2>Lifecycle of Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increase Count</button>
         <button onClick={this.decrement}>decrement Count</button>
      </div>);}}
export default Lifecycle;