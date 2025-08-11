const fs = require('fs');
const path = require('path');

// Create public directory
if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
}

// Copy files to public directory
function copyFile(src, dest) {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${src} → ${dest}`);
}

function copyDirectory(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    
    const files = fs.readdirSync(src);
    
    files.forEach(file => {
        const srcPath = path.join(src, file);
        const destPath = path.join(dest, file);
        
        if (fs.statSync(srcPath).isDirectory()) {
            copyDirectory(srcPath, destPath);
        } else {
            copyFile(srcPath, destPath);
        }
    });
}

// Copy main files
console.log('🔨 Building Roda website...');

// Copy index.html
if (fs.existsSync('index.html')) {
    copyFile('index.html', 'public/index.html');
}

// Copy directories
const directories = ['css', 'js', 'assets'];

directories.forEach(dir => {
    if (fs.existsSync(dir)) {
        copyDirectory(dir, `public/${dir}`);
        console.log(`📁 Copied ${dir}/ directory`);
    }
});

console.log('✅ Build completed! Files ready in public/ directory');
console.log('📁 Public directory contents:');

function listDirectory(dir, indent = '') {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            console.log(`${indent}📁 ${file}/`);
            listDirectory(filePath, indent + '  ');
        } else {
            console.log(`${indent}📄 ${file}`);
        }
    });
}

listDirectory('public');
