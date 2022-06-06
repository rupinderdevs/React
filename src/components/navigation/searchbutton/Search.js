import React, { useState } from "react";
import "./style.scss";
import { AutoComplete, Modal } from "antd";

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const Search = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions( !searchText ? [] : [mockVal(searchText)]);
  };

  const onSelect = (data) => {  
    console.log("onSelect", data);
  };

  const searchweb = () => {
    setIsModalVisible(true);
  };
  console.log("icon clicked");

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="searchicon">
      <img src={props.icon} alt={props.alt} onClick={searchweb} />
      <Modal
        visible={isModalVisible}
        footer={null}
        // onOk={handleOk}
        onCancel={handleCancel}
      >
        <AutoComplete
          options={options}
          style={{width: 300,}}
          onSelect={onSelect}
          onSearch={onSearch}
          placeholder="Search Your Keyword"
        />
      </Modal>
    </div>
  );
};

export default Search;
