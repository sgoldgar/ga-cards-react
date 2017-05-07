import React, {Component} from 'react';
// import Card from './Card';
import {database,firebaseListToArray} from '../utils/firebase';
import '../index.css';


class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      cards: []
    }
  }
  componentWillMount(){
    database.ref('/cards')
      .on('value', data =>{
        const results = firebaseListToArray(data.val());
        console.log('cards', results);

        this.setState({
          cards:results
        });
      });
  }
  render(){
    const allCards = this.state.cards.map((card)=>{
      return(
        <div key={card.key} className="col-sm-6 col-md-4 col-lg-4">
          <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
            <div className="flipper">
              <div className="card front">
                <img src="http://www.briannedrouhard.com/images/sonicpoops.gif" alt="sanic"/>
              </div>
              <div className="card back">
                <h4 className="card-title">{card.makeCard}</h4>
                <h6>Cards Against Assembly</h6>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return(
        <section id="cards" className="container-fluid">
          <div className="row">
            {allCards}
          </div>
        </section>
    )
  }
}

export default Home;
