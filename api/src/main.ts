import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 5001;

// Middlewares
app.use(cors());
app.use(express.json());

// Static for /uploads
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Example API route
app.get('/api/hello', (_, res) => {
  res.json({
    message: 'BE TEST',
    time: new Date().toISOString()
  });
});

// Start server
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
