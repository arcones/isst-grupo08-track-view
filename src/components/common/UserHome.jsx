import React from "react";
import {useState} from "react";
import {userLogin} from "../../services/TrackerMasterAPI";
import UserLogin from "./UserLogin";
import CarrierUpload from "../carrier/CarrierUpload";
import RecipientHome from "../recipient/RecipientHome";

const UserHome = ({role}) => {

    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const [credentials, setCredentials] = useState()

    const checkCredentials = () => {
        userLogin(user, password)
            .then(() => setCredentials(true))
            .catch(() => setCredentials(false))
    }

    return (
        <>
            {!credentials ?
                <UserLogin
                    credentials={credentials}
                    setCredentials={setCredentials}
                    checkCredentials={checkCredentials}
                    setUser={setUser}
                    setPassword={setPassword}
                />
                :
                role === "Carrier" ?
                    <CarrierUpload carrierName={user} setCredentials={setCredentials}/>
                    :
                    <RecipientHome/>
            }
        </>
    )
};

export default UserHome;