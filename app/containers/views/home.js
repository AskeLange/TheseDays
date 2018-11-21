

import React from 'react';
import View from '../view';

export default class Home
  extends React.Component {

  // #region Initilization

  constructor(props) {
    super(props);
    this.params = {
      label : 'Home',
      icon : 'icon-home',
      iconViewbox : '0 0 24 24',
    };
  }

  // #endregion

  // #region Renders

  render() {
    return (
      <View identifier="home" params={this.params} store={this.props.store}>
        <div className="home-inner">
          <div style={{ height: '200vh' }}></div>
        </div>
      </View>
    );
  }

  // #endregion

}