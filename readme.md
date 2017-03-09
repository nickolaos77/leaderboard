This is a simple project build with React 

The error:

ERROR in ./public/app.jsx
Module build failed: TypeError: Path must be a string. Received undefined
    at assertPath (path.js:7:11)
    
Had to do with the babel-core version. Installing the most recent solved the problem