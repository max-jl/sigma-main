import React, { createContext, useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios';

export const my_context = createContext({});

const server_url = "https://sbhssigma.herokuapp.com"

function Context(props: any) {

    const [data, set_data] = useState<any>();
    
    useEffect(() => {

        // get tokens by communicating with backend server
        axios.get(server_url + "/gettokens", { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data) {
                set_data(res.data);
            }
        })

    }, [])

    return (
        <my_context.Provider value={data}>{props.children}</my_context.Provider>
    );
}

export default Context;