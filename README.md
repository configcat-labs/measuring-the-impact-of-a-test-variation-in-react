# Measuring the impact of a test variation in React with Amplitude and ConfigCat
A companion repo for "Measuring the impact of a test variation in React with Amplitude and ConfigCat"

## Introduction
To keep an app or website functioning, a business may choose to roll out new features or make updates. If these updates or features are somehow shipped with bugs and are not well received by users, this may cause a decline in user engagement and can lead to revenue losses.

In the article, we setup an A/B testing scenario where we measure the impact of changing the discount amount in the header section of a React app. We covered everything from integrating Amplitude (amplitude-js) into our app to creating, tracking events and mimicking multiple unique user clicks.

## About the sample app
This is what the sample app looks like:

![image](https://user-images.githubusercontent.com/74829200/159141452-f9070379-9306-46c7-8809-15c3d829dd9a.png)
When the `Shop Now` button is clicked, an event is logged to the Amplitude analytics platform where we are able to analyze the clicks.

#### How to run the sample app
1. Clone this repository
2. Run `npm install` to install the app dependencies 
3. Run `npm run start` to run the app locally.
4. Thats it!
