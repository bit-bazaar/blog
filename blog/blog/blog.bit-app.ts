import { shellAppSharedDependencies } from '@bit-bazaar/shell-app.shared-dependencies';
import { MfReact } from '@frontend/module-federation.react.apps-types.mf-rspack';
import {
  type NetlifyOptions,
  Netlify,
} from '@teambit/cloud-providers.deployers.netlify';

const netlifyConfig: NetlifyOptions = {
  team: 'teambit',
  accessToken: process.env.NETLIFY_AUTH_TOKEN as string,
  productionSiteName: 'bit-bazaar-blog',
  stagingSiteName: 'bit-bazaar-blog',
  skipLaneDeployments: false,
  useDefaultRedirectsForSPA: true,
};

export default MfReact.from({
  name: 'blog',
  clientRoot: './blog.app-root.js',
  moduleFederation: {
    exposes: {
      './blognav': './navitem.js',
      './blog': './blog.js',
    },
    shared: shellAppSharedDependencies,
  },
  transformers: [
    (mutator, context) => {
      if (context.dev) {
        mutator.merge({
          devServer: {
            ...mutator.config.devServer,
            historyApiFallback: true,
          },
        });
      }

      return mutator;
    },
  ],
  deploy: Netlify.deploy(netlifyConfig),
});
