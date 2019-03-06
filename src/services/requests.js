//requests to server

//requests to server
const baseUrl='https://mishpahug-java221-team-a.herokuapp.com';

let user=JSON.stringify(
{

    "title": "test",
    "holiday": "test",
    "address": {
    "city": "test",
        "place_id":"testID",
        "location":   {
        "lat": "0.57",
            "lng":"0.57"
    }
},
    "confession": "test",
    "date":"2019-04-04",
    "time":"21:20:40",
    "duration":"30",
    "food":["test", "test"],
    "description": "test"
}

);

 export async function requestYourIp(){
    const response = await fetch( `${baseUrl}/event/creation`, {
        method: 'POST',
        body:user,
        headers:{
            'Content-Type':'application/json'


        }


    });
    return await response.json()
}
