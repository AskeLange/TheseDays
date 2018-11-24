

import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Home from './views/home';
import ProductBacklog from './views/product_backlog';
import Sprints from './views/sprints';
import Statistics from './views/statistics';

export default class AppInstance 
  extends React.Component {

  // #region Initilization

  constructor (props) {
    super (props);
    this.state = {
      shifted : false,
    };
  }

  // #endregion

  // #region Renders

  render() {
    return (
      <div className={'app-container' + 
      (this.state.shifted ? ' shifted' : '')}>

        <div className="app-upper">
          <Home store={this.props.store} />
        </div>

        <div className="app-lower">
          <Header store={this.props.store} />

          <aside className="app-sidebar">
            <Sidebar store={this.props.store} />
          </aside>

          <div className="app-body">
            <ProductBacklog store={this.props.store} />
            <Statistics store={this.props.store} />
            <Sprints store={this.props.store} />
          </div>
        </div>

      </div>
    );
  }

  // #endregion

  // #region Life cycle events

  onStoreChange() {
    let state = this.props.store.getState();
    let shifted = state.navigation.activeView != 'home';
    this.setState ({ shifted });
  }

  componentDidMount() {
    if ( this.props.store != null ) {
      this.unsub = this.props.store.subscribe (
        this.onStoreChange.bind ( this )
      );
    }
  }

  componentWillUnmount() {
    if ( this.unsub != null ) {
      this.unsub();
    }
  }

  // #endregion

}