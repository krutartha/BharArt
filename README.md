## Usage

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

### Deploy to Vercel

The project is configured for Vercel deployment with `vercel.json`.

**Option 1: Deploy via Vercel CLI**
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# For production deployment
vercel --prod
```

**Option 2: Deploy via Vercel Dashboard**
1. Push your code to GitHub:
   ```bash
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click "Deploy"

The `vercel.json` file is already configured to handle client-side routing for your SolidJS SPA.

Learn more about deploying your application with the [Vite deployment docs](https://vite.dev/guide/static-deploy.html)
