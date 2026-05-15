const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 8000;

// Enable gzip compression
app.use(compression());

// Serve static files from the root directory
app.use(express.static(__dirname, {
  setHeaders: (res, filePath) => {
    // Set proper MIME types
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    } else if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filePath.endsWith('.html')) {
      res.setHeader('Content-Type', 'text/html');
    } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
      res.setHeader('Content-Type', 'image/jpeg');
    } else if (filePath.endsWith('.png')) {
      res.setHeader('Content-Type', 'image/png');
    }
  }
}));

// Root route - redirect to index or serve a welcome page
app.get('/', (req, res) => {
  // For now, serve Module 1 as the default since index.html doesn't exist yet
  res.sendFile(path.join(__dirname, 'modules', 'module-01-data-foundation.html'));
});

// Health check endpoint for Heroku
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>404 - Not Found</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px;
          background-color: #f3f3f3;
        }
        h1 { color: #032d60; }
        a { color: #0176d3; text-decoration: none; }
        a:hover { text-decoration: underline; }
      </style>
    </head>
    <body>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <p><a href="/modules/module-01-data-foundation.html">Go to Module 1</a></p>
    </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`🏔️  MC Next Training Server running on port ${PORT}`);
  console.log(`📚 Visit: http://localhost:${PORT}`);
  console.log(`🧪 Module 1: http://localhost:${PORT}/modules/module-01-data-foundation.html`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  process.exit(0);
});
