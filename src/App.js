import React, { Component } from 'react';
import './App.css';
import Range from './Components/Range';
import Output from './Components/Output';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      height : '',
        width: '',
        bmi : '',
        bmiCalculator : 'Normal'
    }
  }

  heightChange(height){
      this.setState({
          height : height
      }, this.setBmi())
  }

    widthChange(width){
      this.setState({
          width : width
      }, this.setBmi())
    }

    setBmi(){
      let bmi = ((this.state.width / this.state.height / this.state.height) * 10000).toFixed(2);
      this.setState({
          bmi : bmi, bmiCalculator : this.getBmiClass(bmi)
      }, function () {
          console.log(this.state);
      });
    }

    getBmiClass(bmi){
      if(bmi < 18 ) return 'Udercalculation';
      if(bmi >= 18 && bmi <= 24.9 ) return 'Normal';
      if(bmi >= 25 && bmi <= 30 ) return 'NormalHigh';
      if(bmi > 30 ) return 'High';
    }

  render() {
    return (
      <div className="App text-center">
        <h2>BMI Calculator</h2>
        <form>
          <div>
            <label>Height</label>
            <Range value={this.state.height} onChange={this.heightChange.bind(this)}/>
          </div>
          <div>
            <label>Width</label>
              <Range value={this.state.width} onChange={this.widthChange.bind(this)}/>
          </div>
        </form>
        <br />
        <Output data={this.state}/>
      </div>
    );
  }
}

export default App;
