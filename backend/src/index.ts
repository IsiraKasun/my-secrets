import express, { Request, Response } from 'express';
import cors from 'cors';
import connectDB from './dbconnect';
import Secret from './models/Secret';

await connectDB();

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello TypeScript with Express!');
});

app.post('/secrets', async (req: Request, res: Response) => {
  try {
      const {title, secret} = req.body;
      const newSecret = new Secret({title, secret});
      const savedSecret = await newSecret.save();
      res.status(201).json({id: savedSecret._id});
  } catch (error) {
      console.log(error);
      res.status(500).json({error: 'Error occured saving secret'});
  }

});

app.get('/secrets', async (req: Request, res: Response) => {
  try {
    const secrets = await Secret.find(); 
    res.status(200).json(secrets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch secrets' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});