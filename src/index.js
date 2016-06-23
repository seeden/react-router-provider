import { PropTypes } from 'react';
import createProvider from 'react-provide-props';

export default createProvider('RouterProvider', (props, context) => ({
  router: context.router,
}), {
  router: PropTypes.object.isRequired,
}, {
  router: PropTypes.object.isRequired,
});
