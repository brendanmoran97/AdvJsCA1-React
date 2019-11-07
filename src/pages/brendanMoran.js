/**
 * @Date:   2019-10-15T10:57:10+01:00
 * @Last modified time: 2019-10-31T14:14:48+00:00
 */

import React from 'react';


class Brendan extends React.Component {
  render(){
    return(
      <div className = "container">
        <div className = "row ">
          <div className = "col-lg-6 col-sm-12 bigTopSpace">
            <div className = "card cardEpisode">
              <div className = "card-title">
                <center><h1 className = "topSpace">Contact</h1></center>
              </div>
              <div className ="card-body">
                <center>
                  <h3>Brendan Moran</h3>
                  <p><b>Contact Email: </b> N00163619@student.iadt.ie</p>
                  <h3>Creative Computing DL836</h3>
                  <p><b>Module: </b> Advanced JavaScript</p>
                </center>
              </div>
            </div>
          </div>
          <div className = "col-lg-6 col-sm-12 bigTopSpace">
            <div className = "card cardEpisode">
              <div className = "card-title">
                <center><h1 className = "topSpace">About</h1></center>
              </div>
              <div className ="card-body">
                <center>
                  <h3>Character Guide</h3>
                  <p>When on the character guide page there is an option to change pages and also filter through who is alive, dead or unknown.
                  The buttons to perform these actions are located either side or the heading on the page.</p>
                  <p>To see more info on each character click the more info button, you will then be able to see more information related to that
                   character and also a list of episodes they appear in.</p>
                  <h3 className = "topSpace">Episode Guide</h3>
                  <p>When on the episode guide page you will be shown all episodes. There is an option to filter and show only specific seasons.
                  The option for this is located in the page heading.</p>
                  <p>To see more info on each episode click the more info button, you will then be able to see more information related to that
                   episode and also a list of characters that appear in that show.</p>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Brendan;
