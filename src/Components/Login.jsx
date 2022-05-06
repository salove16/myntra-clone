import React, { useRef, useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";
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
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (e) {
      console.log({ e });
      setError(e.message);
    }
  }

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

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h2>Log In</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <TextField
            label="Username"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            type="email"
            ref={emailRef}
            required
          />

          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
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
          }}
        >
          Log In
        </Button>
        <div className="w-100 text-center mt-3">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </Box>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>

      {/*Bootstrap  */}
      {/* <Card>
        <h2>Log In</h2> */}
      {/* {error && <Alert variant="danger">{error}</Alert>} */}

      {/* <Card.Body> */}
      {/* <h2 className="text-center mb-4">Log In</h2> */}
      {/* <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button
              className="w-100"
              type="submit"
              style={{
                backgroundColor: "rgb(244,28,178)",
                border: "none",
              }}
            >
              Log In
            </Button>
          </Form> */}
      {/* <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div> */}
    </div>
  );
}
