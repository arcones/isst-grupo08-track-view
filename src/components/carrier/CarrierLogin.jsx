import React from 'react';
import {Alert, Button, Col, Input, Space} from "antd";
import {UserOutlined} from "@ant-design/icons";

const CarrierLogin = ({credentials, setCredentials, checkCredentials, setUser, setPassword}) => {
    return (
        <div style={{display: 'flex'}}>
            <Col span={8}/>
            <Col span={8}>
                <Space direction="vertical" align="center" size="large" style={{display: 'flex'}}>
                    {credentials !== undefined && <Alert message="Las credenciales introducidas son incorrectas" type="error" className="alert"/>}
                    <Input
                        size="large"
                        placeholder="Usuario"
                        prefix={<UserOutlined/>}
                        onChange={event => {
                            setUser(event.target.value)
                            setCredentials(undefined)
                        } }className="bar"/>
                    <Input.Password
                        size="large"
                        placeholder="Contraseña"
                        onChange={event => {
                            setPassword(event.target.value)
                            setCredentials(undefined)
                        }} className="bar"/>
                    <Button type="primary"  size="large" onClick={() => checkCredentials()} className= "boton">Login</Button>
                </Space>
            </Col>
            <Col span={8}/>
        </div>
    );
}

export default CarrierLogin;