import React from "react";
import {Button, message, Result, Space, Upload} from 'antd';
import {InboxOutlined} from '@ant-design/icons';

const {Dragger} = Upload;

const FileDragger = ({carrierName, uploadOK, setUploadOK}) => {

        const props = {
            name: 'parcels',
            multiple: false,
            action: `https://isst-grupo08-track-controller.herokuapp.com/parcels/${carrierName}`,
            onChange(info) {
                const {status} = info.file;
                if (status === 'done') {
                    setUploadOK(true)
                    message.success(`${info.file.name} file uploaded successfully.`)
                        .then(() => console.log(info.file))

                } else if (status === 'error') {
                    setUploadOK(false)
                    message.error(`${info.file.name} file upload failed.`)
                        .then(()=> console.log(info.file, info.error))
                }
            },
        };


        return (
            <>
                {uploadOK === false ?
                    <Result
                        status="warning"
                        title="Ha habido problemas al cargar sus archivos"
                        extra={
                            <Button type="primary" key="console" size="large" onClick={() => setUploadOK(undefined)}
                                    className="boton">
                                Volver a intentarlo
                            </Button>
                        }
                    />
                    :
                    <Space direction="vertical" size="large" style={{display: 'flex'}}>
                        <Dragger {...props}>
                            <p className="icon">
                                <InboxOutlined/>
                            </p>
                            <p className="ant-upload-text">Arrastre aquí su fichero</p>
                            <p className="ant-upload-hint">
                                Solo se admite formato csv
                            </p>
                        </Dragger>
                    </Space>
                }
            </>
        )
    }
;

export default FileDragger;