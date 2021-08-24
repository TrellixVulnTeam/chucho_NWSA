import React, { useState } from "react";
import { Col, Input, Row, Form } from "antd";

import { IoMdSquare, IoMdTrash } from "react-icons/io";
import { PlusCircleOutlined } from "@ant-design/icons";
import { RiPencilFill } from "react-icons/ri";
import { BiGridVertical } from "react-icons/bi";
import SubAreasList from "../SubAreasList/SubAreasList";
import { useForm } from "antd/lib/form/Form";
import { v4 as uuid } from "uuid";

function AreasList({
  Areas,
  setModalMove,
  setinputArea,
  formp,
  setEditionMode,
  setArea,
  setPassword,
}) {
  const [inputSubArea, setinputSubArea] = useState("show");
  const [form] = useForm();
  const [editionModeSub, setEditionModeSub] = useState(false);
  const [subAreas, setSubAreas] = useState([]);
  const [subArea, setSubArea] = useState();
  const [item, setItem] = useState("");

  const sendSubArea = (e, index) => {
    e.preventDefault();
    setSubAreas([
      ...subAreas,
      {
        idSubArea: subAreas.length,
        item: index,
        subareaName: e.target.value,
      },
    ]);
    let input = document.getElementById("inputArea" + index);
    input.setAttribute("style", "display: none");
    form.resetFields();
  };

  const editSubArea = (e, index) => {
    e.preventDefault();
    subAreas[subArea.idSubArea].subareaName = e.target.value;
    hideInput(index);
    setEditionModeSub(false);
  };

  const edit = (area) => {
    setArea(area);
    formp.setFieldsValue({
      area: area.areaName,
    });
    setEditionMode(true);
    setinputArea("show");
  };

  const showInput = (index) => {
    let input = document.getElementById("inputArea" + index);
    input.setAttribute(
      "style",
      "width: 94%; margin-top: 2px; position: absolute; z-index: 9999; display: "
    );
  };

  const hideInput = (index) => {
    let input = document.getElementById("inputArea" + index);
    input.setAttribute("style", "display: none");
  };

  return (
    <>
      {Areas.map((area, index) => (
        <div>
          <Row
            className="areasdiv"
            style={{ marginTop: "20px", paddingLeft: "10px" }}
          >
            <Col span={18} style={{ textAlign: "left" }}>
              <IoMdSquare className="iconGray" /> {area.areaName}
            </Col>
            <Col
              style={{
                textAlign: "right",
                paddingRight: "10px",
              }}
              span={2}
            >
              <PlusCircleOutlined
                onClick={() => {
                  showInput(index);
                }}
                className="iconGreen iconsize"
              />
            </Col>
            <Col
              style={{
                textAlign: "right",
                paddingRight: "25px",
                fontSize: "14px",
              }}
              span={1}
            >
              <RiPencilFill
                onClick={() => {
                  edit(area);
                }}
                className="iconGreen iconsize"
              />
            </Col>
            <Col
              style={{
                textAlign: "right",
                paddingRight: "25px",
              }}
              span={1}
            >
              <BiGridVertical className="iconGreen iconsize" />
            </Col>
            <Col
              style={{
                textAlign: "right",
                paddingRight: "5px",
              }}
              span={1}
            >
              <IoMdTrash
                onClick={() => {
                  setModalMove({
                    visible: true,
                    mode: 0,
                    idArea: area.idArea,
                    Areas: Areas,
                  });
                }}
                className="iconGreen iconsize"
              />
            </Col>
          </Row>
          <Row
            id={"inputArea" + index}
            className={inputSubArea}
            style={{
              display: "none",
            }}
          >
            <Col span={24}>
              <Form
                initialValues={{
                  area: "",
                }}
                form={form}
              >
                <Form.Item name={"area" + index}>
                  <Input
                    onPressEnter={
                      editionModeSub
                        ? (e) => editSubArea(e, index)
                        : (e) => sendSubArea(e, index)
                    }
                    value={subArea}
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <div>
            {subAreas.map((subArea, item) =>
              subArea.item === area.idArea ? (
                <SubAreasList
                  key={item}
                  setModalMove={setModalMove}
                  subArea={subArea}
                  setSubArea={setSubArea}
                  subAreas={subAreas}
                  setPassword={setPassword}
                  setSubAreas={setSubAreas}
                  form={form}
                  setEditionModeSub={setEditionModeSub}
                  setinputSubArea={setinputSubArea}
                  showInput={showInput}
                  index={index}
                />
              ) : (
                ""
              )
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default AreasList;