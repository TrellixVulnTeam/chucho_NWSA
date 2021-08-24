import React, { useState } from "react";
import { Button, Input, Form, Modal, Row, Col } from "antd";
import { useHistory, useLocation } from "react-router-dom";

function Screens({ message, setMessage, messageType, setActive }) {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const tabs = ["1", "2"];
  const msg = [
    {
      title: "¡Bien hecho!",
      subTitle: "Ahora necesitamos conocer la cultura de tu empresa",
      text: "El papel de la cultura organizacional es esencial, pues constituye un motor que permite a la organización caminar hacia un mismo lugar, ya que determina las acciones y actitudes que deben tomarse en consideración para lograr los objetivos.",
      btn: "Continuar",
      url: () => {
        setActive(tabs[1]);
        setMessage(false);
      },
    },
    {
      title: "¡Listo!",
      subTitle: "Ahora tu talento",
      text: "Esta información ayuda a identificar de mejor manera el talento de tu organización, asignar funciones especificas a cada uno, facilitar la toma de decisiones.",
      text2:
        "Igualmente esta parte la puedes realizar al cargar de forma masiva los datos o de forma manual. Con el fin de que conozcas qué datos se necesitan para cada puesto vamos a realizar uno de forma manual.",
      btn: "Continuar",
      url: () => {
        history.push({
          pathname: "/organigrama/areasandpositions-collaborator",
        });
      },
    },
  ];

  return (
    <>
      <Modal
        className="middleModal"
        title={false}
        visible={message}
        closable={false}
        footer={false}
      >
        <h3>{msg[messageType].title}</h3>
        <h3>{msg[messageType].subTitle}</h3>
        <br />
        <p style={{ textAlign: "justify" }}>{msg[messageType].text}</p>
        <p style={{ textAlign: "justify" }}>{msg[messageType].text2}</p>
        <br />
        <Button
          style={{ width: "50%" }}
          onClick={msg[messageType].url}
          className="primary"
        >
          {msg[messageType].btn}
        </Button>
      </Modal>
    </>
  );
}

export default Screens;