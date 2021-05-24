import React from "react";
import { Avatar, Button, Grid, TextField, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { AuthService } from "../../services/auth/auth.service";

const LoginPage = () => {
  const history = useHistory();

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required("Email é requerido"),
      password: yup.string().required("Senha é requerida"),
    }),

    onSubmit: (values) => {
      AuthService()
        .login(values)
        .then((res) => {
          localStorage.setItem("@info", res.data.info);
          localStorage.setItem("@token", res.data.access_token);
          history.push("/");
        });
      form.resetForm();
    },
  });

  const formFields = [
    {
      name: "email",
      label: "E-mail",
      value: form.values.email,
      error: form.errors.email,
      helper: form.touched.email,
    },
    {
      name: "password",
      label: "Password",
      value: form.values.password,
      error: form.errors.password,
      type: "password",
      helper: form.touched.password,
    },
  ];

  return (
    <Grid
      container
      spacing={1}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <Avatar color={"secondary"}>
          <LockOutlinedIcon color="secondary" />
        </Avatar>
      </Grid>

      <Typography component="h1" variant="h5">
        Login
      </Typography>

      <Grid item>
        <form onSubmit={form.handleSubmit}>
          {formFields?.map((item) => {
            return (
              <TextField
                key={item.name}
                style={{ marginTop: 15 }}
                fullWidth
                id={item.name}
                name={item.name}
                label={item.label}
                value={item.value}
                onChange={(e) => form.setFieldValue(item.name, e.target.value)}
                type={item.type}
                error={item.helper && Boolean(item.error)}
                helperText={item.helper && item.error}
              />
            );
          })}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            style={{ marginTop: 15 }}
          >
            Enter
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
