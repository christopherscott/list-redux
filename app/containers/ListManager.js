import React from 'react';
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux';
import ListView from '../components/ListView';
import * as ListActions from '../actions/ListActions';

// decorating this class to recieve 'list' as props,
// from the overall redux dispatcher/store
@connect(state => ({
  // so, state is like a huge global tree of state, where the
  // registered stores are named according to however redux
  // was setup in the first place
  list: state.ListStore
}))
export default class ListManager extends React.Component {

  handleSave = (evt) => {
    const input = this.refs.newItemInput.getDOMNode();
    evt.preventDefault();
    this.props.dispatch(ListActions.addItem(input.value));
    input.value = '';
  }

  handleDelete = (id) => {
    const deleteAction = ListActions.deleteItem(id);
    this.props.dispatch(deleteAction);
  }

  handleUpdate = (id, text) => {
    const action = ListActions.updateItem(id, text);
    this.props.dispatch(action);
  }

  render () {
    const { list, dispatch } = this.props;
    console.log('list manager', this.props);

    return (
      <div>
        <h2>List manager</h2>
        <ListView list={list} {...bindActionCreators(ListActions, dispatch)} />
        <form onSubmit={this.handleSave}>
          <input type="text" placeholder="item text" ref="newItemInput" />
          <button>save</button>
        </form>
      </div>
    );
  }

}
