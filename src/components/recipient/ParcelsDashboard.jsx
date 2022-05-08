import React, {useEffect, useState} from "react";
import {getParcels} from "../../services/TrackerMasterAPI";
import {Button, Layout, PageHeader} from "antd";
import Title from "antd/es/typography/Title";
import ParcelsTable from "./ParcelsTable";
import {Content, Footer} from "antd/es/layout/layout";

const ParcelsDashboard = ({username, setCredentials}) => {

    const [parcels, setParcels] = useState()

    const renameIdToKey = (parcel) => {
        parcel["key"] = parcel["id"];
        delete parcel["id"];
    }

    useEffect(() => {
        getParcels(username).then(response => {
            let parcelsForTable = response.data
            parcelsForTable.forEach(parcel => {
                renameIdToKey(parcel)
            })
            setParcels(parcelsForTable)
        }).catch(err => console.log(err))
    }, [])

    const columns = [
        {
            title: 'Número de seguimiento',
            dataIndex: 'trackingNumber',
            key: 'trackingNumber',
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
                    {parcels && <ParcelsTable columns={columns} parcels={parcels}/>}
            </Content>
            <Footer className="background">
                <Button type="primary" size="large" onClick={() => setCredentials(undefined)}
                        className="boton">Salir</Button>
            </Footer>
        </Layout>
    )
}


export default ParcelsDashboard;