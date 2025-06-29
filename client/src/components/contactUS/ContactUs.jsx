/* eslint-disable react/prop-types */
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Collapse,
  createTheme,
  IconButton,
  TextField,
  ThemeProvider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { themeOptions } from "../../theme";
import axios from "axios";
import { useEffect, useState } from "react";
function ContactUs({ activeIndex, visitedSlides }) {
  const [open, setOpen] = useState(false);
  const [AlertData, setAlertData] = useState({
    severity: "",
    message: "",
  });
  const theme = createTheme(themeOptions);
  const sentence = "Contact Form";
  const words = sentence.split(" ");

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().matches(
      /^01[0125][0-9]{8}$/,
      "Invalid phone number format"
    ),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      console.log("Submitted!", values);
      axios
        .post("https://zero-to.vercel.app/Api/v1/sendMessage", {
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
          message: values.message,
        })
        .then((response) => {
          console.log("Response from server:", response.data);
          if (response.data.status === "success") {
            setAlertData({
              severity: "success",
              message: response.data.message,
            });
          } else {
            setAlertData({
              severity: "error",
              message: response.data.message,
            });
          }
          setOpen(true);
        })
        .catch((error) => {});
      resetForm();
    } catch (err) {
      console.error("Submission error", err);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 5000); // Close alert after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [open]);
  return (
    <Box
      className="ContactUsBox"
      sx={{
        backgroundImage: "url('./backgroundContact-min.jpg')",
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
                  visitedSlides.has(5)
                    ? { width: "50px" }
                    : activeIndex === 5
                    ? { width: "50px" }
                    : {}
                }
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              ></motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={
                  visitedSlides.has(5)
                    ? { opacity: 1 }
                    : activeIndex === 5
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
                      visitedSlides.has(5)
                        ? {
                            opacity: 1,
                          }
                        : activeIndex === 5
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
                  visitedSlides.has(5)
                    ? { opacity: 1 }
                    : activeIndex === 5
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
                  <ThemeProvider theme={theme}>
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        phoneNumber: "",
                        message: "",
                      }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ submitForm, values, errors }) => {
                        console.log(values);
                        console.log("Form Errors", errors);
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
                                sx={{
                                  border: "1px solid var(--secondary-color)",

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
                                as={TextField}
                                type="email"
                                name="email"
                                variant="filled"
                                label="Email"
                                sx={{
                                  border: "1px solid var(--secondary-color)",

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
                                name="phoneNumber"
                                variant="filled"
                                label="Phone Number"
                                sx={{
                                  height: "fit-content",
                                  backgroundColor: "white",
                                  opacity: 0.8,
                                  width: "100%",
                                  border: "1px solid var(--secondary-color)",

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

                            <Box
                              sx={{
                                display: "flex",
                                gap: "3px",
                                flexDirection: "column",
                              }}
                            >
                              <Field
                                as={TextField}
                                multiline
                                rows={2} // You can change the number of visible rows
                                sx={{
                                  backgroundColor: "white",
                                  opacity: 0.8,
                                  width: "100%",
                                  borderRadius: "5px",
                                  border: "1px solid var(--secondary-color)",
                                }}
                                name="message"
                                label="Your Message"
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
                                color: "var(--secondary-color)",
                                fontFamily: "Caveat, cursive",
                                fontSize: "20px",
                                borderRadius: "5px",
                                "&:hover": {
                                  backgroundColor: "var(--secondary-color)",
                                  color: "white",
                                },
                              }}
                              disabled={Object.keys(errors).length > 0}
                              type="submit"
                              onClick={() => {
                                console.log("buton clicked");
                                submitForm();
                              }}
                            >
                              Send
                            </Button>
                          </Form>
                        );
                      }}
                    </Formik>
                  </ThemeProvider>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </AnimatePresence>
      </Container>
      <Collapse
        sx={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          maxWidth: "100%",
          zIndex: 1000,
        }}
        in={open}
      >
        <Alert
          severity={AlertData.severity || "info"}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>
            {AlertData.severity === "success"
              ? "Success"
              : AlertData.severity === "error"
              ? "Error"
              : "Info"}
          </AlertTitle>
          {AlertData.message || "This is a default alert message."}
        </Alert>
      </Collapse>
    </Box>
  );
}

export default ContactUs;
