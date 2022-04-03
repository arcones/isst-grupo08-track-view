import React from "react";
import {useState} from "react";
import CarrierUpload from "./CarrierUpload";
import {carrierLogin} from "../../services/TrackerMasterAPI";
import CarrierLogin from "./CarrierLogin";
import {Button} from "antd";

const CarrierHome = () => {

    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const [credentials, setCredentials] = useState()

    const checkCredentials = () => {
        carrierLogin(user, password)
            .then(response => setCredentials(true))
            .catch(response => setCredentials(false))
    }

    return (
        <>
            {!credentials &&
                <CarrierLogin
                    credentials={credentials}
                    setCredentials={setCredentials}
                    checkCredentials={checkCredentials}
                    setUser={setUser}
                    setPassword={setPassword}
                />
            }
            {credentials && <CarrierUpload carrierName={user} setCredentials={setCredentials}/>}
        </>
    )
};

export default CarrierHome;