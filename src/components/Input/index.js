import React from 'react'
import { Field } from 'formik'
import * as S from './styled.js'

export const Input = ({ label, name, type }) => (
  <Field name={name}>
    {({ field, form }) => {
      const { errors, touched } = form
      const hasError = !!errors[name] && touched[name]

      return (
        <S.FormLine>
          <S.Label htmlFor={name}>{label}</S.Label>
          <S.Input {...field} name={name} type={type} hasError={hasError} />
          {hasError && <S.Error>{errors[name]}</S.Error>}
        </S.FormLine>
      )
    }}
  </Field>
)
