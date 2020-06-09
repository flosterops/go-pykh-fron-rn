const getInitialFormFields = (): IFormFieldModel => ({
    login: '',
    email: '',
    password: '',
    verifyPassword: '',
});

export interface IFormFieldModel {
    login: string;
    email: string;
    password: string;
    verifyPassword: string;
}

export { getInitialFormFields };
