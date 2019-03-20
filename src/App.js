import React, {Component} from 'react';
import logo from './logo.svg';
import Homepage from './components/homepage';
import Main from './components/main/Main';
import Registration from "./components/Registration/Registration";
import Calendar from "./components/Registration/Calendar";
class App extends Component {
    render() {
        return (

            <div>
                <div>
                    <Main/>
                    <Registration/>
                    <Calendar/>

                <Homepage/>

                </div>

            </div>

        );
    }
}

export default App;