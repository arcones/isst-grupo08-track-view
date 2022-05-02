import React from "react";
import {Table} from "antd";

const ParcelsTable = () => {
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
        <Table dataSource={dataSource} columns={columns} />
    )
};

export default ParcelsTable;