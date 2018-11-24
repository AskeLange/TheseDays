

import React from 'react';
import { switch_view } from '../actions/navigation';

export default class Sidebar
  extends React.Component {

  // #region Initilization

  constructor (props) {
    super(props);
    this.state = {
      navelems : { }
    };
  }

  // #endregion

  // #region Renders

  render ( ) {
    return (
      <div className="sidebar">
        <div className="navigation-elements">
          { Object.keys(this.state.navelems).map(k => 
              this.renderElem(k, this.state.navelems)
            )
          }
        </div>
      </div>
    )
  }

  renderElem ( k, l=this.state.navelems ) {
    return (
      <div className="navigation-element"
        onClick={ this.switchView.bind(this, k) }>

        <svg viewBox={l[k].iconViewbox} className="icon">
          <use xlinkHref={'#'+l[k].icon}>
          </use>
        </svg>

        <div className="label">
          {l[k].label}
        </div>

      </div>
    );
  }

  // #endregion

  // #region Actions

  switchView ( key ) {
    this.props.store.dispatch (
      switch_view ( key )
    );
  }

  // #endregion

  // #region Life cycle events

  onStoreChange () {
    let state    = this.props.store.getState();
    let navelems = state.navigation.elements;
    this.setState ({ navelems });
  }

  componentDidMount () {
    if ( this.props.store != null ) {
      this.unsub = this.props.store.subscribe (
        this.onStoreChange.bind(this)
      );
    }
  }

  componentWillUnmount () {
    if ( this.unsub != null ) {
      this.unsub();
    }
  }

  // #endregion

}