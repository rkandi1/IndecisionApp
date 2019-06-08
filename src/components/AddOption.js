import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error:undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.addOptions.value.trim();
    const error = this.props.addOption(option);
    e.target.elements.addOptions.value = '';

    this.setState(() => ({error: error}));
  }

  render() {
    return(
      <div>
        <button
        className="button button--link add-option__remove-all"
        onClick={this.props.handleRemove}
        >
        Remove All
        </button>
        <br/>
        <br/>
        {this.state.error && <p>{this.state.error}</p>}
        <form
        className="add-option"
        onSubmit={this.handleAddOption}>
          <input type="text" name="addOptions" className="add-option__input"/>
          <button className="button"> Add Task </button>
        </form>
      </div>
    )
  }
}
