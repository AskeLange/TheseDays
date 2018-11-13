

import React from 'react';
import Calendar from './calendar';

export default class AppInstance 
  extends React.Component {

  render() {
    return (
      <div className="app">
        <Calendar />
      </div>
    );
  }

}