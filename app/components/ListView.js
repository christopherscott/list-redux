import React from 'react';

export class ListItem extends React.Component {

  state = { editing: false };

  handleDelete = () => {
    this.props.delete(this.props.item.id);
  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  render () {
    const { item } = this.props;
    return (
      <h1>
        {this.state.editing ?
          <ListItemForm item={item} toggleEdit={this.toggleEdit} {...this.props} />
          : item.text
        }
        <button onClick={this.handleDelete}>delete</button>
        <button onClick={this.toggleEdit}>edit</button>
      </h1>
    );
  }

}

export class ListItemForm extends React.Component {

  state = { text: '' }

  handleChange = (evt) => {
    this.setState({ text: evt.target.value });
  }

  handleSave = (evt) => {
    evt.preventDefault();
    this.props.update(this.props.item.id, this.state.text);
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

export class ListView extends React.Component {

  render () {
    const { list, item } = this.props;

    return (
      <div>
        {list.length ?
          <div>
            {list.map(item => (
              <ListItem item={item} {...this.props} />
            ))}
          </div>
        : null}
      </div>
    );
  }

}

export default ListView;
