import React, {useState} from "react";
import {Button, Result} from 'antd';
import ParcelInfo from "./ParcelInfo";
import ParcelSearch from "./ParcelSearch";


const RecipientHome = () => {
    const [parcelNumber, setParcelNumber] = useState();
    const [parcelStatus, setParcelStatus] = useState()

    switch (parcelNumber) {
        case undefined:
            return <ParcelSearch setParcelNumber={setParcelNumber} setParcelStatus={setParcelStatus}/>
        case 'WRONG':
            return <Result
                status="warning"
                title="No se ha encontrado el paquete"
                extra={
                    <Button type="primary" key="console" onClick={() => setParcelNumber(undefined)}>
                        Volver a intentarlo
                    </Button>
                }
            />
        default:
            return <ParcelInfo setParcelNumber={setParcelNumber} parcelStatus={parcelStatus}/>
    }
};

export default RecipientHome;