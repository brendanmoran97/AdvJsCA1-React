/**
 * @Date:   2019-10-21T11:30:55+01:00
 * @Last modified time: 2019-10-31T13:38:00+00:00
 */
 import React from 'react';
 import 'bootstrap/dist/css/bootstrap.css';
 import MyCharacterModal from './charactermodal';
 import Dropdown from 'react-bootstrap/Dropdown';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.



  class Characters extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        characters: [],
        currentPage: 1,
        deadAliveUnknown: []
      };
    }

    componentDidMount() {

      fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then((data) => {
          this.setState({
            characters: data.results,
            deadAliveUnknown: data.results
          });
        })
        .catch(console.log)
    }

    ChangePage(CurrentPage, Change){

      CurrentPage += Change;
      if(CurrentPage < 1){
        CurrentPage = 1;
      }
      if(CurrentPage > 20){
        CurrentPage = 20;
      }
      this.setState({currentPage: CurrentPage}, () => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${CurrentPage}`)
          .then(res => res.json())
          .then((data) => {
            this.setState({
              characters: data.results,
              deadAliveUnknown: data.results
            });
          })
          .catch(console.log)
      });
    }

    DeadOrAlive(status){
      console.log(status);
      let results = [];

      if(status === "reset"){
        this.setState({deadAliveUnknown: this.state.characters}, () => console.log(this.state.deadAliveUnknown));
        return;
      }

      for(let i = 0; i < this.state.characters.length; i++){
        if(this.state.characters[i].status === status){
          results.push(this.state.characters[i]);
        }

      }

      this.setState({deadAliveUnknown: results}, () => console.log(this.state.deadAliveUnknown));
      console.log(this.state.characters);
    }

    render(){
      return(
        <div className = "container">
          <div className = "row topSpace characterListHeading">
            <div className ="col">
            <center>
            <Dropdown className = "topSpace bottomSpace">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                See Who's Dead/ Alive
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <center><Dropdown.Item href="#/action-1"><button className = "btn btn-outline-info buttonSpace" onClick={() => this.DeadOrAlive("Alive")}>Show Alive</button></Dropdown.Item></center>
                <center><Dropdown.Item href="#/action-1"><button className = "btn btn-outline-info buttonSpace" onClick={() => this.DeadOrAlive("Dead")}>Show Dead</button></Dropdown.Item></center>
                <center><Dropdown.Item href="#/action-1"><button className = "btn btn-outline-info buttonSpace" onClick={() => this.DeadOrAlive("unknown")}>Show Unknown</button></Dropdown.Item></center>
                <center><Dropdown.Item href="#/action-1"><button className = "btn btn-outline-info buttonSpace" onClick={() => this.DeadOrAlive("reset")}>Show All</button></Dropdown.Item></center>
              </Dropdown.Menu>
            </Dropdown>
            </center>
            </div>
            <div className ="col">
              <center><h1 className = "topSpace bottomSpace">Character List</h1></center>
            </div>
            <div className ="col">
            <center>
            <Dropdown className = "topSpace bottomSpace">
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Navigate Pages
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <center><Dropdown.Item href="#/action-1"><button className = "btn btn-outline-info buttonSpace" onClick={() => this.ChangePage(this.state.currentPage, 1)}>Forward 1</button></Dropdown.Item></center>
                <center><Dropdown.Item href="#/action-1"><button className = "btn btn-outline-info buttonSpace" onClick={() => this.ChangePage(this.state.currentPage, 5)}>Forward 5</button></Dropdown.Item></center>
                <center><Dropdown.Item href="#/action-1"><button className = "btn btn-outline-warning buttonSpace"onClick={() => this.ChangePage(this.state.currentPage, -1)}>Back 1</button></Dropdown.Item></center>
                <center><Dropdown.Item href="#/action-1"><button className = "btn btn-outline-warning buttonSpace"onClick={() => this.ChangePage(this.state.currentPage, -5)}>Back 5</button></Dropdown.Item></center>
              </Dropdown.Menu>
            </Dropdown>
            </center>
            </div>
          </div>
          <div className = "row">

          {this.state.deadAliveUnknown.map((character) => (
                <div key={character.id} className = "col-lg-4 col-sm-6 topSpace">
                  <div className = "card">
                      <img alt ={character.name} src = {character.image}/>
                    <div className = "card-body">
                      <div>
                        <h4  className = "card-title">{character.name}</h4>
                      </div>
                      <div>
                        <p className = "card-text">This character is {character.status}</p>
                      </div>
                      <div>
                        <MyCharacterModal data={character}/>
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

 export default Characters;
