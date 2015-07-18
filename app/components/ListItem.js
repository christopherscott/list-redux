import React from 'react';
import ListItemForm from './ListItemForm';

export default class ListItem extends React.Component {

  static propTypes = {
    item: React.PropTypes.object.isRequired,
    updateItem: React.PropTypes.func.isRequired,
    deleteItem: React.PropTypes.func.isRequired
  };

  state = { editing: false };

  handleDelete = () => {
    this.props.deleteItem(this.props.item.id);
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  render () {
    const { item } = this.props;

    return (
      <li>
        {this.state.editing ?
          <ListItemForm
            item={item}
            toggleEdit={this.toggleEdit}
            {...this.props} />
          : item.text }
        <button onClick={this.handleDelete}>delete</button>
        <button onClick={this.toggleEdit}>edit</button>
      </li>
    );
  }

}
