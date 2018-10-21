# theHotel Frontend Server

The demo below is hosted on [Firebase Hosting](https://firebase.google.com/docs/hosting/), a fast and secure hosting for web app.

Demo: [theHotel](https://thehotel-279c9.firebaseapp.com/)

## Developer Guide

### Pre-requisites
1. Node `v8.12.0` or later
2. NPM `v6.4.0` or later
3. Git
4. Visual Studio Code IDE

### Getting started
1. Download and unzip the source code
2. Install NPM packages  
   `npm install`

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### How to deploy
1. Install the Firebase CLI.  
  `npm install -g firebase-tools`  
     
     This installs the globally available firebase command.
2. Access your Firebase projects  
   To connect your machine to your Firebase account and obtain access to your Firebase projects, run the following command:  
   `firebase login`
3. Initialize your site  
   From the root of your project directory, run the following command:  
   `firebase init`
4. Select the public root directory (`npm run build` will compiles and minifies the files into `dist` folder and by default is index.html)  
5. Deploy your site  
   `firebase deploy`
