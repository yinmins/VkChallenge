# [ViatickProject]

# [Prerequisties]
Install the following software in your pc.
 VkChallenge
1.JDK 11

2.VisualStudio Code and node js

3.Androidstudio

4.Git

5.Install plugins in visualstudio code
ES7 React/Redux/GraphQL/React-Native 
Simple React Snippets
Prettier - Code formatter

6.Create AVD 

# [Creating New React Native Project ]

npx react-native@latest init VkChallenge
#npx react-native init VkChallenge

# [Run React Native ]

## Install Dependency Steps For React Native
A. clone from github

git clone https://github.com/yinmins/VkChallenge.git
go to the VkChallenge and install the below dependencies and please check package.json for details.

npm install --save react-native-screens
npm install --save react-native-safe-area-context
npm install --save react-native-datepicker 
npm install --save react-native-paper
npm install --save @react-navigation/native  
npm install --save @react-navigation/native-stack
npm install --save react-native-vector-icons
npm install --save @react-navigation/material-bottom-tabs
npm install --save react-native-sqlite-storage
npm install --save @react-native-community/datetimepicker

yarn add react-native-chart-kit
yarn add react-native-svg cd ios && pod install
yarn add react-native-paper-dropdown
npm i react-native-floating-action

npx react-native start
 

## Run Steps For React Native

A. start Android Device AVD emulator and run the below commands.
npm start --reset-cache
npm run android
or
npx react-native start
 
## Status
login page- done

## Outstanding

6.1. main page

6.2. application page

6.3. chart page

