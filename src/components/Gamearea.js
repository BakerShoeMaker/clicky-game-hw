import React, { Component } from 'react';

class Gamearea extends Component{


    render(){

        return(
            <div className="mx-3 text-center">
                {/*-------- Row #1 --------------*/}
                <div className="row my-3">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <img src="../../images/ball.png" alt="ball" width="200" height="140"/>
                        <img src="../../images/barea.png" alt="barea" width="200" height="140"/>
                        <img src="../../images/booker.png" alt="booker" width="200" height="140"/>

                    </div>
                    <div className="col-1"></div>
                </div>
                {/*-------- Row #2 --------------*/}
                <div className="row my-3">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <img src="../../images/curry.png" alt="curry" width="200" height="140"/>
                        <img src="../../images/david.png" alt="david" width="200" height="140"/>
                        <img src="../../images/griffin.png" alt="griffin" width="200" height="140"/>

                    </div>
                    <div className="col-1"></div>
                </div>
                {/*-------- Row #3 --------------*/}
                <div className="row my-3">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <img src="../../images/hamilton.png" alt="hamilton" width="200" height="140"/>
                        <img src="../../images/melo.png" alt="melo" width="200" height="140"/>
                        <img src="../../images/westbrook.png" alt="westbrook" width="200" height="140"/>
                    </div>
                    <div className="col-1"></div>
                </div>

            </div>
        )

    }//end render
}//end class

export default Gamearea;