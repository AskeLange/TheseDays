

import React from 'react';
import { switch_view } from '../actions/navigation';
import { push_product } from '../actions/products';

export default class Header
  extends React.Component {

  // #region Initilization

  constructor (props) {
    super (props);
    this.state = {
      products : [],
      activeProduct : ''
    };
  }

  // #endregion

  // #region Renders

  render() {
    return (
      <div className="app-header">
        <div className="actions">
          
          {/* Products */}
          <div className="action products">
            <svg viewBox="0 0 24 24" className="icon">
              <use xlinkHref="#icon-product">
              </use>
            </svg>
          </div>

          {/* Home */}
          <div className="action home" 
            onClick={ this.switchView.bind(this, 'home') }>
            <svg viewBox="0 0 24 24" className="icon">
              <use xlinkHref="#icon-home">
              </use>
            </svg>
          </div>

        </div>  
      </div>
    )
  }

  // #endregion

  // #region Actions

  switchView ( identifier ) {
    this.props.store.dispatch (
      switch_view ( identifier )
    );
  }

  // #endregion

  // #region Life cycle events

  onStoreChange() {

    let state = this.props.store.getState();
    let data  = state.products;
    
    this.setState ({
      products : data.elements,
      activeProduct : data.activeProduct
    });

  }

  componentDidMount() {
    if ( this.props.store != null ) {
      this.unsub = this.props.store.subscribe (
        this.onStoreChange.bind ( this )
      );

      this.props.store.dispatch ( push_product (
        'p1', { label : 'Product 1' }
      ));

      this.props.store.dispatch ( push_product (
        'p2', { label : 'Product 2' }
      ));

    }
  }

  componentWillUnmount() {
    if ( this.unsub != null ) {
      this.unsub();
    }
  }

  // #endregion

}