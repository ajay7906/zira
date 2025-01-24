const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});