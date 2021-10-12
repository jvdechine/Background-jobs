import 'dotenv/config'
import mongoose from 'mongoose';

import Queue from './lib/Queue';

mongoose.connect(process.env.MONGO_CONNECTION_STRING ?? "", (err => {
    if(err != null)
      console.log('Error connecting to Mongo Db');
}));

Queue.process();