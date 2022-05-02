import React, {useState} from "react";
import {Space, Result, Button, Divider} from 'antd';
import FileDragger from "./FileDragger";

const Upload = ({carrierName, setCredentials}) => {
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
                        : <FileDragger carrierName={carrierName} uploadOK={uploadOK} setUploadOK={setUploadOK}/>
                    }
                </Space>
            </div>
            <Divider/>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Button type="primary" size="large" onClick={() => setCredentials(undefined)} className="boton">Salir</Button>
            </div>
        </>
    )
};

export default Upload;