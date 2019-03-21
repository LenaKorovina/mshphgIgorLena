import React from 'react'
import './Main.css'
import mishpaLogo from './Mainimg/mishpaLogo.png'

class Main extends React.Component{
    render() {
        return (



            <div className="main container">

                <img src={mishpaLogo} className="logotip" alt="logogo"/>
                <h2>Shabbat in the family circle</h2>
                <p>We're looking for family where you can spend your
                    hugs or meet shabbat. Just sing in and start finding
                    a new shabbat family. More than 100 families
                    waiting for you!
                </p>
                <button className="btn-lg signup">sing up!</button>
            </div>


        )}}

export default Main;










