

import React from 'react';
import { push_view } from '../actions/navigation';

export default class View 
  extends React.Component {

  // #region Initilization

  constructor(props) {
    super(props);
    this.state = { 
      active : false,
    };
  }

  // #endregion

  // #region Renders

  render() {
    return (
      <div className={'view' + (this.state.active ? ' active' : '')}
        id={this.props.identifier} >
        { this.props.children }
      </div>
    );
  }

  // #endregion

  // #region Life cycle events

  onStoreChange() {
    let state = this.props.store.getState();
    let aview = state.navigation.activeView;
    this.setState({ active : aview == this.props.identifier });
  }

  componentDidMount() {
    if ( this.props.store != null ) {
      this.unsub = this.props.store.subscribe (
        this.onStoreChange.bind ( this )
      );

      this.props.store.dispatch ( push_view ( 
        this.props.identifier,
        this.props.params
      ))
    }
  }

  componentWillUnmount() {
    if ( this.unsub != null ) {
      this.unsub();
    }
  }

  // #endregion
    
}