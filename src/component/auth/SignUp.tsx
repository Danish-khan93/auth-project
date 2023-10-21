import { Typography, Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

type SIGNUP = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const { register } = useForm<SIGNUP>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  return (
    <Box>
      <Typography>SING UP</Typography>
      <form className="flex flex-col items-center gap-5">
        <TextField
          size="small"
          label="first name"
          placeholder="Enter First Name"
          {...register("firstName", {
            required: { value: true, message: "this field is requird" },
          })}
        />
        <TextField
          size="small"
          label="Last name"
          placeholder="Enter Last Name"
          {...register("lastName", {
            required: { value: true, message: "this field is requird" },
          })}
        />
        <TextField
          size="small"
          label="Email"
          placeholder="Enter First Name"
          {...register("email", {
            required: { value: true, message: "this field is requird" },
          })}
        />
        <TextField
          size="small"
          label="Password"
          placeholder="Enter password"
          {...register("password", {
            required: { value: true, message: "this field is requird" },
          })}
        />
      </form>
    </Box>
  );
};

export default SignUp;
