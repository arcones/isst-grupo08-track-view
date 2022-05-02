import React from "react";
import {Button, Layout, PageHeader, Table} from "antd";
import Title from "antd/es/typography/Title";
import {Content, Footer} from "antd/es/layout/layout";

const ParcelsTable = ({username, setCredentials}) => {
    const dataSource = [
        {
            key: '1',
            tracking_number: 'ES12345SIJSBN',
            carrier: 'seur',
            status: 'Entregado',
        },
        {
            key: '2',
            tracking_number: 'YDGAS654564_DS',
            carrier: 'mrw',
            status: 'Error en la entrega',
        },
    ];

    const columns = [
        {
            title: 'Número de seguimiento',
            dataIndex: 'tracking_number',
            key: 'tracking_number',
        },
        {
            title: 'Transportista',
            dataIndex: 'carrier',
            key: 'carrier',
        },
        {
            title: 'Estado',
            dataIndex: 'status',
            key: 'status',
        },
    ];

    return (
        <Layout className="background">
            <PageHeader>
                <Title type="danger">Hola {username}!</Title>
            </PageHeader>
            <Content>
                <Table dataSource={dataSource} columns={columns} pagination={false}
                       title={() => 'Aquí está el resumen de tus pedidos'}/>
            </Content>
            <Footer className="background">
                <Button type="primary" size="large" onClick={() => setCredentials(undefined)} className="boton">Salir</Button>
            </Footer>
        </Layout>
    )
};

export default ParcelsTable;