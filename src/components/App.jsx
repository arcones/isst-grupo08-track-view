import React, {useEffect, useState} from 'react';
import {Layout, Result, Tabs} from 'antd';
import '../antStyles.css'
import RecipientHome from "./recipient/RecipientHome";
import CarrierHome from "./carrier/CarrierHome";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Text from "antd/es/typography/Text";
import {healthCheck} from "../services/TrackerMasterAPI";

const {TabPane} = Tabs;

const App = () => {

    const [serverHealth, setServerHealth] = useState(true)

    useEffect(() => {
        setInterval(function () {
            healthCheck()
                .then(() => setServerHealth(true))
                .catch(() => setServerHealth(false))
        }, 1000)
    }, [serverHealth])

    return (<>
        {serverHealth ?
            <Layout>
                <Header theme="light">
                    <Text className="big-text">🚚 Trackermaster</Text>
                </Header>
                <Content theme="light" className="font" style={{backgroundColor: "#ffffff"}}>
                    <Tabs centered size="large" defaultActiveKey="1" className="tabs">
                        <TabPane tab="Soy receptor/a" key="1">
                            <RecipientHome/>
                        </TabPane>
                        <TabPane tab="Soy transportista" key="2">
                            <CarrierHome/>
                        </TabPane>
                    </Tabs>
                </Content>
                <Footer className="font" style={{textAlign: 'center', backgroundColor: "#dcdbf8", color: "#5e1fc6", fontWeight: "bold" }}>
                    ISST - Grupo08 - Curso 2021/22
                </Footer>
            </Layout>
            :
            <Layout>
                <Header theme="light">
                    <Text className="big-text">🚚 Trackermaster</Text>
                </Header>
                <Content theme="light" className="font" style={{backgroundColor: "#dcdbf8"}}>
                    <Result
                        status="error"
                        title="Parece que nuestros servidores están teniendo problemas"
                        subTitle="Vuelve a intentarlo en unos momentos..."
                    />
                </Content>
                <Footer className="font" style={{textAlign: 'center', backgroundColor: "#dcdbf8",  color: "#5e1fc6", fontWeight: "bold" }}>
                    ISST - Grupo08 - Curso 2021/22
                </Footer>
            </Layout>}
    </>)
};

export default App;

