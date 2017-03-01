import React from 'react';
import Header from './Header';
import Logo from './Logo';
import ColorContainer from './ColorContainer';
import * as colors from './../data/color';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            svgColorObj : {
                strokeColor : "00D8FF",
                strokeWidth : "24",
                bgColor : "#222222"
            }
        }
        this.optionClickHandler = this.optionClickHandler.bind(this);
        this.backgroundChangeHandler = this.backgroundChangeHandler.bind(this);
    }

    optionClickHandler(value){
        this.setState({
            svgColorObj : Object.assign({},{
                strokeColor : value
            })
        })
    };
    backgroundChangeHandler(value){
        this.setState({
            svgColorObj : Object.assign({},{
                bgColor : value
            })
        })
    }
    render(){
        return(
            <div>
                <Header />
                <div className="container">
                    <Logo svgColorObj={this.state.svgColorObj}/>
                    <ColorContainer 
                        colors = {colors.colors} 
                        optionClickHandler = {this.optionClickHandler}
                        backgroundChangeHandler = {this.backgroundChangeHandler}
                    />
                </div>
            </div>
        )
    }

};

export default App;