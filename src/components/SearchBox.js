import React from 'react'


class SearchBox extends React.Component {
  constructor(props){
    super(props)

  }  

    render () {
      return (
        <div>
           <form>
             <input onChange= {this.props.filterword} type='text' placeholder="Type to search for emoji... " />

           </form>
        </div>
      );
    }
       
    


    // this.props.emojis.map(function(emoji){
    //   if(emoji.keywords.match(event.target.value)){
    //     return (<li>
    //               {emoji.symbol}
    //            </li>)
    //   }
    // }) 
  }
 
export default SearchBox