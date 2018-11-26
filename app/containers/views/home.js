

import React from 'react';
import { switch_view } from '../../actions/navigation';
import { switch_product } from '../../actions/products';

export default class Home
  extends React.Component {

  // #region Initilization

  constructor (props) {
    super (props);
    this.state = {
      products : { },
    };
  }

  // #endregion

  // #region Renders

  render() { return (

    <div className="home-content">
      <div className="info">
        <div className="title">
          Welcome<br/>
          to <span className="bold">Gaze</span>
        </div>
      </div>

      <div className="products">
        <div className="list">
          <div className="list-header">
            <svg className="icon" viewBox="0 0 24 24">
              <use xlinkHref="#icon-product">
              </use>
            </svg>

            <span className="title">
              Products
            </span>
          </div>

          <div className="list-body">
            { Object.keys(this.state.products).map ( e => 
                this.renderProduct (e)
              )
            }
          </div>
        </div>

        <div className="actions">
          <div className="action new-product">
            <svg className="icon" viewBox="0 0 24 24">
              <use xlinkHref="#icon-new-product">
              </use>
            </svg>
          </div>
        </div>
      </div>
    </div>

  )}

  renderProduct (e) { return (
    
    <div className="product"  
      onClick={this.switchProduct.bind(this,e)}
      key={ 'homeprods-'+e }>

      <div className="icon-container">
        <svg className="icon" viewBox="0 0 24 24">
          <use xlinkHref="#chevron-right">
          </use>
        </svg>
      </div>

      <div className="label">
        {this.state.products[e].label}
      </div>

    </div>  

  )}

  // #endregion

  // #region Actions

  switchProduct ( identifier ) {
    if ( this.props.store != null ) {
      this.props.store.dispatch (
        switch_product ( identifier )
      );

      this.props.store.dispatch (
        switch_view ( 'pbacklog' )
      );
    }
  }

  // #endregion

  // #region Life cycle events

  onStoreChange () {
    let state = this.props.store.getState();
    let prods = state.products.elements;
    this.setState ({ products : prods });
  }

  componentDidMount () {
    if ( this.props.store != null ) {
      this.unsub = this.props.store.subscribe (
        this.onStoreChange.bind (this)
      );
    }
  }

  componentWillUnmount () {
    if ( this.unsub != null ) {
      this.unsub ();
    }
  }

  // #endregion

}