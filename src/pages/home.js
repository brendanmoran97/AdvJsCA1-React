/**
 * @Date:   2019-10-15T10:57:10+01:00
 * @Last modified time: 2019-10-30T18:20:56+00:00
 */

import React from 'react';
import {Link} from 'react-router-dom';


class Home extends React.Component {
  render(){
    return(
      <div className = "container">
        <div className = "row ">
          <div className = "col-lg-6 col-sm-12 bigTopSpace">
            <div className = "card cardEpisode">
              <img src = "../../../images/homeimg2.jpg" alt = "characters"/>
              <div className ="card-body">
                <center>
                <Link to = "./Characters" ><button type="button" className="btn btn-success">Click here for a full list of characters!</button></Link>
                </center>
              </div>
            </div>
          </div>
          <div className = "col-lg-6 col-sm-12 bigTopSpace">
            <div className = "card cardEpisode">
              <img src = "../../../images/homeimg3.jpg" alt = "episodes"/>
              <div className ="card-body">
                <center>
                <Link to = "./Episodes" ><button type="button" className="btn btn-success">Click here for a full list of episodes!</button></Link>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
