const express = require('express');
const cors = require('cors');
const app = express();
const { sequelize } = require('./models'); // أو استخدم من config/db
const authRoutes = require('./routes/authRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Server is working');
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Server start
const PORT = 3000;
sequelize.sync({ alter: true }) // alter: true أفضل لمرحلة التطوير
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1); // أغلق التطبيق إذا فشل الاتصال بقاعدة البيانات
  });