import React, {useState} from "react";
import {Button, Layout, PageHeader, Result} from 'antd';
import FileDragger from "./FileDragger";
import Title from "antd/es/typography/Title";
import {Content, Footer} from "antd/es/layout/layout";

const Load = ({carrierName, setCredentials}) => {
    const [uploadOK, setUploadOK] = useState()

    return (
        <Layout className="background">
            <PageHeader>
                <Title type="danger">Hola {carrierName}!</Title>
            </PageHeader>
            <Content>
                {uploadOK === true ?
                    <Result
                        status="success"
                        title="¡Gracias! Paquetes cargados correctamente"
                        subTitle="Sus receptores podrán consultar el estado de sus paquetes a partir de ahora"
                    />
                    : <FileDragger carrierName={carrierName} uploadOK={uploadOK} setUploadOK={setUploadOK}/>
                }
            </Content>
            <Footer className="background">
                <Button type="primary" size="large" onClick={() => setCredentials(undefined)}
                        className="boton">Salir</Button>
            </Footer>
        </Layout>

    )
};

export default Load;