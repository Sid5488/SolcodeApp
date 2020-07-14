import produce from 'immer';

const initialState = {
    token: null,
    signed: false,
    loading: false,
};

console.log(initialState);

export default function auth(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@auth/loginRequest': {
                draft.loading = true;
                break;
            }
            case '@auth/loginSuccess': {
                draft.token = action.payload.token;
                draft.signed = true;
                draft.loading = false;
                break;
            }
            case '@auth/SIGN_OUT': {
                draft.token = null;
                draft.signed = false;
                break;
            }
            default:
        }     
    });
}