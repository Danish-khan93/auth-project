import { Button, Typography, Box, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"
type SIGNIN = {
  email: string;
  password: string;
};

const SignUp = () => {
  const { register, handleSubmit, formState } = useForm<SIGNIN>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { errors } = formState;

  const onSubmit = (data: SIGNIN) => {
    console.log(data);
  };
  return (
    <Box className="flex flex-col items-center gap-5">
      <Typography variant="h3">SING IN</Typography>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-5"
      >
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
      <Typography>if you are not signup ? <Link to={"/"}>SignUp</Link></Typography>
    </Box>
  );
};

export default SignUp;
