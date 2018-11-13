

import React from 'react';

export default class Calendar
  extends React.Component {

  render() {
    return (
      <div className="calendar window">
        <header className="calendar-header">
          <span className="title">Calendar</span>
        </header>
      
        <div className="calendar-body">
          <div className="dailies">
            
            { ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map(e => 
                <div className="daily">
                  <header className="daily-header">
                    {e}.
                  </header>

                  <div className="daily-body">
                    Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.
                  </div> 
                </div>
              )
            }

          </div>
        </div>
      </div>
    );
  }

}