import authenticationRouter from './api/authentication/router';
import restaurantRouter from './api/restaurant/router';
import verifyToken from './common/validate-token';

export default function routes(app) {
  app.use('/api/v1/restaurant', verifyToken, restaurantRouter);
  app.use('/api/v1/auth', authenticationRouter);
}
