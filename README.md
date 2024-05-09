## I will keep updating...

<kbd><img width="931" alt="hero section" src="./learn_reactnative/assets/Screenshot 2024-05-09 at 11.00.32.png"></kbd>

## start a new project with 
npx create-expo-app@latest learn_reactnative


### Core components
    View        Pressable
    Text        Modal
    Image       StatusBar
    ScrillView  ActivityIndicator
    Button      Alert


### Styling Approaches 
    Inline styles
    StyleSheet API


### CSS inheritance 
<div style='color:red'>
        <p>Hello World</p>
</div>
Unlike the div in the web, p tags can inherit style from the parent div tag
in RN, the text can only inherit from text but it can inherit from the view tag.

## FlexBox
    Flexbox consist of two main entities 
    flex container & flex items 
    <View>
        <View>Item 1</View>
        <View>Item 2</View>
        <View>Item 3</View>
    </View>


package.json contains your metadata and scripts

## div & span & p tags: This won't work in react native 

## We use view, 
    RN UI Comp      Andriod     IOS View        Web Analog
    <View>          <ViewGroup>

    <Text>

    <Image>         <ImageView>       <UIImageView>

    <ScrollView>

    <TextInput>

### View
View component is  a fundementak core component in react native that serves as a building block for creating user interfaces.
It fuctions as a container that supports layout using flexbix, styleing, touch handling and accessibility controls.
it can be nested in other 
in web dev terms, the view component can be compared to the 'div' tag 

## Text
component for dispalying text
it supports nesting, styling and touch handling.
Depending on the platform, react native will translate thos component to either a UITextView (ios), a textview(Andriod), or a 'p' (web)

## Image 
The image componentn enables us to display various types of images, including 
Static image
Network Images 
Images from local disk, such as the camera roll

React Native seamlessly translates the images component to platffroms specififc counterparts:

UIImageView for Ios
ImagesView for andriod
Img for the web


The image is set as a string for the uri

## onPress
onpressin
onpress out 

const [] = useState(), this is called state variable.

In react native, all texts must be wrapped inside a text components


## Relative and Absolute Layout 
Relative layout
Absolute - element doesn not partipate in the normal flow of the layout.

## Dynamic User Interfaces
Our app's users won't all be using identical devices 

React fundamentals & Advanced Topics
React Hooks 
Rect Typescript 
React Redux
React Router 
React testing 
React material Ui
React Styled Components
React storybook
Recat Query 
React Table Formik
Rect Render 

## Flatlist
This is  a betterapproach, it gives this lazy rendering of  data in the Ui, and it 
would give a better performance, 

Though normal data mapping would work just fine as it did in reactjs/nextjs

## Networing
Fetching and submittin data to an api
Loading states
Error Handling 
FlatList components to display our data

## API Calls

localhost url doesn't work on the android emulator, use your local machine ip address or you have to host it or something.


## React Navigation
Provide a variety of navigators like stack, drawer, and tab navigators
1. Stack navigator provides a way for your app to  transition between screens where each new screens is placed on top  of a stack
2. Drawer Navigator renders a navifationb drawer on the side of the screen whicj can opened and closed via gestures
3. A tab navigator at the bottom of your screen lets you easily switch between different routes.

## 
Stack Screens uses options, while stack.navigation uses screenOptions

What is react nativ?
react native is an openn source framework for building native native andriod and ios
applications using react

javascript to access platform specific APIS (such as camera and push notifications)
Recat Component to define the apperance and behabviour of your user interface 
React itself is a libray designed for building user interfaces
react-dom for web apps and react-native for mobile apps.

Why React native?
Ios apps requires swift or objective-c
andriod apps requires java or kotlin
with approximately 31% on IOS and 68% on andriod, you would typically need to develop two seperate apps using different technologies.
With react native, yuou can creat an app that works seamlessly on both platforms.
contd
High demand in job market

USe for web and mobile app



Prereq
Javascript
React Fundamentals

Learn Url


Expo vs React Native
react native is an openn source framework for building native native andriod and ios
applications using react

Expo is an open-source framework maintanedd by Expo itself, designed for building cross platfporm apps.

Unlike plain RN, which can be challenging and time consuming to set up, expo provides a streamlined experience 

Expo has a suite of tools and service built around React native, whicnn gratlt simplifies the development process

with oplain react native, uyou cannot build ios apps on awindows or linux machine, native ios apps can only be built on a macOS machine.



Expo has evolved over the years and now supports
