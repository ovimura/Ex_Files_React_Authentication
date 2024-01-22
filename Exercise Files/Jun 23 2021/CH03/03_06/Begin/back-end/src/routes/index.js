import { forgotPasswordRoute } from './forgotPasswordRoute';
import { logInRoute } from './logInRoute';
import { signUpRoute } from './signUpRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { resetPasswordRoute } from './resetPasswordRoute';

export const routes = [
    resetPasswordRoute,
    forgotPasswordRoute,
    logInRoute,
    signUpRoute,
    testRoute,
    updateUserInfoRoute,
    verifyEmailRoute,
];
