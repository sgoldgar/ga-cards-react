import React, {Component} from 'react';
import Card from './Card';
import '../index.css';


class Home extends Component{
  render(){
    return(
        <section id="cards" class="container-fluid">
          <div class="row">
            <Card/>
          </div>
        </section>
    )
  }
}

export default Home;
