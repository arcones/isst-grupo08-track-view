import React, {useState} from "react";
import {userLogin} from "../../services/TrackerMasterAPI";
import {Upload} from "antd";
import ParcelsTable from "../recipient/ParcelsTable";
import UserLogin from "./UserLogin";

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
                    <Upload carrierName={user} setCredentials={setCredentials}/>
                    :
                    <ParcelsTable/>
            }
        </>
    )
};

export default UserHome;