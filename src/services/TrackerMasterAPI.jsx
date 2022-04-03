import axios from "axios";

const BASE_PATH = "http://localhost:8080";
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

export const getParcel = (trackingNumber) => {
    const config = {
        headers: {
            "Access-Control-Allow-Origin": BASE_PATH,
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        timeout: TIMEOUT,
    };

    return axios.get(BASE_PATH + `/parcels/${trackingNumber}`, config);
};

export const carrierLogin = (user, password) => {
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

    return axios.get(BASE_PATH + `/carriers`, config);
};


export const loadParcels = (carrierName, parcels) => {
    const config = {
        data: parcels,
    };

    return axios.post(BASE_PATH + `/parcels/${carrierName}`, config);
};