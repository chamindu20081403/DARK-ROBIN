<div class="neon-border" align="center">
    <a href="https://git.io/typing-svg">
        <img src="https://readme-typing-svg.herokuapp.com?font=Rockstar-ExtraBold&color=FF10F0&lines=ROBIN+MULTI+DEVICE+BOT" alt="Typing SVG">
    </a>
</div>

<p align="center">
    <img src="https://raw.githubusercontent.com/Dark-Robin/Bot-Helper/refs/heads/main/autoimage/Bot%20robin%20iz%20alive.jpg" width="100%" style="margin-left: auto; margin-right: auto; display: block;">
</p>

<p align="center">
    <a href="https://github.com/ISARA-SIHILEL">
        <img title="Author" src="https://img.shields.io/badge/AUTHOR-Isara%20Sihilel-red.svg?style=for-the-badge&logo=github">
    </a>
</p>

<hr>

<p align="center">
    <img src="https://img.shields.io/badge/Maintaned%3F-Actively%20Developed-blue?style=flat-square" alt="Maintained?">
</p>

<hr>

<p align="center">
    <a href="https://whatsapp.com/channel/link">
        <img src="https://img.shields.io/badge/CHANNEL-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="Whatsapp Channel">
    </a>
    <a href="https://wa.me/94704101989">
        <img src="https://img.shields.io/badge/OWNER%20BOT-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="BOT Owner">
    </a>
</p>
<h2>乂 S T E P S - F O R - C R E A T E - T H E - B O T </h2>


1. Fork the repo
    <br>
<a href='https://github.com/ISARA-SIHILEL/DARK-ROBIN/fork' target="_blank"><img alt='Fork repo' src='https://img.shields.io/badge/Fork Repo-100000?style=for-the-badge&logo=scan&logoColor=FF10F0&labelColor=FF10F0&color=black'/></a>


2. Get session id by (PAIRING CODE)
    <br>
<a href='https://replit.com/@robingaming950/DARK-ROBIN-WEB-PAIR' target="_blank"><img alt='P A I R - C O D E' src='https://img.shields.io/badge/Session_id-100000?style=for-the-badge&logo=scan&logoColor=FF10F0&labelColor=FF10F0&color=black'/></a>

<h2> 乂 N O T E - B E F O R E - U S I N G !!- EN</h2>
<ul>
    <li>🔹 Add Your SESSION ID To Your <code>config.js</code></li>
</ul>

<hr>

<h2>乂 N O T E - B E F O R E - U S I N G !! -SI</h2>
<ul>
    <li>🔹 </code>Fork</code> / Use This </code>Template</code> button එක Click කරන්න.</li>
</ul>

### 乂 E D I T - T H E - CONFIG.JS

There are 1 configuration file namely ```config.js``` adjust it before installing.

```Javascript

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "Remove this and add your session ID here",
    MONGODB: process.env.MONGODB || "Remove this and add your MongoDB public URL here",
    OWNER_NUM: process.env.OWNER_NUM || "Remove this number and add your number with country code",

```

### 乂 D E P L O Y - P L A T F O R M S

**Option 1: Deploy on Heroku**
1. [Create an Account on Heroku](https://signup.heroku.com/) if you haven’t already.
2. Click the button below to deploy directly on Heroku:
   <br>
   <a href='https://heroku.com/deploy?template=https://github.com//ISARA-SIHILEL/DARK-ROBIN' target="_blank">
      <img alt='Deploy on Heroku' src='https://img.shields.io/badge/-DEPLOY-FF10F0?style=for-the-badge&logo=heroku&logoColor=white'/>
   </a>


**Option 2: Deploy on Railway**
1. [Create an Account on Railway](https://railway.app/login) if you don’t have one.
2. Click the button below to deploy using Railway:
   <br>
   <a href='https://railway.app/' target="_blank">
      <img alt='Deploy on Railway' src='https://img.shields.io/badge/-DEPLOY-FF10F0?style=for-the-badge&logo=railway&logoColor=white'/>
   </a>


**Option 3: Deploy on Render**
1. [Create an Account on Render](https://dashboard.render.com/register) if you don’t have one.
2. Click the button below to deploy using Render:
   <br>
   <a href='https://dashboard.render.com' target="_blank">
      <img alt='Deploy on Render' src='https://img.shields.io/badge/-DEPLOY-FF10F0?style=for-the-badge&logo=render&logoColor=white'/>
   </a>
   
   **Option 4: Deploy on Replit**
1. [Create an Account on Replit](https://repl.it) if you don’t have one.
2. Click the button below to deploy using Replit:
   <br>
   <a href='https://repl.it/github/' target="_blank">
      <img alt='Deploy on Replit' src='https://img.shields.io/badge/-DEPLOY-FF10F0?style=for-the-badge&logo=replit&logoColor=white'/>
   </a>
   
   **Option 5: Github Workflows**
   
   **Option 6: Code-Spaces**

   **Option 9: Or Any NodeJS Enviroment**
   
<h2>A Little About This Bot</h2>
<ul>
    <li>✔️ | <strong>Simple</strong></li>
    <li>✔️ | <strong>No Button</strong></li>
    <li>✔️ | <strong>Multi Device</strong></li>
    <li>✔️ | <strong>Plugins</strong></li>
</ul>

<hr>

<hr>

<b>乂 COPY WORKFLOW CODE</b></br>
```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Start application
      run: npm start
