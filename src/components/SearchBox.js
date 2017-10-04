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
      
  }
 
export default SearchBox