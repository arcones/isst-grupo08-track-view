import React from "react";
import {Button, Card, Divider, Space, Steps} from 'antd';
import Meta from "antd/es/card/Meta";

const {Step} = Steps;

const ParcelInfo = ({setParcelNumber, parcelStatus}) => (
    <>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Space direction="horizontal" align="center" size="large" style={{display: 'flex'}}>
                <Card
                    style={{width: 240}}
                    cover={<img alt="example"
                                src="https://www.cliparts101.com/files/731/88DF3569AABBD2AFA1182EFCA96323FF/parcel_01.png"/>}
                >
                    <Meta title="ÉXITO" description="Su paquete ha sido localizado"
                          style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}/>
                </Card>
                <Steps direction={"vertical"} current={parcelStatus}>
                    <Step title="En el almacén"
                          description="Su paquete está en el almacén esperando a ser asignado a un repartidor"/>
                    <Step title="En ruta"
                          description="Su paquete ha sido recogido por el repartidor que se lo entregará proximamente"/>
                    <Step title="Recibido" description="Su paquete fue entregado en su domicilio"/>
                    <Step title="Error en la entrega"
                          description="Póngase en contacto con el transportista"/>
                </Steps>
            </Space>
        </div>
        <Divider/>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button type="primary" danger onClick={() => setParcelNumber(undefined)}>Salir</Button>
        </div>
    </>
);

export default ParcelInfo;