import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'node:dns';
import app from './app.js';

dotenv.config();

if (process.env.MONGO_DNS_SERVER) {
  dns.setServers([process.env.MONGO_DNS_SERVER]);
}

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
