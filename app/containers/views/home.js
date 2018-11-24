

import React from 'react';
import { switch_view } from '../../actions/navigation';

export default class Home
  extends React.Component {

  // #region Renders

  render() {
    return (
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

            </div>
          </div>

          <div className="actions">
            <div className="action new-product" 
              onClick={this.switchView.bind(this, 'pbacklog')}>
              <svg className="icon" viewBox="0 0 24 24">
                <use xlinkHref="#icon-new-product">
                </use>
              </svg>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // #endregion

  // #region Actions

  switchView ( identifier ) {
    this.props.store.dispatch (
      switch_view ( identifier )
    );
  }

  // #endregion

}