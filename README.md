Sample healthcare web portal

Usage :
Doctor login :

1) On Login
email : any valid email id
password : Healthcare
Notifications shown on login.

2) On Login Doctor is directed to Patient List.

On Patientlist page
Doctor can  
view particular patient profile
update particular patient profile
delete particular patient profile
Add new patient

navigate to Home page
logout -> onlogout redirected to login page

On Home page :
logout
navigate to patient list
Doctor changes url to non existing then shown 404 page

On patient login:

1) Login 
email : any  email id out of the data set from json(denis.penk@gmail.com , ketty.thomson@gmail.com, john.doe@gmail.com)
password : Password
Notifications shown on login.

2) On Login Patient is directed to ones profile
3) Patient can :
navigate to home page
logout
update password

on update password user is directed to login page
on login user should now enter new password set
(Simulated this operation using sessionStorage, if used deltes sessionStorage then patient can login with password "Password")

4) From Home page patient can
navigate to ones profile page
logout
patient changes url to non existing then shown 404 page
patient changes url to show patientList - msg shown "Access denied to view this content!"


Developers Note :
Git url : https://github.com/sangitapujara512/health-portal
git clone / download zip
cd directory health-portal
npm install
npm start

Code deployed to Heroku : url 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
