import React from 'react'
import { Layout } from '../../components/Layout'
import { Formik } from 'formik'
import { Input } from '../../components/Input'
import { Form } from '../../components/Form'
import { SecondaryButton } from '../../components/Button/Secondary'
import { schema } from './schema'

export const SignUp = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(values)
  }

  return (
    <Layout>
      <h2>Sign up</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Input name="name" type="text" label="Name" />
            <Input name="email" type="email" label="Email" />
            <Input name="password" type="password" label="Password" />
            <Input
              name="passwordConfirm"
              type="password"
              label="Password confirm"
            />
            <SecondaryButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing up' : 'Sign up'}
            </SecondaryButton>
          </Form>
        )}
      </Formik>
    </Layout>
  )
}
