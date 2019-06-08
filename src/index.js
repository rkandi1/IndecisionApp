import React from "react";
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Action from './components/Action';
import Header from "./components/Header";
import Options from "./components/Options";
import OptionalModal from "./components/OptionModal";
import "normalize.css/normalize.css"
import "../styles/style.scss";

console.log("The App is Running!");

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      optionSelected: undefined
    }
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.pickOne = this.pickOne.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.handleRemoveModal = this.handleRemoveModal.bind(this);
  }

  componentDidMount() {
    try{
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if(options) {
        this.setState(() => ({"options": options}));
      }
    } catch (e) {
      // Do nothing if the JSON.parse does not work.
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length != this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  handleRemoveAll(e) {
    e.preventDefault();
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleRemoveOption(optionToRemove) {
    this.setState((prevState) => ({
      options: this.state.options.filter((option) => optionToRemove != option)
    }));
  }

  handleAddOption(option) {
    if(!option) {
      return "Enter a valid value in the box.";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This value already exists.";
    }
    else if(option.charCodeAt(0)<65 || option.charCodeAt(0)>91) {
      return "First alphabet has to be a captial word."
    }
    this.setState((prevState) => {
      return {options: prevState.options.concat(option)};
    });
  }

  handleRemoveModal(e) {
    e.preventDefault();
    this.setState(() => ({optionSelected: undefined}));
  }

  pickOne(e) {
    e.preventDefault();

    const rand = Math.floor(Math.random()*this.state.options.length);
    this.setState(() => ({optionSelected: this.state.options[rand]}));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Action
          hasOptions={this.state.options.length>0}
          pickOne = {this.pickOne}
          />
          <br/>
          <br/>
          <div className="widget">
            <Options
            currOptions={this.state.options}
            handleRemoveOption={this.handleRemoveOption}
            />
            <AddOption
            handleRemove={this.handleRemoveAll}
            addOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionalModal
        optionSelected={this.state.optionSelected}
        closeModal={this.handleRemoveModal}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
