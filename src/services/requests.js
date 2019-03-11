//requests to server

//requests to server
const baseUrl='https://mishpahug-java221-team-a.herokuapp.com';

const user = JSON.stringify({
    method: 'POST',
    body: user,
    headers: {
        'Content-Type': 'application/json',
        authorization: Buffer.from('test1@mailinator.com'+":"+"test").toString('base64')
    }
})

const userProfile = JSON.stringify({
    "firstName": "firstname",
    "lastName": "lastname",
    "dateOfBirth": "1996-04-30",
    "gender": "male",
    "maritalStatus": "martialstatus",
    "confession": "confession",
    "pictureLink":  ["avatar"],
    "phoneNumber": "number",
    "foodPreferences": ["kosher"],
    "languages": ["hebrew", "russian"],
    "description": "description"

});

export async function requestCreateEvent(data){
    let token = Buffer.from('test1@mailinator.com'+":"+"test").toString('base64');
    let init = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            authorization : token
        },
        body: data
    };
    const response = await fetch( `${baseUrl}/event/creation`, init);
    return await response.json()
}

export async function register() {
    let token = Buffer.from('test1@mailinator.com' + ":" + "test").toString('base64');
    let init = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            authorization : token
        }
    };

    const response = await fetch(baseUrl+"/user/registration", init)
    return response.json()
}


/*token  dGVzdDFAbWFpbGluYXRvci5jb206dGVzdA==*/