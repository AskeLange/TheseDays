

import React from 'react';
import View from '../view';

export default class ProductBacklog
  extends React.Component {

    // #region Initilization
  
    constructor(props) {
      super(props);
      this.params = {
        label : 'Product Backlog',
        icon : 'icon-log',
        iconViewbox : '0 0 24 24',
      };
    }
  
    // #endregion
  
    // #region Renders
  
    render() {
      return (
        <View identifier="pbacklog" params={this.params} store={this.props.store}>
          <div className="pbacklog-inner">
            <div style={{ height: '100vh' }}></div>
          </div>
        </View>
      );
    }
  
    // #endregion
  
  
}