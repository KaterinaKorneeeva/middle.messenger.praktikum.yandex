export function emailValidator(value: string) {
    const result = {
        isValid: true,
        errorText: '',
    }
    if (!notIsEmptyValidator(value).isValid) {
        return notIsEmptyValidator(value)
    }

    const regExp = /[a-zA-Z-\._]*@[a-zA-Z]*\.[a-zA-Z]*/gi

    if (!regExp.test(value)) {
        result.isValid = false
        result.errorText = 'Это поле заполненно некорректно'
        return result
    }

    result.isValid = true
    result.errorText = ''
    return result
}

export function loginValidator(value: string) {
    const MIN_LENGTH = 3
    const MAX_LENGTH = 20

    const result = {
        isValid: true,
        errorText: '',
    }

    if (!notIsEmptyValidator(value).isValid) {
        return notIsEmptyValidator(value)
    }

    const regExp = /^(?=.*[A-Za-z0-9]).{3,}$/

    if (!regExp.test(value)) {
        result.isValid = false
        result.errorText = 'Логин должен от 3 до 20 символов, латиница'
        return result
    }


    if (value.length < MIN_LENGTH || value.length >= MAX_LENGTH) {
        result.isValid = false
        result.errorText = 'Длина логина от 3 до 20 символов'
        return result
    }

    result.isValid = true
    result.errorText = ''
    return result
}

export function passwordValidator(pass: string) {
    const MIN_LENGTH = 8
    const MAX_LENGTH = 40

    const result = {
        isValid: true,
        errorText: '',
    }

    if (!notIsEmptyValidator(pass).isValid) {
        return notIsEmptyValidator(pass)
    }

    const regExp = /^(?=.*\d)(?=.*[a-zA-Zа-яА-Я])(?=.*[0-9]).{8,}$/;

    if (!regExp.test(pass)) {
        result.isValid = false
        result.errorText = 'Обязательно хотя бы одна заглавная буква и цифра'
        return result
    }

    if (pass.length < MIN_LENGTH || pass.length > MAX_LENGTH) {
        result.isValid = false
        result.errorText = 'Длина пароля может быть от 6 до 40 символов'
        return result
    }

    result.isValid = true
    result.errorText = ''
    return result
}

export function nameValidator(value: string) {
    const result = {
        isValid: true,
        errorText: '',
    }

    if (!notIsEmptyValidator(value).isValid) {
        return notIsEmptyValidator(value)
    }
    
    const regExp = /^(?=.*[A-Z-А-Я]).{1}(?=.*[a-zA-Zа-яА-Я]).{2,}$/;

    if (!regExp.test(value)) {
        result.isValid = false
        result.errorText = 'Первая буква заглавная латиница или кириллица'
        return result
    }


    if (!value) {
        result.isValid = false
        result.errorText = 'Это поле не может быть пустым'
        return result
    }

    result.isValid = true
    result.errorText = ''
    return result
}

export function notIsEmptyValidator(value: string) {
    const result = {
        isValid: true,
        errorText: '',
    }

    if (!value) {
        result.isValid = false
        result.errorText = 'Это поле не может быть пустым'
        return result
    }

    result.isValid = true
    result.errorText = ''
    return result
}
export function phoneValidator(value: string) {
    const result = {
        isValid: true,
        errorText: '',
    }
    if (!notIsEmptyValidator(value).isValid) {
        return notIsEmptyValidator(value)
    }

    const regExp = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/


    if (!regExp.test(value)) {
        result.isValid = false
        result.errorText = 'Это поле заполненно некорректно'
        return result
    }

    result.isValid = true
    result.errorText = ''
    return result

}
