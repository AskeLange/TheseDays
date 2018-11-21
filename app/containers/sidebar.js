

import React from 'react';
import { switchView } from '../actions/navigation';

export default class Sidebar
  extends React.Component {

  // #region Initilization

  constructor (props) {
    super(props);
    this.state = {
      navelems : []
    };
  }

  // #endregion

  // #region Renders

  render ( ) {
    return (
      <div className="sidebar">
        <div className="navigation-elements">
          { this.state.navelems.map (
            this.renderElem.bind(this)
          )}
        </div>
      </div>
    )
  }

  renderElem ( e ) {
    return (
      <div className="navigation-element"
        onClick={ this.switchView.bind(this, e) }>

        <svg viewBox={e.iconViewbox} className="icon">
          <use xlinkHref={'#'+e.icon}>
          </use>
        </svg>

        <div className="label">
          {e.label}
        </div>

      </div>
    );
  }

  // #endregion

  // #region Actions

  switchView ( navelem ) {
    this.props.store.dispatch (
      switchView ( navelem.identifier )
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