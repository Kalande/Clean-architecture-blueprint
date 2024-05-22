import React, { useState } from "react";
import MessageController from "../controller/MessageController";

function MessageView() {
  const [controller] = useState(new MessageController());

  return (
    <>
      <button onClick={() => controller.generateRandomMessage()}>GENERATE MESSAGE</button>
    </>
  );
}

export default MessageView;
