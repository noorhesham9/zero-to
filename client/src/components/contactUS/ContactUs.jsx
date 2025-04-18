/* eslint-disable react/prop-types */
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import { Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
function ContactUs({ activeIndex, visitedSlides }) {
  const sentence = "Contact Form"; // Your text
  const words = sentence.split(" ");

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().matches(
      /^[0-9]{10,15}$/,
      "Phone number must be valid"
    ),

    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  // Submit handler
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    // You can send values to the server here (e.g., via Axios)
    resetForm();
  };
  return (
    <Box
      className="ContactUsBox"
      sx={{
        backgroundImage: "url('./backgroundContact.webp')",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container
        sx={{
          color: "white",
          textAlign: "left",
        }}
      >
        <AnimatePresence>
          <Box
            sx={{
              position: "relative",
              top: 0,
              left: 0,
              height: "100%",
              zIndex: 10,
              marginLeft: {
                xs: "15px",
                sm: "135px",
              },
            }}
          >
            <div className="aboutUsTitle">
              <motion.span
                initial={{ width: 0 }}
                animate={
                  visitedSlides.has(6)
                    ? { width: "50px" } // No animation if already visited
                    : activeIndex === 6
                    ? { width: "50px" }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  visitedSlides.has(6)
                    ? { opacity: 1 } // No animation if already visited
                    : activeIndex === 6
                    ? { opacity: 1 }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.9 }}
                viewport={{ once: true }}
              >
                Contacts
              </motion.div>
            </div>
            <div className="aboutUsText">
              {words.map((word, index) => (
                <div
                  key={index}
                  style={{
                    display: "inline-block",
                    marginRight: "5px",
                  }}
                >
                  <motion.span
                    initial={{
                      opacity: 0,
                    }}
                    viewport={{ once: true }}
                    animate={
                      visitedSlides.has(6)
                        ? {
                            opacity: 1,
                          }
                        : activeIndex === 6
                        ? {
                            opacity: 1,
                          }
                        : {}
                    }
                    transition={{ duration: 0.7, delay: 1.4 + 0.2 * index }}
                  >
                    {word + " "}
                  </motion.span>
                </div>
              ))}
            </div>

            <Box className="aboutUsDescription">
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  visitedSlides.has(6)
                    ? { opacity: 1 } // No animation if already visited
                    : activeIndex === 6
                    ? { opacity: 1 }
                    : {}
                }
                transition={{ duration: 0.7, delay: 1.4 + 0.2 * 3 }}
                viewport={{ once: true }}
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    marginTop: " 20px",
                    marginBottom: " 20px",
                    width: "100% ",
                    position: "relative",
                  }}
                >
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      phoneNumber: "",
                      subject: "",
                      message: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ values }) => {
                      console.log(values);
                      return (
                        <Form
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "3px",
                            width: "100%",
                            margin: "0px auto 15px",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "3px",
                            }}
                          >
                            <Field
                              as={TextField}
                              type="text"
                              name="name"
                              variant="filled"
                              label="Name"
                              size="small"
                              sx={{
                                backgroundColor: "white",
                                opacity: 0.8,
                                width: "100%",
                                borderRadius: "5px",
                              }}
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              style={{
                                fontFamily: "var(--font-headding)",
                                fontSize: "15px",
                                color: "red",
                              }}
                            />
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              gap: "3px",
                              flexDirection: "column",
                            }}
                          >
                            <Field
                              size="small"
                              as={TextField}
                              type="email"
                              name="email"
                              variant="filled"
                              label="Email"
                              sx={{
                                backgroundColor: "white",
                                opacity: 0.8,
                                width: "100%",
                                borderRadius: "5px",
                              }}
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              style={{
                                width: "210px",
                                fontFamily: "var(--font-headding)",
                                fontSize: "15px",
                                color: "red",
                              }}
                            />
                          </Box>

                          <Box
                            sx={{
                              display: "flex",
                              height: "fit-content",
                              gap: "3px",
                              flexDirection: "column",
                            }}
                          >
                            <Field
                              as={TextField}
                              type="text"
                              size="small"
                              name="phoneNumber"
                              variant="filled"
                              label="Phone Number"
                              sx={{
                                height: "fit-content",
                                backgroundColor: "white",
                                opacity: 0.8,
                                width: "100%",
                                borderRadius: "5px",
                              }}
                            />
                            <ErrorMessage
                              name="phoneNumber"
                              component="div"
                              style={{
                                width: "210px",
                                fontFamily: "var(--font-headding)",
                                fontSize: "15px",
                                color: "red",
                              }}
                            />
                          </Box>

                          <div>
                            <Field name="subject">
                              {({ field, form }) => (
                                <Autocomplete
                                  size="small"
                                  sx={{
                                    width: "100%",
                                  }}
                                  options={[
                                    "General Inquiry",
                                    "Support",
                                    "Feedback",
                                  ]}
                                  value={form.values.subject}
                                  onChange={(e, newValue) => {
                                    form.setFieldValue("subject", newValue);
                                  }}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Subject"
                                      variant="filled"
                                      name="subject"
                                      sx={{
                                        backgroundColor: "white",
                                        opacity: 0.8,
                                        borderRadius: "5px",
                                      }}
                                    />
                                  )}
                                />
                              )}
                            </Field>
                            <ErrorMessage
                              name="subject"
                              component="div"
                              style={{
                                width: "210px",
                                fontFamily: "var(--font-headding)",
                                fontSize: "15px",
                                color: "red",
                              }}
                            />
                          </div>

                          <Box
                            sx={{
                              display: "flex",
                              gap: "3px",
                              flexDirection: "column",
                            }}
                          >
                            <Field
                              as={Textarea}
                              minRows={2}
                              maxRows={3}
                              sx={{
                                backgroundColor: "white",
                                opacity: 0.8,
                                width: "100%",
                                borderRadius: "5px",
                              }}
                              name="message"
                              placeholder="Message"
                            />
                            <ErrorMessage
                              name="message"
                              component="div"
                              style={{
                                width: "210px",
                                fontFamily: "var(--font-headding)",
                                fontSize: "15px",
                                color: "red",
                              }}
                            />
                          </Box>

                          <Button
                            sx={{
                              backgroundColor: "white",
                              width: "100%",
                              color: "#e6a421",
                              fontFamily: "Caveat, cursive",
                              fontSize: "20px",
                              borderRadius: "5px",
                              "&:hover": {
                                backgroundColor: "#e6a421",
                                color: "white",
                              },
                            }}
                            type="submit"
                          >
                            Send
                          </Button>
                        </Form>
                      );
                    }}
                  </Formik>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </AnimatePresence>
      </Container>
    </Box>
  );
}

export default ContactUs;
