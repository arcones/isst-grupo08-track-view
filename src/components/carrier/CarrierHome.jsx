import React from "react";
import {Button, Col, Input, Row, Space} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useState} from "react";
import CarrierUpload from "./CarrierUpload";

const CarrierHome = () => {

    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const [correctCredentials, setCorrectCredentials] = useState(false)

    const checkCredentials = () => {
        if (user === 'admin' && password === 'admin') setCorrectCredentials(true)
    }

    return (<>
        {correctCredentials ?
            <CarrierUpload/>
            :
            <Row>
                <Col span={8}/>
                <Col span={8}>
                    <Space direction="vertical" align="center" size="middle" style={{display: 'flex'}}>
                        <Input size="large" placeholder="Usuario" prefix={<UserOutlined/>}
                               onChange={event => setUser(event.target.value)}/>
                        <Input.Password size="large" placeholder="Contraseña" prefix={<LockOutlined/>}
                                        onChange={event => setPassword(event.target.value)}/>
                        <Button type="primary" onClick={() => checkCredentials()}>Login</Button>
                    </Space>

                </Col>
                <Col span={8}/>
            </Row>}
    </>)
};

export default CarrierHome;