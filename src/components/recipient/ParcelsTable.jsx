import React from "react";
import {Table} from "antd";

const ParcelsTable = ({columns, parcels}) => {
    return <Table dataSource={parcels} columns={columns} pagination={false}
                  title={() => 'Aquí está el resumen de tus pedidos 👇'}/>
};

export default ParcelsTable;