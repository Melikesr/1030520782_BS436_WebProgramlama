import  ReactDOM from "react-dom";
import Game from "./game";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Home from "./home";


import React, {Component} from 'react';
import Login from "./login";
import Signup from "./signup";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            user: null
        }

    }
    fetchAndUpdateUserInfo =async ()=>{
        const url="/api/user";
        let response;

        try {
            response=await fetch(url);

        }catch (e){
            this.setState({errorMsg: "sunucuya bağlanırken hata "+e})
            return;
        }

        if (response.status===401){
            this.updateLoggodInUser(null);
            return;
        }
        if (response.status !==200){

        }else {

            const payload=await response.json();
            this.updateLoggodInUser(payload0);
        }


    }
    updateLoggodInUser=(user)=>{
        this.setState({user:user})
    }
    componentDidMount(){
        this.fetchAndUpdateUserInfo();
    }


    notFount =()=>{
        return(
            <div>
                <h2>Sayfa bulunamadı: 404 </h2>
                <p>
                    Hata: Aradığınız sayfaya şu anda ulaşılamıyor. Daha sora tekrar deneyiniz.
                </p>
            </div>
        )
    }
    render() {

        const id=this.state.user ? this.state.user.id:null;

        return(
            <HashRouter userId={id}
            updateLoggedInUser={this.updateLoggodInUser}>
                <Switch>
                    <Route exact path='/Game' render={props=><Game
                        {...props}
                    user={this.state.user}
                        updateLoggedInUser={this.updateLoggodInUser}
                        fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}
                    />}/>

                    <Route exact path='/login' render={props=><Login
                        {...props}
                        user={this.state.user}
                        fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}
                    />}/>

                    <Route exact path='/signup' render={props=><Signup
                        {...props}
                        user={this.state.user}
                        fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}
                    />}/>

                    <Route exact path='/' render={props=><Home
                        {...props} user={this.props.user}  fetchAndUpdateUserInfo={this.fetchAndUpdateUserInfo}

                    />}/>

                    <Route component={this.notFount}/>
                </Switch>
            </HashRouter>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));
