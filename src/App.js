import React, {Component} from 'react';
import logo from './logo.svg';
import Homepage from './components/homepage';
import Main from './components/main/Main';
import Registration from "./components/Registration/Registration";
import Calendar from "./components/Registration/Calendar";
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from './components/Navigation';
import NotificationList from './components/Notification/Notification';
import ImageUpload from "./components/Registration/ImageUpload";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation/>
                {/*<Switch>*/}
                <Route path="/main" component={Main}/>
                <Route path="/imageUpload" component={ImageUpload}/>
                <Route path="/homepage" component={Homepage}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/calendar" component={Calendar}/>
                    <Route path="/notification" component={NotificationList}/>
                {/*</Switch>*/}
                </div>
            </BrowserRouter>
            // <
            //
            // <div>
            //     <div>
            //
            //         <Main/>
            //         <Registration/>
            //         <Calendar/>
            //
            //         <Homepage/>
            //
            //     </div>
            //
            // </div>

        );
    }
}

export default App;