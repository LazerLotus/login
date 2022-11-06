### A Simple Login Page

### Features
- User can login with correct email and password
- If user didn't type email or password, user cannot send login request.
- User can keep login status after user has been verified. 
- If user has been login before, user can see its name on welcome page (如果你已經登入過了，直接進入 /welcome 即可看到自己的名字) 

### Getting Start

## installaiton

1. Clone repo from github
```git clone https://github.com/LazerLotus/login```
2. change directory to project folder
```cd login```
3. Install npm packages
```npm install```
4. Setting MongoDB enviroment variables 
for Windows cmd
``` set "MONGODB_URI=Your MongoDB connection string"```
for MacOS
```export MONGODB_URI="Your MongoDB connection string" ```
5. Prepare seed users
```npm run seed```
6. Start running this project in local
```npm run dev```
7. If local server is running well, you will see following message in your terminal:
```Express is listening on localhost:3000```

### Dependency

- body-parser 1.20.1
- express 4.17.1
- express-handlebars 4.0.2
- mongoose 5.9.7
- crypto-js 4.1.1
- cookie-parser 1.4.6