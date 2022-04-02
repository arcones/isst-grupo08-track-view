import React from 'react';
import {Tabs} from 'antd';

const {TabPane} = Tabs;

import '../antStyles.css'
import RecipientHome from "./recipient/RecipientHome";
import CarrierHome from "./carrier/CarrierHome";

const App = () => (
    <>
        <Tabs centered defaultActiveKey="1">
            <TabPane tab="Soy receptor" key="1">
                <RecipientHome/>
            </TabPane>
            <TabPane tab="Soy transportista" key="2">
                <CarrierHome/>
            </TabPane>
        </Tabs>
    </>
);

export default App;
