import './dotenv.js';

export const auth = {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: "7d",
    cookieMaxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
}