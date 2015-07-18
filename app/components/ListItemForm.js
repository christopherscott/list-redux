import React from 'react';

export default class ListItemForm extends React.Component {

  static propTypes = {
    item: React.PropTypes.object.isRequired,
    updateItem: React.PropTypes.func.isRequired,
    toggleEdit: React.PropTypes.func
  };

  static defaultProps = {
    toggleEdit: () => {}
  };

  state = { text: '' };

  handleChange = (evt) => {
    this.setState({ text: evt.target.value });
  }

  handleSave = (evt) => {
    evt.preventDefault();
    this.props.updateItem(this.props.item.id, this.state.text);
    this.props.toggleEdit();
  }

  render () {
    const { item } = this.props;

    return (
      <form onSubmit={this.handleSave}>
        <input
          type="text"
          defaultValue={item.text}
          onChange={this.handleChange} />
        <button>save</button>
      </form>
    );
  }

}
