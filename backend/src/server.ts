import express from 'express';
import cors from 'cors';

import foodRoutes from './routes/food.route';

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'],
  })
);

app.get('/api', (req, res) => {
  res.send('APII');
});

app.use('/api/foods', foodRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server on port ${port}`));
