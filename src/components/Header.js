import React, { Component } from 'react';
import '../components/Header.css';

class Header extends Component{



    render(){

        return(
            <div>
                <div className="row ">
                    <div className="col-1"></div>
                    <div className="col-5 my-3 ">
                        <img src="../../images/logo.png" alt="" width="175" height="40"/>
                    </div>
                    <div className="col-5 gameFont my-3">
                        <h5> score 0 | top score 0 </h5>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-12 gameFontDirections">
                        <p> Click on an image to earn points. Don't click an image more than once!</p>
                    </div>
                </div>
            </div>//end container div

        );
     }//end render
}//end class

export default Header;