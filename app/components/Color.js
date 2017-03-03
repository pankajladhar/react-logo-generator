import React from 'react';
import  ReactDOM from 'react-dom';
import _ from 'lodash';

class Color extends React.Component{
    constructor(props){
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.onClickOptionHandler = this.onClickOptionHandler.bind(this);
        this.state ={
            showOptions: false
        }
    }
    onClickHandler(e){
        e.preventDefault();
        let x = !this.state.showOptions;
        this.setState({showOptions: x})
    };
    onClickOptionHandler(e){
        let selectedColor= e.target.textContent
        this.props.optionClickHandler(selectedColor)
    }
    render(){
        const {colorName, options} = this.props;
        return(
            <div className="colorOptions">
                {this.state.showOptions ? <ul>
                    {
                        _.map(options, (color, option)=>{
                            return <li key={option} style={{backgroundColor:color}} onClick={this.onClickOptionHandler}>{color}</li>
                        })
                    }
                </ul>: null}
                <button className="button" style={{backgroundColor:options.option2}} onClick ={this.onClickHandler}>{colorName}</button>
            </div>
        )
    }

};

export default Color;