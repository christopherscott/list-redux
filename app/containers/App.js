import React from 'react';
import ListManager from './ListManager';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import ListStore from '../stores/List';

// i think this syntax is correct, you give redux
// an object of name -> store entries
const redux = createRedux({
  'ListStore': ListStore
});

export default class App extends React.Component {
  render () {
    return (
      /*
        Not sure why the children to 'provider' need to be
        functions that return elements, maybe to provide more
        flexibility. TODO: look into further.
       */

      // have to provide the provider with redux
      <Provider redux={redux}>
        {() => <ListManager />}
      </Provider>
    );
  }
}
