

import React from 'react';
import Sidebar from './sidebar.js';
import Home from './views/home';
import ProductBacklog from './views/product_backlog';

export default class AppInstance 
  extends React.Component {

  // #region Renders

  render() {
    return (
      <div className="app">
        <header className="app-header">

        </header>

        <aside className="app-sidebar">
          <Sidebar store={this.props.store} />
        </aside>

        <div className="app-body">
          <Home store={this.props.store} />
          <ProductBacklog store={this.props.store} />
        </div>
      </div>
    );
  }

  // #endregion

}