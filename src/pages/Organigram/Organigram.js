import React, { useEffect, useState } from "react";
import Zoom from "./components/Zoom/Zoom";

export default function Organigram({ setEraser }) {
  useEffect(() => {
    setEraser("hide");
  });

  return (
    <>
      <Zoom />
      <div style={{ marginTop: "30vh" }}></div>
    </>
  );
}