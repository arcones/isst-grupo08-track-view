import React, {useState} from "react";
import {Space, Result, Button} from 'antd';
import CarrierDragger from "./CarrierDragger";

const CarrierUpload = ({carrierName, setCredentials}) => {
    const [uploadOK, setUploadOK] = useState()

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Space direction="horizontal" align="center" size="large" style={{display: 'flex'}}>
                {uploadOK === true ?
                    <Result
                        status="success"
                        title="¡Gracias! Paquetes cargados correctamente"
                        subTitle="Sus receptores podrán consultar el estado de sus paquetes a partir de ahora"
                        extra={[
                            <Button type="primary" key="console" onClick={() => setCredentials(false)}>Salir</Button>
                        ]}
                    />
                    : <CarrierDragger carrierName={carrierName} uploadOK={uploadOK} setUploadOK={setUploadOK}/>
                }
            </Space>
        </div>
    )
};

export default CarrierUpload;