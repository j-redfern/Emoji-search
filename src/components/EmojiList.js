import React from 'react';

class EmojiList extends React.Component {
  render () {
    return (
      <div>
        <ul>
      {
        this.props.emojis.map(function(emoji){
          return( <li key = {emoji.title} >
                    {emoji.symbol}
                 </li>
                 )
        })
      }      
      </ul>
      </div>
    );
  }
}

export default EmojiList;
