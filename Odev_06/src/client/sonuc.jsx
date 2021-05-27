import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Sonuc extends Component {
    render() {
        return (
            <div>

                <p className="game-result">
                  Kaybettin :(
                       </p>

                <div className="action">
                    <Link className="play" to={"/yeniOyun"} >Oyna</Link>

                </div>
            </div>
        );
    }
}

