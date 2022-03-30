import {Input} from 'antd';
import {Row, Col} from 'antd';
import {useState} from "react";
import {getParcel} from "../../services/TrackerMasterAPI";
import { Steps } from 'antd';
import {
    UserOutlined,
    SolutionOutlined,
    LoadingOutlined,
    SmileOutlined,
    SendOutlined,
    PlayCircleOutlined
} from '@ant-design/icons';

const { Step } = Steps;

const getParcelInfo = (parcelNumber) => {
    return getParcel(parcelNumber)
        .then(response => response.data)
}

const RecipientHome = () => {
    const [parcelNumber, setParcelNumber] = useState();

    return (
        <>
            {parcelNumber ?
                <Steps>
                    <Step status="finish" title="Iniciado" icon={<PlayCircleOutlined />} />
                    <Step status="finish" title="En ruta" icon={<SendOutlined />} />
                    <Step status="wait" title="Recibido" icon={<SmileOutlined />} />
                </Steps>
                :
                <Row>
                    <Col span={8}/>
                    <Col span={8}>
                        <Input.Search allowClear placeholder="Introduza su número de pedido.." onSearch={value => {
                            setParcelNumber(value)
                        }}/>
                    </Col>
                    <Col span={8}/>
                </Row>
            }
        </>
    )
};

export default RecipientHome;