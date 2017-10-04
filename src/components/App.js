import React from 'react';
import SearchBox from './SearchBox'
import EmojiList from './EmojiList'
import emojis from '../emojiList.json'


class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      emojisArray : emojis
    }
  this.filterWord = this.filterWord.bind(this);
  }
  filterWord (event) {
    console.log(this.state.emojisArray.length)
    var newArray = emojis.filter(function (emoji) {
       if (emoji.keywords.match(event.target.value)){
         return true;
       }
       return false;
     })
    this.setState({
     emojisArray : newArray
   })   
    
  }
  render () {
    //console.log(this.props.emojis);
    return (
      <div>
        <h1> Welcome to Emoji Search </h1>
        <p> You can find your emoji using the search box below </p>
        <SearchBox
          emojis = {this.state.emojisArray}
          filterword = {this.filterWord}
        />
        <EmojiList 
          emojis = {this.state.emojisArray}  
        />
      </div>
    );
  }
}

export default App;

