import React, {Component} from 'react';
import {database} from '../utils/firebase';


class AddCard extends Component{
  constructor(props){
    super(props);
    this.state={
      makeCard: '',
      key: ''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('form submitted', this.state.makeCard);

    database.ref('/cards')
      .push({
        makeCard: this.state.makeCard,
        key: Date.now()
      })
      .then(()=>{
        console.log('success', this.state.makeCard)
      })
      this.setState({
        makeCard: ''
      })
    }

  render(){
    return(
      <section className="container-fluid">
        <div className="row">
          <form onSubmit={this.handleSubmit.bind(this)} name="add-card" id="add-card">
            <input type="text"
            value={this.state.makeCard}
            onChange={(e)=> this.setState({makeCard: e.target.value})}
            name="question"
            id="question"
            placeholder="What's your question?"/>
          </form>
          <br/>
          <div className="card">
            <h4 className="card-title">{this.state.makeCard}</h4>
            <h6>Cards Against Assembly</h6>
          </div>
        </div>
      </section>
    )
  }
}

export default AddCard;
