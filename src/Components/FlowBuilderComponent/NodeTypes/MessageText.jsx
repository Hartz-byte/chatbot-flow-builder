import React from "react";

import MessageIcon from "../../../assets/Icons/MessageIcon.png";
import WhatsappIcon from "../../../assets/Icons/WhatsappIcon.png";

const MessageText = ({ data: { amount } }) => {
  return (
    <div
      style={{
        width: "120px",
        height: "40px",
        borderRadius: "5px",
        boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* node head section */}
      <div
        style={{
          width: "100%",
          height: "15px",
          backgroundColor: "#B2F0E3",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* message icon and send message text */}
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "5px" }}
        >
          <img src={MessageIcon} alt="Message Icon" width="8" height="8" />

          <p style={{ fontSize: "7px", marginLeft: "5px" }}>Send Message</p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "50%",
            padding: "1px",
            backgroundColor: "#fff",
            marginRight: "5px",
          }}
        >
          <img src={WhatsappIcon} alt="Message Icon" width="8" height="8" />
        </div>
      </div>
    </div>
  );
};

export default MessageText;
