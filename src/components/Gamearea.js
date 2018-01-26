import React, { Component } from 'react';

class Gamearea extends Component{

        runMixer(){
            alert("You clicked an image!!!!!!");
        }

    render(){

        let ball = "../../images/ball.png";
        let barea = "../../images/barea.png";
        let booker = "../../images/booker.png";
        let curry = "../../images/curry.png";
        let davis = "../../images/david.png";
        let griffin = "../../images/griffin.png";
        let hamilton = "../../images/hamilton.png";
        let melo = "../../images/melo.png";
        let westbrook = "../../images/westbrook.png";
        {/* - put variables inside an array */}
        let playerArray = [ball, barea, booker, curry, davis, griffin, hamilton, melo, westbrook];

        return(

           <div className="mx-3 text-center">
                {/*-------- Row #1 --------------*/}
                <div className="row my-3">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <img onClick={this.runMixer} src= {playerArray[0]} alt="ball" width="200" height="140"/>
                        <img onClick={this.runMixer} src= {barea} alt="barea" width="200" height="140"/>
                        <img onClick={this.runMixer} src= {booker} alt="booker" width="200" height="140"/>

                    </div>
                    <div className="col-1"></div>
                </div>
                {/*-------- Row #2 --------------*/}
                <div className="row my-3">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <img onClick={this.runMixer} src={curry} alt="curry" width="200" height="140"/>
                        <img onClick={this.runMixer} src= {davis} alt="davis" width="200" height="140"/>
                        <img onClick={this.runMixer} src={griffin} alt="griffin" width="200" height="140"/>
                    </div>
                    <div className="col-1"></div>
                </div>
                {/*-------- Row #3 --------------*/}
                <div className="row my-3">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <img onClick={this.runMixer} src={hamilton} alt="hamilton" width="200" height="140"/>
                        <img onClick={this.runMixer} src={melo} alt="melo" width="200" height="140"/>
                        <img onClick={this.runMixer} src={westbrook} alt="westbrook" width="200" height="140"/>
                    </div>
                    <div className="col-1"></div>
                </div>

            </div>
        )

    }//end render
}//end class

export default Gamearea;