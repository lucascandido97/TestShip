import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from '@config/database';
import contactRoutes from '@routes/contactRoutes';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || '8080';

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Routes
app.use('/contacts', contactRoutes);

// Global error handler
app.use((err: { status?: number; message?: string; stack?: string }, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Log the error stack for debugging

    const statusCode = err.status || 500;
    res.status(statusCode).json({
        message: err.message || 'Internal Server Error',
        error: process.env.NODE_ENV === 'development' ? err.stack : undefined, // Show stack trace only in development
    });
});

// Verify database connection, sync tables, and start the server
sequelize.authenticate()
    .then(async () => {
        console.log('Database connection has been established successfully.');

        // Sync database tables
        const syncOptions = process.env.NODE_ENV === 'production' ? { alter: true } : { force: true };
        await sequelize.sync(syncOptions);
        console.log('Database tables have been synchronized.');
        
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit the process if the database connection fails
    });

export default app;