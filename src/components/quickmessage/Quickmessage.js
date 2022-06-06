import React, { useState } from 'react';
import { Modal } from 'antd';
import Contactform from '../form/Contactform';

const App = (props) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
  
      <div onClick={showModal} className='slidermessage'><img src={props.messagei} alt={"Message"} /></div>

      <Modal
        title="Have any Query"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Contactform>{modalText}</Contactform>
      </Modal>
    </>
  );
};

export default App;
