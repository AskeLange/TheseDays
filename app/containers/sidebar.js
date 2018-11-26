

import React from 'react';
import { switch_view, push_section } from '../actions/navigation';

export default class Sidebar
  extends React.Component {

  // #region Initilization

  constructor (props) {
    super(props);
    this.state = {
      elements : { },
      sections : { }
    };
  }

  // #endregion

  // #region Renders

  render ( ) { 

    // Shorthands
    let scopy = this.state.sections;
    let skeys = Object.keys(this.state.sections);

    // Sorts sections
    skeys.sort (( a, b ) => {
      if ( scopy[a].order > scopy[b].order ) return 1;
      if ( scopy[a].order < scopy[b].order ) return -1;
      return 0;
    });

    // Returns
    return (
      <div className="sidebar">
        <div className="navigation-elements">
          { skeys.map (i => this.renderSection (i) )}
        </div>
      </div>
    )

  }

  renderSection ( sectionid ) { 
    
    // Filters elements
    let elements = [ ];
    Object.keys(this.state.elements).forEach( i => {
      if ( this.state.elements[i].section == sectionid ) {
        elements.push ( i );
      }
    });

    // Returns
    return (
      <div className="section" key={'sbsection-'+sectionid}>
        <div className="label">
          { this.state.sections[sectionid].label }:
        </div>

        <div className="elements">
          { elements.map (i => this.renderElement (i) ) }
        </div>
      </div>
    );

  }

  renderElement ( k ) { 

    // Returns
    return (
      <div className="navigation-element"
        onClick={ this.switchView.bind(this, k) }>

        <div className="icon-container">
          <svg viewBox={this.state.elements[k].iconViewbox} className="icon">
            <use xlinkHref={'#'+this.state.elements[k].icon}>
            </use>
          </svg>
        </div>

        <div className="label">
          {this.state.elements[k].label}
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
    let elements = state.navigation.elements;
    let sections = state.navigation.sections;
    this.setState ({ elements, sections });
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