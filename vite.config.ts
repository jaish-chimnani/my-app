import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import fs from 'node:fs';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    {
      name: 'save-blog-middleware',
      configureServer(server) {
        server.middlewares.use('/api/blogs', async (req, res, next) => {
          if (req.method === 'POST') {
            const buffers = [];
            for await (const chunk of req) {
              buffers.push(chunk);
            }
            const data = Buffer.concat(buffers).toString();

            try {
              // Parse the new blog
              const newBlog = JSON.parse(data);

              // Read existing blogs
              const filePath = path.join(process.cwd(), 'src/data/blogs.json');
              const fileContent = fs.readFileSync(filePath, 'utf-8');
              const blogs = JSON.parse(fileContent);

              // Prepend new blog
              blogs.unshift(newBlog);

              // Write back
              fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2));

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              console.error(error);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: 'Failed to save blog' }));
            }
          } else {
            next();
          }
        });

        server.middlewares.use('/api/messages', async (req, res, next) => {
          if (req.method === 'POST') {
            const buffers = [];
            for await (const chunk of req) {
              buffers.push(chunk);
            }
            const data = Buffer.concat(buffers).toString();

            try {
              const newMessage = JSON.parse(data);
              const filePath = path.join(process.cwd(), 'src/data/messages.json');

              // Ensure directory exists (optional, but good practice)
              // fs.mkdirSync(path.dirname(filePath), { recursive: true });

              let messages = [];
              if (fs.existsSync(filePath)) {
                const fileContent = fs.readFileSync(filePath, 'utf-8');
                try {
                  messages = JSON.parse(fileContent);
                } catch (e) {
                  // handling empty or corrupt file
                  messages = [];
                }
              }

              // Prepend new message
              messages.unshift({
                id: Date.now().toString(),
                ...newMessage,
                date: new Date().toISOString()
              });

              fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              console.error(error);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: 'Failed to save message' }));
            }
          } else {
            next();
          }
        });
      }
    }
  ],
});
