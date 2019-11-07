/**
 * @Date:   2019-10-21T11:30:55+01:00
 * @Last modified time: 2019-10-30T19:33:45+00:00
 */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MyEpsiodeModal from './episodesmodal';
import Dropdown from 'react-bootstrap/Dropdown';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.



  class Episodes extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        episodes: [],
        currentPage: 1,
        season: []
      };
    }

    componentDidMount() {

      let firstPage = [];
      let secondPage = [];

      fetch('https://rickandmortyapi.com/api/episode/')
        .then(res => res.json())
        .then((data) => {

          firstPage = data.results;

          this.setState({
            episodes: data.results,
            season: data.results
          });
        })
        .catch(console.log)

        fetch('https://rickandmortyapi.com/api/episode/?page=2')
          .then(res => res.json())
          .then((data) => {

            secondPage = firstPage.concat(data.results);
            console.log(secondPage);
            this.setState({
              episodes: secondPage,
              season: secondPage
            });
          })
          .catch(console.log)


    }


DifferentSeason(seasonChange){

  let results = [];

  for(let i = 0; i < this.state.episodes.length; i ++){
    if(this.state.episodes[i].episode.includes(seasonChange)){
      results.push(this.state.episodes[i]);
    }
  }

  this.setState({season: results}, () => console.log(this.state.season));

}


    render(){
      return(
        <div className = "container">
          <div className = "row topSpace characterListHeading">
            <div className ="col">
              <center><h1 className = "topSpace bottomSpace">Episode List</h1></center>
            </div>
            <div className ="col">
            <center>
            <Dropdown className = "topSpace bottomSpace">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Change Season
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <center><Dropdown.Item href="#/action-1"><button className = "btn btn-outline-info buttonSpace" onClick={() => this.DifferentSeason("S01")}>Show Season 1</button></Dropdown.Item></center>
                <center><Dropdown.Item href="#/action-1"><button className = "btn btn-outline-info buttonSpace" onClick={() => this.DifferentSeason("S02")}>Show Season 2</button></Dropdown.Item></center>
                <center><Dropdown.Item href="#/action-1"><button className = "btn btn-outline-info buttonSpace" onClick={() => this.DifferentSeason("S03")}>Show Season 3</button></Dropdown.Item></center>
              </Dropdown.Menu>
            </Dropdown>
            </center>
            </div>
          </div>
          <div className = "row">

          {this.state.season.map((episode) => (
                <div key={episode.id} className = "col-lg-4 col-sm-6 topSpace">
                  <div className = "card cardEpisode">
                    <div className = "card-body">
                      <div>
                        <h4  className = "card-title">{episode.name}</h4>
                        <h4  className = "card-title">{episode.episode}</h4>
                      </div>
                      <div>
                        <p className = "card-text">This episode aired on {episode.air_date}</p>
                      </div>
                      <div>
                        <MyEpsiodeModal data={episode}/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>




        </div>
      );
    }

  }

 export default Episodes;


 //on line 24 add an inline if statement to display different icons depending on if theyre deaed or not
 // <div className = "container">
 //   <center><h1>Character List</h1></center>
 //   <div className = "row">
 //     {characters.map((character) => (
 //       <div className = "col-lg-4 col-sm-6 topSpace">
 //         <div className = "card">
 //             <img alt ={character.name} src = {character.image}/>
 //           <div className = "card-body">
 //             <div>
 //               <h4  className = "card-title">{character.name}</h4>
 //             </div>
 //             <div>
 //               <p className = "card-text">This character is {character.status}</p>
 //             </div>
 //           </div>
 //         </div>
 //       </div>
 //     ))}
 //   </div>
 // </div>
