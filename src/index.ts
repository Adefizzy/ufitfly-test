import express from 'express';
import userRoutes from './routes/userRoutes';
import errorController from './utils/errorHandler';
import cookieParser from 'cookie-parser';
import travelPackageRoutes from './routes/travelPackageRoutes';
const app = express();


app.use(express.json())

app.use(cookieParser(process.env.COOKIE_SECRET))

app.use('/api/v1/users', userRoutes)

app.use('/api/v1/travelPackage', travelPackageRoutes)


app.use(errorController)
export default app;