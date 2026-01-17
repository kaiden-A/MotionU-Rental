import './config/dotenv.js';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import errorHandler from './middlewares/errorHandler.js';
import productRoutes from './routes/products.routes.js'
import requestRoutes from './routes/requests.routes.js';
import authRoutes from './routes/auth.routes.js';


const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin : process.env.FRONTEND_URL  || 'http://localhost:5173',
    methods: ['GET' , 'POST' , 'PUT' , 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}))

const PORT = process.env.PORT || 5050;

app.get('/' , (req , res) => {

    console.log("Opening Server");
    res.json({message : "Opening Server"});

})

app.use('/api' , authRoutes)
app.use('/api/products' , productRoutes);
app.use('/api/requests' , requestRoutes);
app.use(errorHandler);

app.listen(PORT , "0.0.0.0", () => console.log(`APP IS RUNNING AT PORT ${PORT}`));