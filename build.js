#!/usr/bin/env node

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

// Ensure bundle directory exists
const bundleDir = path.join(__dirname, 'bundle');
if (!fs.existsSync(bundleDir)) {
  fs.mkdirSync(bundleDir, { recursive: true });
}

// Function to copy CSS files
function copyCSSFiles() {
  const cssFiles = [
    { src: './src/ui/styles/layers.css', dest: './bundle/layers.css' },
    { src: './src/ui/styles/styles.css', dest: './bundle/styles.css' }
  ];
  
  cssFiles.forEach(({ src, dest }) => {
    try {
      fs.copyFileSync(src, dest);
      console.log(`✅ Copied ${src} to ${dest}`);
    } catch (error) {
      console.error(`❌ Error copying ${src}:`, error.message);
    }
  });
}

// Copy CSS files
copyCSSFiles();

// Build configuration for main bundle
async function buildMain() {
  console.log('🚀 Building main.bundle.js for development...\n');
  
  try {
    const result = await esbuild.build({
      entryPoints: ['./src/main-content-react.js'],
      bundle: true,
      outfile: './bundle/main.bundle.js',
      format: 'iife',
      minify: false, // No minification for development
      sourcemap: true, // Enable source maps
      logLevel: 'info',
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx'
      },
      define: {
        'process.env.NODE_ENV': '"development"'
      }
    });
    
    console.log('✅ main.bundle.js built successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Build configuration for service worker
async function buildService() {
  console.log('🚀 Building service.bundle.js...\n');
  
  try {
    const result = await esbuild.build({
      entryPoints: ['./src/background/index.js'],
      bundle: true,
      outfile: './bundle/service.bundle.js',
      format: 'iife',
      minify: false,
      sourcemap: true,
      logLevel: 'info',
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx'
      }
    });
    
    console.log('✅ service.bundle.js built successfully!');
  } catch (error) {
    console.error('❌ Service worker build failed:', error);
    process.exit(1);
  }
}

// Build configuration for selector
async function buildSelector() {
  console.log('🚀 Building selector.bundle.js...\n');
  
  try {
    const result = await esbuild.build({
      entryPoints: ['./src/selection/index.js'],
      bundle: true,
      outfile: './bundle/selector.bundle.js',
      format: 'iife',
      minify: false,
      sourcemap: true,
      logLevel: 'info',
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx'
      }
    });
    
    console.log('✅ selector.bundle.js built successfully!');
  } catch (error) {
    console.error('❌ Selector build failed:', error);
    process.exit(1);
  }
}

// Run all builds
async function buildAll() {
  await buildMain();
  await buildService();
  await buildSelector();
  console.log('\n✅ All bundles built successfully!');
}

// Run the build
buildAll(); 