import React from 'react';
import ListItem from './ListItem';

export class ListView extends React.Component {

  static propTypes = {
    list: React.PropTypes.array.isRequired,
    updateItem: React.PropTypes.func.isRequired,
    deleteItem: React.PropTypes.func.isRequired
  };

  render () {
    const { list, item } = this.props;

    return (
      <div>
        {list.length ?
          <ul>
            {list.map(item => (
              <ListItem item={item} {...this.props} />
            ))}
          </ul>
        : null}
      </div>
    );
  }

}

export default ListView;
