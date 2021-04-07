import React from "react";
import  ReactDOM from "react-dom";
import {Game} from "./game";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Home from "./home";
import Sonuc from "./sonuc";
const notFount =()=>{
    return(
        <div>
            <h2>Sayfa bulunamadı: 404 </h2>
            <p>
                Hata: Aradığınız sayfaya şu anda ulaşılamıyor. Daha sora tekrar deneyiniz.
            </p>
        </div>
    )
}

class App extends React.Component{

    render() {
        return(
            <HashRouter>
                <Switch>
                    <Route exact path='/game' component={Game}/>
                    <Route exact path='/' component={Home}/>

                    <Route component={notFount}/>
                </Switch>
            </HashRouter>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
