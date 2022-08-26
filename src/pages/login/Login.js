import React from 'react';
import {Button, Container, Input, VStack, FormControl, FormErrorMessage, Image} from "@chakra-ui/react";
import {Formik} from "formik";
import * as Yup from "yup";
import {useLogin} from './hooks/useLogin'
import {useSnapshot} from "valtio";
import {userStore} from "../../store/user.store";

const Login = () => {
  const {isLoginLoading} = useSnapshot(userStore)
  const {loginUser} = useLogin();

  const onLogin = async (formValues) => {
    const validatedFormValues = validationSchema.cast(formValues);
    await loginUser(validatedFormValues);
  }

  return (
    <Container maxW={400} py='15vh'>
      <Image
        src='/images/welcome.svg'
        mx='auto'
        mb={10}
        w='300px'
        h='150px'
        alt=''
      />
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={onLogin}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
          <VStack
            as='form'
            onSubmit={handleSubmit}
            spacing={6}
          >
            <FormControl isInvalid={errors.email && touched.email}>
              <Input
                name='email'
                type='text'
                placeholder='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                variant='flushed'
                autoComplete='on'
                autoFocus
              />
              <FormErrorMessage>
                {errors.email && touched.email && errors.email}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password && touched.password}>
              <Input
                name='password'
                type='password'
                placeholder='Password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                variant='flushed'
                autoComplete='on'
              />
              <FormErrorMessage>
                {errors.password && touched.password && errors.password}
              </FormErrorMessage>
            </FormControl>
            <Button
              type='submit'
              isLoading={isLoginLoading}
              isDisabled={isLoginLoading}
              w='100%'
            >
              Log in
            </Button>
          </VStack>
        )}
      </Formik>
    </Container>
  );
};

export default Login;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required('Enter your email please.'),
  password: Yup.string()
    .trim()
    .required('Enter your password please.'),
});