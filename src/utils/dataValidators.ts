export const validateEmail = (email: string) => {
    return !!String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
};

export const validateName = (value: string): boolean => {
    return !!String(value)
        .match(
            /^[А-ЯA-Z]{1}[а-яА-ЯёЁa-zA-Z0-9]{10,50}$/
        )
};

export const validateLogin = (value: string): boolean => {
    return !!String(value)
        .match(
            /^[A-Z]{1}[a-z]{10,20}$/
        )
};

export const validatePhone = (value: string): boolean => {
    return !!String(value)
        .match(
            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        )
};

export const validatePass = (value: string): boolean => {
    return !!String(value)
        .match(
            /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
        )
};
