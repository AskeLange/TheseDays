

import React from 'react';
import View from '../view';

export default class ProductBacklog
  extends React.Component {

    // #region Initilization
  
    constructor(props) {
      super(props);
      this.params = {
        label : 'Sprints',
        icon : 'icon-sprint',
        iconViewbox : '0 0 24 24',
        section : 'main'
      };
    }
  
    // #endregion
  
    // #region Renders
  
    render() {
      return (
        <View identifier="sprints" params={this.params} store={this.props.store}>
          <div className="sprints-inner">
            <div style={{ height: '200vh' }}>
            </div>
          </div>
        </View>
      );
    }
  
    // #endregion
  
  
}