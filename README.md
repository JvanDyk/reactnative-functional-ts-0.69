# reactnative-functional-ts-0.69

Start building with React-Native

Deploy to any mobile platform and the web. 1 Codebase

Other getting started guides:
https://reactnative.dev/docs/getting-started
https://www.tutorialspoint.com/react_native/react_native_environment_setup.htm

Requirements:
-Nodejs
-Java Development Kit(JDK)
-Android Studio & add device with virtual device manager
-Python

Add System variables:
ANDROID_HOME: C:\Users\<your_username>\AppData\Local\Android\Sdk,
JAVA_HOME: C:\Program Files\OpenJDK\jdk-18.0.1.1,
Path +: C:\Users\<your_username>\AppData\Local\Android\Sdk\platform-tools,
PYTHON

Installation
1. npm install -g create-react-native-app
2. npm install -g react-native-cli
3. npm install -g expo-cli
4. Navigate to directory root, run npm install

After installation:
react-native info to test if react-native package is insalled
react-native run-anroid or npm run start or npm run android


![alt text](https://github.com/JvanDyk/reactnative-functional-ts-0.69/blob/main/hello_world.png)


helpful Commands
npm run audit fix --force
Delete node_modules & package-lock.json to re install packages with npm install

Create new React-Native project Commands
create-react-native-app <project-name>
npx react-native init <project-name> --version 0.69

Hope you get it right, if you get stuck, try and google the error. In most cases it is related to some package or config missing.
Also if you want to copy this project, you will see app.json the project name is cml, you need to find and replace everywhere, where cml is being used and then delete node_modules & package-lock.json and reinstall with npm install.

Good Luck.
