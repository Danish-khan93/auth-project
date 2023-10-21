import { Button, Typography, Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"
type SIGNUP = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const { register, handleSubmit, formState } = useForm<SIGNUP>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const { errors } = formState;

  const onSubmit = (data: SIGNUP) => {
    console.log(data);
  };
  return (
    <Box className="flex flex-col items-center gap-5">
      <Typography variant="h3">SING UP</Typography>
      <form
      noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5"
      >
        <TextField
          size="small"
          label="first name"
          placeholder="Enter First Name"
          {...register("firstName", {
            required: { value: true, message: "this field is requird" },
          })}
          error={!errors}
          helperText={errors?.firstName?.message}
        />
        <TextField
          size="small"
          label="Last name"
          placeholder="Enter Last Name"
          {...register("lastName", {
            required: { value: true, message: "this field is requird" },
          })}
          error={!errors}
          helperText={errors?.lastName?.message}
        />
        <TextField
          size="small"
          label="Email"
          placeholder="Enter First Name"
          {...register("email", {
            required: { value: true, message: "this field is requird" },
          })}
          error={!errors}
          helperText={errors?.email?.message}
        />
        <TextField
          size="small"
          label="Password"
          placeholder="Enter password"
          {...register("password", {
            required: { value: true, message: "this field is requird" },
          })}
          error={!errors}
          helperText={errors?.password?.message}
        />

        <Button type="submit">SIGN UP</Button>
      </form>
      <Typography>if you are already signup ? <Link to={"/signin"}>SignIn</Link></Typography>
    </Box>
  );
};

export default SignUp;
