/**
 * Fetches student data from SBHS API using access token
 * @param path Path to desired SBHS API function
 * @param access_token User's access token
 * @returns JSON of requested user data
 */
 export async function fetch_data(path: string, access_token: any) {

    let request_url = "https://student.sbhs.net.au/api/" + path;
    let response;
  
    await fetch(request_url, {

        headers: new Headers({
            "Authorization": "Bearer " + access_token
        })

    })

    .then((res) => {

        // user is invalid
        if (res.status !== 200) {
            throw new Error();
        }

        else {
            response = res.json();
        }

    })

    .catch(() => {
        
        // redirects to server so users can get new tokens
        window.open("http://localhost:4000/login", "_self");

    })

    return response;
  
};