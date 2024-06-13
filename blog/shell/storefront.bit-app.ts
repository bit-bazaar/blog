import { ViteReact } from '@bitdev/react.app-types.vite-react';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export default ViteReact.from({
  name: 'shell',
  ssr: false,
  viteConfigPath: require.resolve('./vite.config.js'),
});
