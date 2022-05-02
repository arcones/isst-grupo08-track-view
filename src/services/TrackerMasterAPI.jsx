import axios from "axios";

const BASE_PATH = "https://isst-grupo08-track-controller.herokuapp.com";

const TIMEOUT = 5000;

export const healthCheck = () => {
    const config = {
        headers: {
            "Access-Control-Allow-Origin": BASE_PATH,
        },
        timeout: TIMEOUT,
    };
    return axios.get(BASE_PATH + "/health", config)
}

export const getParcel = (username) => {
    const config = {
        headers: {
            "Access-Control-Allow-Origin": BASE_PATH,
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        timeout: TIMEOUT,
    };

    return axios.get(BASE_PATH + `/parcels/${username}`, config);
};

export const userLogin = (user, password) => {
    const config = {
        headers: {
            "Access-Control-Allow-Origin": BASE_PATH,
            "Content-Type": "application/json",
            Accept: "application/json",
            User: user,
            Password: password
        },
        timeout: TIMEOUT,
    };

    return axios.get(BASE_PATH + `/login`, config);
};


export const loadParcels = (carrierName, parcels) => {
    const config = {
        data: parcels,
    };

    return axios.post(BASE_PATH + `/parcels/${carrierName}`, config);
};