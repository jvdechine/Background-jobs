import 'dotenv/config'

import express from 'express';
import { createBullBoard } from '@bull-board/api'
import { BullAdapter }  from '@bull-board/api/bullAdapter'
import { ExpressAdapter } from '@bull-board/express'

import UserRoutes from './routes/UserRoutes';
import Queues from './lib/Queue';
import ProductRoutes from './routes/ProductRoutes';

const serverAdapter = new ExpressAdapter();

createBullBoard({
  queues: Queues.queues.map(q => new BullAdapter(q.bull)),
  serverAdapter:serverAdapter
})

const app = express();

serverAdapter.setBasePath('/admin/queues')
app.use('/admin/queues', serverAdapter.getRouter());

app.use(express.json())
app.use('/user', UserRoutes);
app.use('/product', ProductRoutes)

app.listen(process.env.PORT ?? 5000, () => {
    console.log(`App running in port ${process.env.PORT ?? 5000}`)
})