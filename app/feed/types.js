import { types, async } from '../utils/type-creator';

export default types(
  [...async('GET_FEEDS'), ...async('POST_MESSAGE'), ...async('REACTION_POST')],
  'FEED'
);
