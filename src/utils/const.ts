import {
  emailValidator,
  loginValidator,
  nameValidator,
  notIsEmptyValidator,
  passwordValidator,
  phoneValidator,
} from '../utils/validator'

interface ValidatorResult {
  isValid: boolean
  errorText: string
}

export const VALIDATOR: Record<string, (value: string, againValue?: string) => ValidatorResult> = {
  email: emailValidator,
  login: loginValidator,
  firstName: nameValidator,
  secondName: nameValidator,
  phone: phoneValidator,
  oldPassword: passwordValidator,
  password: passwordValidator,
  confirmPassword: passwordValidator,
  message: notIsEmptyValidator,
}


export const APIRoute = {
  RESOURCES: `https://ya-praktikum.tech/api/v2/resources`,
};
