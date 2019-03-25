import React from 'react';
import noavatar from './icons/noavatar.png';
import banner from './icons/banner.png';
import logotip from './icons/logotip.png';
import  './css/App.css';
import CheckboxSelectComponent from "./CheckboxSelectComponent";
import ImageUpload from "./ImageUpload";
import DialogUpdatePhoto from "./DialogUpdatePhoto";



const baseUrl = "https://mishpahug-java221-team-a.herokuapp.com";
const email = "vasya@gmail.com";
const password = "00000000";


class Registration extends React.Component {

    updateUserProfile = () =>{
        let firstname = this.refs.firstname.value;
        let lastname = this.refs.lastname.value;
        let number = this.refs.number.value;
        let dateofbirth = this.refs.dateofbirth.value;
        let gender = this.refs.gender.value;
        let confession = this.refs.confession.value;
        let martialstatus = this.refs.martialstatus.value;
        let description = this.refs.description.value;



        let user = JSON.stringify({
            "firstName": firstname,
            "lastName": lastname,
            "dateOfBirth": dateofbirth,
            "gender": gender,
            "maritalStatus": martialstatus,
            "confession": confession,
            "pictureLink":  ["avatar"],
            "phoneNumber": number,
            "foodPreferences": ["kosher"],
            "languages": ["hebrew", "russian"],
            "description": description
        });

        let token = btoa(email+":"+password);
        let init = {
            method: 'POST',
            body : user,
            headers: {
                'Content-Type' : 'application/json',
                authorization: token
            }
        };
        fetch(baseUrl+"/user/profile", init).then(function (responce) {
            return responce.json();
        }).then(function (data) {
            for (var p in data) {
                console.log(p + " : " + data[p]);}
        });
    };

    registration = () => {
        let token = btoa(email+":"+password);
        let init = {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                authorization : token
            }
        };

        fetch(baseUrl+"/user/registration", init).then(function (responce) {
            return responce.json();
        }).then(function (data) {
            for (var p in data) {
                console.log(p + " : " + data[p]);}
        });
    };





    render() {
        return (
            <div className="container">
                <img className='logotip' src={logotip} alt="logotip"/>
                <div className='registr'>
                    <h1 className='h1reg'><span>Registration</span></h1>

                </div>
                <div className="row">

                    <div className='div1 col-sm-4'>
                        <h2>Personal information</h2>
                        <form>
                            <div className='margined'><input required ref="firstname" type="text" name="firstname" placeholder='First Name'/></div>
                            <div className='margined'><input required ref='lastname' type="text" name="lasttname" placeholder='Last Name'/></div>
                            <div className='margined'><input required ref='number' type="number" name="phone" placeholder='Phone Number'/></div>
                            <select ref='confession'>
                                <option value="Confession">Confession</option>
                                <option value="religious">religious</option>
                                <option value="irreligious">irreligious</option>
                            </select>
                            <div className='margined'>
                                <input ref='dateofbirth' type='date'/>
                            </div>

                        </form>
                    </div>
                    <div className='div2 col-sm-4'>
                        <h2>About Myself</h2>
                        <form>
                            <div className='margined'>
                                <select ref='martialstatus'>
                                    <option value="MartialStatus">Martial Status</option>
                                    <option value="married">Married</option>
                                    <option value="single">Single</option>
                                    <option value="couple">Couple</option>
                                </select>
                            </div>
                            <div className='margined'>
                                <select ref='gender'>
                                    <option value="Gender">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className='margined'>
                                <CheckboxSelectComponent selectName="Food Preferences"
                                                         items="vegetarian kosher non-vegetarian other"/>

                            </div>

                            <div className='margined'>
                                <CheckboxSelectComponent selectName="Languages"
                                                         items="hebrew english france russian other"/>
                            </div>
                            <div className='margined'>
                                <textarea ref='description' placeholder='Write few words about yourself' maxLength={300}></textarea>
                            </div>
                        </form>
                    </div>

                    <div className='div3 col-sm-3'>
                        <div>
                            <button className='changeAvaBtn' onClick={this.ImageUpload}>Change avatar</button>
                            <img ref='avatar' src={noavatar} alt="avatar" width="150"/>

                        </div>
                        <div>
                            <p>Change banner</p>
                            <img ref='banner' src={banner} alt="banner" width="210"/>
                        </div>
                    </div>
                </div>
                <div className='margined'>
                    <div className='buttons'>

                        <button id="cancel_btn" onClick={this.registration} className="btn btn-primary">Cancel</button>

                        <button id="save_btn" onClick={this.updateUserProfile} className="btn btn-primary">Save</button>

                    </div>

                    {/*<DialogUpdatePhoto/>*/}


                    {/*<List/>*/}
                    {/*<Homepage/>*/}
                    {/*<CheckboxSelectComponentIgor/>*/}
                    {/*<Main/>*/}
                    {/*<Request/>*/}

                    {/*<LogIn/>*/}

                </div>

            </div>
        )
            ;
    }
}


export default Registration;