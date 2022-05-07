import React, { useRef, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Alert, Button } from "@mui/material";

export default function Signup() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (e) {
      console.log({ e });
      setError(e.message);
    }
  }

  return (
    <div
      style={{ width: "50%", margin: "auto", marginTop: 50, marginBottom: 50 }}
    >
      <h2>Sign Up</h2>
      <Box sx={{ display: "block" }}>
        <div>
          <TextField
            label="Username"
            id="outlined-start-adornment"
            sx={{ m: 1, display: "block", marginTop: 2, maxWidth: "50ch" }}
            type="email"
            ref={emailRef}
            required
          />

          <FormControl
            sx={{ m: 1, width: "25ch", display: "block", marginTop: 2 }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              ref={passwordRef}
              required
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
        <Button
          type="submit"
          onClick={handleSubmit}
          style={{
            backgroundColor: "rgb(244,28,178)",
            border: "none",
            display: "block",
            width: "100%",
            color: "white",
            m: 1,
          }}
        >
          Log In
        </Button>
      </Box>

      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>
                Password <span>(Atleast 6 characters long)</span>
              </Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button
              className="w-100"
              type="submit"
              style={{
                backgroundColor: "rgb(244,28,178)",
                border: "none",
              }}
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card> */}
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}
