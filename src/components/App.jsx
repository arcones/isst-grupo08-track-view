import React, {useEffect, useState} from 'react';
import {Layout, PageHeader, Result, Tabs} from 'antd';
import '../antdStyles.less'
import {Content} from "antd/es/layout/layout";
import {healthCheck} from "../services/TrackerMasterAPI";
import Title from "antd/es/typography/Title";
import UserHome from "./common/UserHome";

const {TabPane} = Tabs;

const App = () => {

    const [serverHealth, setServerHealth] = useState(true)

    useEffect(() => {
        setInterval(function () {
            healthCheck()
                .then(() => setServerHealth(true))
                .catch(() => setServerHealth(false))
        }, 60000)
    }, [serverHealth])

    return (<>
        <Layout style={{backgroundColor: "white"}}>
            <PageHeader>
                <Title type="danger">Trackermaster</Title>
            </PageHeader>
            <Content>
                {serverHealth ?
                    <Tabs centered size="large" defaultActiveKey="1" className="tabs">
                        <TabPane tab="Soy receptor/a" key="1">
                            <UserHome role="Recipient"/>
                        </TabPane>
                        <TabPane tab="Soy transportista" key="2">
                            <UserHome role="Carrier"/>
                        </TabPane>
                    </Tabs>
                    :
                    <Result
                        status="error"
                        title="Parece que nuestros servidores están teniendo problemas"
                        subTitle="Vuelve a intentarlo en unos momentos..."
                    />
                }
            </Content>
        </Layout>
    </>)
};

export default App;

