import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/homepage';
import Main from './components/main/Main';
class App extends Component {
    render() {
        return (

            <div>
                <div>
                    <Main/>
                <Homepage/>

                </div>

            </div>

        );
    }
}

export default App;