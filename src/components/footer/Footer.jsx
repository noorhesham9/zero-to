import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "50px",
        // background: "#333",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        boxSizing: "border-box",
        zIndex: 1000,
        pointerEvents: "none" /* Allow interactions with underlying elements */,
      }}
    >
      <Box
        sx={{
          display: "flex",
          //   justifyContent: "center",
          justifyContent: {
            xs: "flex-end",
            md: "center",
            lg: "center",
            xl: "center",
          },
          alignItems: "center",
          width: "100%",
          position: "relative",
          padding: "0 20px",
          gap: "15px",
          pointerEvents: "auto",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          &copy;2025{" "}
          <span
            style={{
              fontWeight: "bold",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            Zero To,
          </span>
          All rights reserved.
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "7px",
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
              }}
              icon={faFacebookF}
            />
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
              }}
              icon={faInstagram}
            />
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
              }}
              icon={faWhatsapp}
            />{" "}
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
              }}
              icon={faTiktok}
            />{" "}
          </a>
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <FontAwesomeIcon
              style={{
                fontSize: "20px",
              }}
              icon={faTwitter}
            />{" "}
          </a>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
