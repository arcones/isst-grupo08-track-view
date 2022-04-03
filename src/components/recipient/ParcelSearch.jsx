import React from "react";
import {Col, Input, Row} from 'antd';
import {getParcel} from "../../services/TrackerMasterAPI";

const ParcelSearch = ({setParcelNumber, setParcelStatus}) => {

    const mapParcelStatuses = (parcelStatus) => {
        switch (parcelStatus) {
            case "En tránsito":
                return 1
            case "Entregado":
                return 2
            case "Error en la entrega":
                return 3
        }
    }

    const getParcelInfo = (parcelNumber) => {
        return getParcel(parcelNumber)
            .then(response => {
                setParcelStatus(mapParcelStatuses(response.data.status))
                setParcelNumber(response.data.trackingNumber)
            })
            .catch(() => setParcelNumber("WRONG"))
    }

    return (
        <Row>
            <Col span={8}/>
            <Col span={8}>
                <Input.Search size="large" allowClear placeholder="Introduza su número de pedido..."
                              onSearch={value => getParcelInfo(value)}/>
            </Col>
            <Col span={8}/>
        </Row>
    )
};

export default ParcelSearch;