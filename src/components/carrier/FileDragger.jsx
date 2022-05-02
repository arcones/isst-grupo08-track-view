import React from "react";
import {Button, message, Result, Space, Upload} from 'antd';
import {InboxOutlined} from '@ant-design/icons';

import CSVToJson from 'csvtojson'
import {loadParcels} from "../../services/TrackerMasterAPI";

const {Dragger} = Upload;

const FileDragger = ({carrierName, uploadOK, setUploadOK}) => {

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
                <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                    <Dragger {...props}>
                        <p className="icon">
                            <InboxOutlined/>
                        </p>
                        <p className="ant-upload-text">Arrastre aquí sus ficheros</p>
                        <p className="ant-upload-hint">
                            Solo se admite formato csv
                        </p>
                    </Dragger>
                </Space>
            }
        </>
    )
};

export default FileDragger;