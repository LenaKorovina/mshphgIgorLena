//requests to server

//requests to server
const baseUrl="https://mishpahug-java221-team-a.herokuapp.com";

let user=JSON.stringify(
{
    "title": "[String]",
    "holiday": "[String]",
    "address": {
    "city": "[String]",
        "place_id":"[String]",
        "location":   {
        "lat": "[Double]",
            "lng":"[Double]"
    }
},
    "confession": "[String]",
    "date":"[yyyy-MM-dd]",
    "time":"[HH:mm:ss]",
    "duration":"[Integer]",
    "food":["[String]", "[String]"],
    "description": "[String]"
}

);

 export async function requestYourIp(){
    const response = await fetch( '${baseUrl}/event/creation', {
        method: 'POST',
        body:user,
        headers:{
            'Content-Type':'application/json'


        }


    });
    return await response.json()
}
