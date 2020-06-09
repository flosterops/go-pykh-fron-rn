const getInitialFormFields = (): ISignUpFromFieldsModel => ({
    login: '',
    password: '',
});

export interface ISignUpFromFieldsModel {
    login: string;
    password: string;
}

export { getInitialFormFields };
