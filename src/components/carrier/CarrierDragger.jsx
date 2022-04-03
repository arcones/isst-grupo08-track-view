import React, {useState} from "react";
import {Upload, message, Image, Card, Space, Result, Alert, Button} from 'antd';
import {InboxOutlined} from '@ant-design/icons';
import Meta from "antd/es/card/Meta";

import CSVToJson from 'csvtojson'
import {loadParcels} from "../../services/TrackerMasterAPI";

const {Dragger} = Upload;

const CarrierDragger = ({carrierName, uploadOK, setUploadOK}) => {

    const props = {
        name: 'file',
        multiple: false,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const {status} = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        beforeUpload(file) {
            const reader = new FileReader();
            reader.onload = e => {
                CSVToJson().fromString(e.target.result)
                    .then(output => {
                        loadParcels(carrierName, output)
                            .then(() => setUploadOK(true))
                            .catch(() => setUploadOK(false))
                    })
                    .catch(error => console.log(error))
            };
            reader.readAsText(file);
            return true;
        }
    };


    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            {uploadOK === false ?
                <Result
                    status="warning"
                    title="Ha habido problemas al cargar sus archivos"
                    extra={
                        <Button type="primary" key="console" onClick={() => setUploadOK(undefined)} className="boton">
                            Volver a intentarlo
                        </Button>
                    }
                />
                :
                <Space direction="horizontal" align="center" size="large" style={{display: 'flex'}}>
                    <Card
                        style={{width: 240}}
                        cover={<img alt="example"
                                    src="https://blog.boxme.asia/wp-content/uploads/2018/07/Cross-border-mobile.png"/>}
                    >
                        <Meta title={carrierName.toUpperCase()}
                              style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}/>
                    </Card>
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined/>
                        </p>
                        <p className="ant-upload-text">Arrastre aquí sus ficheros</p>
                        <p className="ant-upload-hint">
                            Solo se admite formato csv
                        </p>
                    </Dragger>
                </Space>
            }
        </div>
    )
};

export default CarrierDragger;