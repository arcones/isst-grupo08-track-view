import React, {useState} from "react";
import {Space, Result, Button, Divider} from 'antd';
import CarrierDragger from "./CarrierDragger";

const CarrierUpload = ({carrierName, setCredentials}) => {
    const [uploadOK, setUploadOK] = useState()

    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Space direction="horizontal" align="center" size="large" style={{display: 'flex'}}>
                    {uploadOK === true ?
                        <Result
                            status="success"
                            title="¡Gracias! Paquetes cargados correctamente"
                            subTitle="Sus receptores podrán consultar el estado de sus paquetes a partir de ahora"
                        />
                        : <CarrierDragger carrierName={carrierName} uploadOK={uploadOK} setUploadOK={setUploadOK}/>
                    }
                </Space>
            </div>
            <Divider/>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Button type="primary" danger onClick={() => setCredentials(undefined)}>Salir</Button>
            </div>
        </>
    )
};

export default CarrierUpload;