import Queue, { JobOptions } from 'bull';
import redisConfig from '../config/Redis'

import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, {redis: redisConfig}),
    name: job.key,
    handle: job.handle
}))

export default {
    queues,
    add: (name: string, data: any, opts?: JobOptions) => {
        const queue = queues.find(q => q.name == name);

        if(queue != undefined)
            return queue.bull.add(data, opts);
    },
    process: () => {
        queues.forEach(queue => {
            queue.bull.process(queue.handle);
            queue.bull.on("failed", (job, err) => {
                console.log(`${job.data} ${err}`)
            })
        })
    }
}