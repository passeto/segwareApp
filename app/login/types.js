import { types, async } from '../utils/type-creator';

export default types(
  [
    ...async('AUTH_REQUEST'),
    ...async('AUTH_REGISTER'),
    ...async('FORGOT_PASSWORD'),
  ],
  'LOGIN'
);
