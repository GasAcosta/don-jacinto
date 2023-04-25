import { AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div style={{ marginTop: "30px" }}>
      <p
        style={{
          color: "#5843BE",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "14px",
          lineHeight: "21px",
        }}
      >
        Ponete en contacto
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 9px 3px rgba(0, 0, 0, 0.02)",
            padding: "10px 30px"
          }}
        >
          <AiOutlineInstagram size={30} color={"#5843BE"} />
        </div>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 9px 3px rgba(0, 0, 0, 0.02)",
            padding: "10px 30px"
          }}
        >
          <FiMail size={30} color={"#5843BE"} />
        </div>
        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 9px 3px rgba(0, 0, 0, 0.02)",
            padding: "10px 30px"
          }}
        >
          <BsWhatsapp size={30} color={"#5843BE"} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
