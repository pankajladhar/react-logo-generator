import React from 'react';
import _ from 'lodash';

import Color from "./Color";

class ColorContainer extends React.Component{
    constructor(props){
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler(e){
        this.props.backgroundChangeHandler(e.target.value);
    }

    render(){
        const {colors, optionClickHandler} = this.props;
        return(
            <div className="colorContainer">
                <div className="select-style">
                        <select name="" id="" onChange={this.onChangeHandler}>
                            <option>Select Background Color</option>
                            <option value="#FFFFFF">White</option>
                            <option value="#000000">Black</option>
                            {
                                _.map(colors,(options, colorName)=>{
                                    return <option key={colorName} value={options.option2}>{colorName}</option>
                                })
                            }
                        </select>
                    </div>
                <div className="innerDiv">
                    {
                    _.map(colors,(options, colorName)=>{
                        return <Color key={colorName} 
                                    colorName={colorName} 
                                    options={options} 
                                    optionClickHandler={optionClickHandler}
                                />
                    })
                }
                </div>
            </div>
        )
    }

};

export default ColorContainer;