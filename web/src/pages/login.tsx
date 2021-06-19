import React from "react";
import { Form, Formik } from "formik";
import { Box, Button } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../Utilities/toErrorMap";
import { useRouter } from "next/router";

const Login: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, register] = useLoginMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const res = await register(values);
          console.log(res.data?.login);
          if (res.data?.login.error) {
            setErrors(toErrorMap(res.data.login.error));
          } else if (res.data?.login.user) {
            // register complete
            //   navigate to home page
            router.push("/");
          }
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <InputField
              label="Username"
              name="username"
              placeholder="username"
            ></InputField>
            <Box mt={6}>
              <InputField
                label="Password"
                name="password"
                placeholder="password"
                type={"password"}
              ></InputField>
            </Box>
            <Button
              mt={4}
              mx="auto"
              type="submit"
              colorScheme="teal"
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
export default Login;
