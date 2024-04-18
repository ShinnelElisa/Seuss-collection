import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  
  componentDidMount() {
    fetch('https://openlibrary.org/search/authors.json?q=dr.%20seuss')
      .then(response => response.json())
      .then(data => {
        const monsters = data.docs; 
        this.setState({ monsters: monsters });
      })
  }

handleChange = e => {
  this.setState({searchField: e.target.value});
};  

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
    monster.top_work&&monster.top_work.toLowerCase().includes(searchField.toLowerCase()))
    return(
    <div className="App">
      <img alt="Your Dr. Seuss collection is waiting for you" 
      src={`https://cattell.dmschools.org/wp-content/uploads/sites/5/2017/02/drseuss.png`} />

      <h1>Get a copy of your favourite Dr. Seuss classics today!</h1>
        
      <SearchBox
      placeholder= 'search collection'
      handleChange={this.handleChange}
      />

      <CardList monsters = {filteredMonsters} />
    </div>  
    );

  }
 
}

export default App;
