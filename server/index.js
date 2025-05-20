import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import { connectDB } from './utils/Connection.js';

const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

// API routes
app.use('/apiv1', postRoutes);

// Root
app.get('/', (req, res) => {
  res.send('Welcome to the Vision Luxury Villa API');
});

// Connect DB
connectDB();

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
