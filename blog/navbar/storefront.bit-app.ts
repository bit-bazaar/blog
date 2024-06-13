import { ViteReact } from '@bitdev/react.app-types.vite-react';
import { Netlify } from '@teambit/cloud-providers.deployers.netlify';

const netlifyConfig = {
  accessToken: process.env.NETLIFY_AUTH_TOKEN!,
  productionSiteName: 'bit-bazaar-blog-navbar',
  team: 'teambit',
};

export default ViteReact.from({
  name: 'navbar',
  ssr: false,
  viteConfigPath: './vite.config.js',
  deploy: Netlify.deploy(netlifyConfig),
});
