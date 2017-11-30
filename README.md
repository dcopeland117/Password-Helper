***About***

The purpose of this app is to illustrate react, css & jest testing framework knowledge as well as to provide a tool to
aid users in the creation of new passwords. This app can be useful for determining if a password you want to change to
will be valid, prior to going through org specific motions to reset it which can be a pain and potentially require
shutting down apps & work in progress. You can simply modify the rules in the validator to meet your enterprise
password enforcement policies to allow this app to serve your specific needs.

To understand the app architecture and the files that have been created & modified , please view
packages/react-scripts/template/src/docs/Architecture.md

For information on the
***Download & Install the app***

1. Open command line, and cd to the directory you want the project to exist in
2. type git clone https://github.com/dcopeland117/Password-Helper.git and then press enter
3. type npm install and then press enter

-- at this point you now have the project downloaded and dependencies installed


***Launching the application***

1. In command line, cd into the app directory (i.e; D:\Workspaces\Password-Helper)
2. type npm start and then press enter

-- at this point your default browser will have launched with the app loaded


***Execute Jest Unit Tests***

1. In command line, cd into the app directory (i.e; D:\Workspaces\Password-Helper)
2. type npm test and then press enter
3. type a (to run all tests) and then press enter

-- at this point you will see the results of the password validator test (Password.test.js)