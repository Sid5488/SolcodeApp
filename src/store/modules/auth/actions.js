export function LoginRequest(email, password) {
    return {
       type: '@auth/loginRequest',
       payload: { email, password }
    };
}

export function LoginSuccess(token, user) {
    return {
       type: '@auth/loginSuccess',
       payload: { token, user }
    };
}

export function signOut() {
    return {
      type: '@auth/SIGN_OUT',
    };
}