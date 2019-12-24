
import React, { Component } from 'react';

class MovieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      rating: '',
      duration: '',
      intArray: [],
      search :'',
      searchText: '',
      searchArray : [],
    };
  }

  onChange = event => {
    this.setState({
      value: event.target.value,
    });
  };
  onChangerating = event => {
    if (event.target.value <= 10) {
    this.setState({
      rating: event.target.value,
    });
  }
  else {
    alert("Please rate between 1 t0 10")
  }
  }
  onChangeduration = event => {

    if (event.target.value <= 24 || event.target.value <= 180) {
      this.setState({
        duration: event.target.value
      })
    }
    else {
      alert("Enter duration between 1 to 3 hr or 0 to 180 min")
    }
  }
 

  onSubmit = event => {
    event.preventDefault();
    const { value, intArray, rating, duration } = this.state;
    console.log(intArray);
    if (value == '') {
      return;
    } else {
      let intArrayNew = intArray.slice();
      let taskObj = {
        id: this.state.id + 1,
        text: value,
        rating: rating,
        duration: duration
      }
      intArrayNew.push(taskObj);
      this.setState({
        intArray: intArrayNew,
        id: this.state.id + 1,
      });
      // alert ("added");
      console.log(intArray, "pooo");
    }
  };

  onChangesearch =event =>{
    this.setState({
      search: event.target.value,
    });
    this.handlesearch(event.target.value);
  }

  handlesearch = (inp) => {  
    if (inp === '') {
      this.setState({
        searchArray: [],
      });
      return;
    }  
    const searchArray = this.state.intArray.filter((movie, i) => {
      return movie.text.indexOf(inp) > -1 ? true : false;
    });
    this.setState({
      searchArray,
    });
  }
  






  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label> Movie  </label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.onChange}
              required
            />
         
          <label> Rating </label>
            <input
              type="number"
              value={this.state.rating}
              onChange={this.onChangerating}
              required
            />
          
          <label> Duration </label>
            <input
              type="number"
              value={this.state.duration}
              onChange={this.onChangeduration}
              required
            />
         

          <button className="addbutton" type="submit">Add</button>
        </form>        
        <input className="username" type="text" value={this.state.search} onChange={this.onChangesearch} placeholder="Enter the movie" required/>                  
        <div className="child-list-item">
          {this.state.intArray.map((val, index) => {
            return (
              <div className="child" key={index}>
                <table >
                  <tr>
                    <th>Movie Name</th>
                    <th>Rating</th>
                    <th>Duration</th>
                  </tr>
                  <tr>
                    <td>{val.text}</td>
                    <td>{val.rating}</td>
                    {val.duration <= 3 ? (<td>{val.duration} HR</td>) : (<td>{val.duration} min</td>)}                                        
                  </tr>
                </table>
              </div>
            );
          })}        
        </div>
        <div>
          <div>Search result:</div>
          <div className="child-list-item">
            {this.state.searchArray.map((val, index) => {
              return (
                <div className="child" key={index}>
                  <table >
                    <tr>
                      <th>Movie Name</th>
                      <th>Rating</th>
                      <th>Duration</th>
                    </tr>
                    <tr>
                      <td>{val.text}</td>
                      <td>{val.rating}</td>
                      {val.duration <= 3 ? (<td>{val.duration} HR</td>) : (<td>{val.duration} min</td>)}                                        
                    </tr>
                  </table>
                </div>
              );
            })}        
          </div>
        </div>
      </div>
    );
  }
}
export default MovieComponent;