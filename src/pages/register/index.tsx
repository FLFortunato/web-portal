import { Avatar, Button, Grid, TextField, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { getAllUsers, registerUser } from "../../store/user/action";

const RegisterPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Nome é requerido"),
      email: yup.string().email().required("Email é requerido"),
      password: yup.string().required("Senha é requerida"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "As Senhas não conferem")
        .required(),
    }),

    onSubmit: (values) => {
      dispatch(registerUser(values));
      form.resetForm();
    },
  });

  const formFields = [
    {
      name: "name",
      label: "Name",
      value: form.values.name,
      error: form.errors.name,
      helper: form.touched.name,
    },
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
    {
      name: "confirmPassword",
      label: "Confirm Passowrd",
      value: form.values.confirmPassword,
      error: form.errors.confirmPassword,
      type: "password",
      helper: form.touched.confirmPassword,
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
        Register
      </Typography>

      <Grid item>
        <form onSubmit={form.handleSubmit}>
          {formFields?.map((item) => {
            return (
              <TextField
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
            Register
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
