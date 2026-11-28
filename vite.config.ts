import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function getArticleInputs(): Record<string, string> {
  const inputsPath = resolve(__dirname, 'src/articles/generated/vite-inputs.json');
  if (!existsSync(inputsPath)) {
    return {
      articles: resolve(__dirname, 'articles/index.html'),
      'articles-en': resolve(__dirname, 'en/articles/index.html'),
    };
  }

  const raw = JSON.parse(readFileSync(inputsPath, 'utf8')) as Record<string, string>;
  const inputs: Record<string, string> = {};
  for (const [key, relPath] of Object.entries(raw)) {
    inputs[key] = resolve(__dirname, relPath);
  }
  return inputs;
}

function redirectRemovedPages() {
  const redirect = (req: { url?: string }, res: { statusCode: number; setHeader: (name: string, value: string) => void; end: () => void }, next: () => void) => {
    const path = req.url?.split('?')[0] ?? '';
    if (path === '/readiness' || path === '/readiness/') {
      res.statusCode = 308;
      res.setHeader('Location', '/ai-score/');
      res.end();
      return;
    }
    if (path === '/custom' || path === '/custom/') {
      res.statusCode = 308;
      res.setHeader('Location', '/ai/');
      res.end();
      return;
    }
    next();
  };

  return {
    name: 'redirect-removed-pages',
    configureServer(server: { middlewares: { use: (fn: typeof redirect) => void } }) {
      server.middlewares.use(redirect);
    },
    configurePreviewServer(server: { middlewares: { use: (fn: typeof redirect) => void } }) {
      server.middlewares.use(redirect);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), redirectRemovedPages()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        onlinebooking: resolve(__dirname, 'onlinebooking/index.html'),
        shoptraffic: resolve(__dirname, 'shoptraffic/index.html'),
        foodorder: resolve(__dirname, 'foodorder/index.html'),
        docsapp: resolve(__dirname, 'docsapp/index.html'),
        schoolmeals: resolve(__dirname, 'schoolmeals/index.html'),
        'ai-score': resolve(__dirname, 'ai-score/index.html'),
        ai: resolve(__dirname, 'ai/index.html'),
        faq: resolve(__dirname, 'faq/index.html'),
        ...getArticleInputs(),
      },
    },
  },
});
