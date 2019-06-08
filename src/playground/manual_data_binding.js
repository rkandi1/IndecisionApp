class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.count};
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {count: prevState.count+1};
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return {count: prevState.count-1};
    });
  }

  handleReset() {
    this.setState(() => {
      return {count: 0};
    });
    // The set state used above can be done asynchronously by only passing in the new state.
    // However if we need to use the previously updated state, that might pull a wrong value.
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter />, document.getElementById("app"));

// let count = 0;
// const addOne = () => {
//   count++;
//   templateRenderer();
// };
// const minusOne = () => {
//   count--;
//   templateRenderer();
// };
// const reset = () => {
//   count = 0;
//   templateRenderer();
// };
//
//
// const templateRenderer = () => {
//   const templateTwo = (
//     <div>
//       <h1> Count: {count} </h1>
//       <button onClick={addOne}> +1 </button>
//       <button onClick={minusOne}> -1 </button>
//       <button onClick={reset}> reset </button>
//     </div>
//   );
//
//   ReactDOM.render(templateTwo, appRoot);
// };
