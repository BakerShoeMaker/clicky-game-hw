import React, { Component } from 'react';

class Gamearea extends Component{

        constructor(props){
            super(props);
            this.state = {
                stateBall: "../../images/ball.png",
                stateBarea: "../../images/barea.png",
                stateBooker: "../../images/booker.png",
                stateCurry: "../../images/curry.png",
                stateDavis: "../../images/davis.png",
                stateGriffin: "../../images/griffin.png",
                stateHamilton: "../../images/hamilton.png",
                stateMelo: "../../images/melo.png",
                stateWestbrook: "../../images/westbrook.png"
            }
        }
        runMixer(){
            alert("This is all I could do. Working on Project #3!!!!!!");
           /* clickArray.push(event.target);
            console.log(clickArray);*/
        }

    render(){

        {/* - put variables inside an array */}
        //let playerArray = [ball, barea, booker, curry, davis, griffin, hamilton, melo, westbrook];

        let clickArray = [];

        return(

           <div className="mx-3 text-center">
                {/*-------- Row #1 --------------*/}
                <div className="row my-3">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <img onClick={this.runMixer} src= {this.state.stateBall} alt="ball" width="200" height="140"/>
                        <img onClick={this.runMixer} src= {this.state.stateBarea} alt="barea" width="200" height="140"/>
                        <img onClick={this.runMixer} src= {this.state.stateBooker} alt="booker" width="200" height="140"/>

                    </div>
                    <div className="col-1"></div>
                </div>
                {/*-------- Row #2 --------------*/}
                <div className="row my-3">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <img onClick={this.runMixer} src={this.state.stateCurry} alt="curry" width="200" height="140"/>
                        <img onClick={this.runMixer} src= {this.state.stateDavis} alt="davis" width="200" height="140"/>
                        <img onClick={this.runMixer} src={this.state.stateGriffin} alt="griffin" width="200" height="140"/>
                    </div>
                    <div className="col-1"></div>
                </div>
                {/*-------- Row #3 --------------*/}
                <div className="row my-3">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <img onClick={this.runMixer} src={this.state.stateHamilton} alt="hamilton" width="200" height="140"/>
                        <img onClick={this.runMixer} src={this.state.stateMelo} alt="melo" width="200" height="140"/>
                        <img onClick={this.runMixer} src={this.state.stateWestbrook} alt="westbrook" width="200" height="140"/>
                    </div>
                    <div className="col-1"></div>
                </div>

            </div>
        )

    }//end render
}//end class

export default Gamearea;