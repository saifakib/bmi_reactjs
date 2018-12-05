import React, { Component } from 'react';


class Output extends Component{
    toFeet(n){
        let realFeet = ((n * 0.303700) * 12);
        let feet = Math.floor(realFeet);
        let inches = Math.round((realFeet - feet) * 12);
        return feet + "'" + inches;
    }

    tofed(n){
        let widthsize = n*0.845892;
        let lbs = Math.round(widthsize);
        return lbs;
    }

    render() {

        let height = this.toFeet(this.props.data.height);
        let width = this.tofed(this.props.data.width);
        let bmi = this.props.data.bmi;
        let bmiClass = this.props.data.bmiCalculator;

        return (
            <div className="Output">
                <h4>Output</h4>
                <h3>{height}</h3><br/>
                <h3>{width}</h3>
                <h3>{bmi}</h3><br/>
                <h3 className={(this.props.data.bmiCalculator === 'High') ? '<a href="www.google.com">What can i do now ?</a>' : ''}>{bmiClass}</h3>

            </div>
        );
    }
}

export default Output;
