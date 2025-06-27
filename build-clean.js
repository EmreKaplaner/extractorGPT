#!/usr/bin/env node

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Ensure bundle directory exists
const bundleDir = path.join(__dirname, 'bundle');
if (!fs.existsSync(bundleDir)) {
  fs.mkdirSync(bundleDir, { recursive: true });
}

// Copy CSS files to bundle directory
const cssFiles = [
  { src: './src/ui/styles/layers.css', dest: './bundle/layers.css' },
  { src: './src/ui/styles/styles.css', dest: './bundle/styles.css' }
];

cssFiles.forEach(({ src, dest }) => {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✅ Copied ${src} to ${dest}`);
  } else {
    console.warn(`⚠️  Warning: ${src} not found`);
  }
});

// Build configurations
const builds = [
  {
    entryPoint: './src/main-content-react.js',
    outfile: './bundle/main.bundle.js',
    description: 'main.bundle.js - Main UI with React'
  },
  {
    entryPoint: './src/selector-content.js',
    outfile: './bundle/selector.bundle.js',
    description: 'selector.bundle.js - Lightweight selector'
  },
  {
    entryPoint: './src/service-worker.js',
    outfile: './bundle/service.bundle.js',
    description: 'service.bundle.js - Background services'
  }
];

// Common build options
const commonOptions = {
  bundle: true,
  format: 'iife',
  target: 'chrome90',
  minify: true,
  sourcemap: false,
  loader: {
    '.js': 'jsx',
    '.jsx': 'jsx'
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
};

// Build each bundle
async function buildAll() {
  console.log('🚀 Building EXTRACTOR-GPT bundles...\n');
  
  for (const build of builds) {
    try {
      console.log(`📦 Building ${build.description}...`);
      
      const startTime = Date.now();
      
      await esbuild.build({
        ...commonOptions,
        entryPoints: [build.entryPoint],
        outfile: build.outfile,
        // For React bundle, we need to handle external React
        external: build.entryPoint.includes('react') ? [] : undefined,
        // Add banner to wrap in IIFE for content scripts
        banner: {
          js: build.entryPoint.includes('service-worker') ? '' : '(function() {'
        },
        footer: {
          js: build.entryPoint.includes('service-worker') ? '' : '})();'
        }
      });
      
      const endTime = Date.now();
      const buildTime = endTime - startTime;
      
      // Get file size
      const stats = fs.statSync(build.outfile);
      const fileSizeKB = (stats.size / 1024).toFixed(1);
      
      console.log(`✅ Built ${build.outfile} (${fileSizeKB}KB) in ${buildTime}ms`);
      
    } catch (error) {
      console.error(`❌ Error building ${build.description}:`, error);
      process.exit(1);
    }
  }
  
  console.log('\n✨ All bundles built successfully!');
}

// Run the build
buildAll().catch(error => {
  console.error('Build failed:', error);
  process.exit(1);
}); 