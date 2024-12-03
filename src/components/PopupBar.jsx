import React from "react";
import { Form } from "./Form";

export const PopupBar = ({ popupRef , setShow  }) => {
    
    
  return (
    <div
      ref={popupRef} 
    >
      <Form setShow= {setShow} />
    </div>
  );
};
