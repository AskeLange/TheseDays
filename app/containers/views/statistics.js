

import React from 'react';
import View from '../view';

export default class Statistics
  extends React.Component {

    // #region Initilization
  
    constructor(props) {
      super(props);
      this.params = {
        label : 'Statistics',
        icon : 'icon-chart',
        iconViewbox : '0 0 24 24',
      };
    }
  
    // #endregion
  
    // #region Renders
  
    render() {
      return (
        <View identifier="stats" params={this.params} store={this.props.store}>
          <div className="stats-inner">
            <div style={{ height: '300vh' }}>
            </div>
          </div>
        </View>
      );
    }
  
    // #endregion
  
  
}