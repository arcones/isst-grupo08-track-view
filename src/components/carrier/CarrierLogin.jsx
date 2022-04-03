import React from 'react';
import {Alert, Button, Col, Input, Space} from "antd";
import {UserOutlined} from "@ant-design/icons";

const CarrierLogin = ({credentials, setCredentials, checkCredentials, setUser, setPassword}) => {
    return (
        <div style={{display: 'flex'}}>
            <Col span={8}/>
            <Col span={8}>
                <Space direction="vertical" align="center" size="large" style={{display: 'flex'}}>
                    {credentials !== undefined && <Alert message="Las credenciales introducidas son incorrectas" type="error"/>}
                    <Input
                        size="large"
                        placeholder="Usuario"
                        prefix={<UserOutlined/>}
                        onChange={event => {
                            setUser(event.target.value)
                            setCredentials(undefined)
                        }}/>
                    <Input.Password
                        size="large"
                        placeholder="Contraseña"
                        onChange={event => {
                            setPassword(event.target.value)
                            setCredentials(undefined)
                        }}/>
                    <Button type="primary"  size="large" onClick={() => checkCredentials()}>Login</Button>
                </Space>
            </Col>
            <Col span={8}/>
        </div>
    );
}

export default CarrierLogin;