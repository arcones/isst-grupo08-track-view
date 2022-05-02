import React, {useState} from "react";
import {userLogin} from "../../services/TrackerMasterAPI";
import ParcelsTable from "../recipient/ParcelsTable";
import UserLogin from "./UserLogin";
import Load from "../carrier/Load";

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
                    <Load carrierName={user} setCredentials={setCredentials}/>
                    :
                    <ParcelsTable username={user} setCredentials={setCredentials}/>
            }
        </>
    )
};

export default UserHome;