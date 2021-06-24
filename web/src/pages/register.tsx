import React from "react";
import { Form, Formik } from "formik";
import { Box, Button } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../Utilities/toErrorMap";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrlClient } from "../Utilities/createUrqlClient";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const res = await register({ options: values });
          console.log(res.data?.register);
          if (res.data?.register.error) {
            setErrors(toErrorMap(res.data.register.error));
          } else if (res.data?.register.user) {
            // register complete
            //   navigate to home page
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              label="Username"
              name="username"
              placeholder="username"
            ></InputField>
            <Box mt={6}>
              <InputField
                label="Email"
                name="email"
                placeholder="email"
              ></InputField>
            </Box>
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
export default withUrqlClient(createUrlClient)(Register);
