import axios from "axios";

const BASE_PATH = "https://83821aee-8ef5-4ef6-8866-6be6ee9a8149.mock.pstmn.io";
const TIMEOUT = 5000;

export const getParcel = (parcelNumber) => {
    const config = {
        headers: {
            "Access-Control-Allow-Origin": BASE_PATH,
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        timeout: TIMEOUT,
    };

    return axios.get(BASE_PATH + `/api/parcel/${parcelNumber}`, config);
};