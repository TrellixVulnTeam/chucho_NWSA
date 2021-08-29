import React from "react";
import { Button, Col, Modal, Row } from "antd";
import { CgSoftwareUpload } from "react-icons/cg";
import { Link } from "react-router-dom";

function ModalExpedientUp({ expedientUp, setExpedientUp }) {
  return (
    <>
      <Modal
        title="Expediente: Marco Antonio Remirez Perez"
        className="largeModal"
        visible={expedientUp}
        onCancel={() => {
          setExpedientUp(false);
        }}
        footer={[
          <Button
            style={{ marginRight: "15px" }}
            className="secondary"
            onClick={() => {
              setExpedientUp(false);
            }}
          >
            Cancelar
          </Button>,
          <Button
            className="primary"
            onClick={() => {
              setExpedientUp(false);
            }}
          >
            Guardar
          </Button>,
        ]}
      >
        <Row
          className="dividerBottomFull"
          style={{ textAlign: "center", paddingBottom: "15px" }}
        >
          <Col span={7}>
            <b>Documento</b>
          </Col>
          <Col span={6}>
            <b>Estatus</b>
          </Col>
          <Col span={7}>
            <b>Fecha de carga</b>
          </Col>
          <Col span={4}>
            <b>Acciones</b>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Comprobante de Ingresos
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}>
            No adjuntado
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={7}>
            10 MAY 2016
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={3}>
            <Link className="iconGreen" style={{ fontSize: "26px" }} to="#">
              <CgSoftwareUpload
                style={{ position: "absolute", marginTop: "-3px" }}
              />
            </Link>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Comprobante de Estudios
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}>
            No adjuntado
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={7}>
            10 MAY 2016
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={3}>
            <Link className="iconGreen" style={{ fontSize: "26px" }} to="#">
              <CgSoftwareUpload
                style={{ position: "absolute", marginTop: "-3px" }}
              />
            </Link>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Comprobante de Domicilio
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}>
            No adjuntado
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={7}>
            10 MAY 2016
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={3}>
            <Link className="iconGreen" style={{ fontSize: "26px" }} to="#">
              <CgSoftwareUpload
                style={{ position: "absolute", marginTop: "-3px" }}
              />
            </Link>
          </Col>
        </Row>

        <Row
          className="dividerBottomFull"
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Identificación Oficial
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}>
            No adjuntado
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={7}>
            10 MAY 2016
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={3}>
            <Link className="iconGreen" style={{ fontSize: "26px" }} to="#">
              <CgSoftwareUpload
                style={{ position: "absolute", marginTop: "-3px" }}
              />
            </Link>
          </Col>
        </Row>

        <Row
          style={{
            textAlign: "center",
            marginTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Col style={{ textAlign: "left", paddingLeft: "20px" }} span={7}>
            Identificación Oficial
          </Col>
          <Col style={{ paddingLeft: "15px" }} span={6}>
            No adjuntado
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={7}>
            10 MAY 2016
          </Col>
          <Col style={{ paddingLeft: "10px" }} span={3}>
            <Link className="iconGreen" style={{ fontSize: "26px" }} to="#">
              <CgSoftwareUpload
                style={{ position: "absolute", marginTop: "-3px" }}
              />
            </Link>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

export default ModalExpedientUp;