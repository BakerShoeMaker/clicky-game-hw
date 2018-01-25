import React, { Component } from 'react';


class Header extends Component{

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5 text-middle">
                        <img src="../../images/logo.png" alt="" width="175" height="40"/>
                    </div>
                    <div className="col-5 gameFont">
                        <h4> score</h4>
                    </div>
                    <div className="col-1"></div>

                </div>

                {/*-------- Row #1 --------------*/}
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                            <img src="../../images/ball.png" alt="ball" width="200" height="140"/>
                            <img src="../../images/barea.png" alt="barea" width="200" height="140"/>
                            <img src="../../images/booker.png" alt="booker" width="200" height="140"/>

                        </div>
                    <div className="col-1"></div>
                </div>
                {/*-------- Row #2 --------------*/}
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <img src="../../images/curry.png" alt="curry" width="200" height="140"/>
                        <img src="../../images/david.png" alt="david" width="200" height="140"/>
                        <img src="../../images/griffin.png" alt="griffin" width="200" height="140"/>

                    </div>
                    <div className="col-1"></div>
                </div>
                {/*-------- Row #3 --------------*/}
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <img src="../../images/hamilton.png" width="200" height="140"/>
                        <img src="../../images/melo.png" width="200" height="140"/>
                        <img src="../../images/westbrook.png" width="200" height="140"/>
                    </div>
                    <div className="col-1"></div>
                </div>

         </div>//end container div

        );
     }//end render
}//end class

export default Header;