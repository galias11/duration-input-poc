# Duration Input

## Problem

Build a form input that accepts durations of the form `mm:ss.SSS` where `mm` are minutes, `ss` are seconds, and `SSS` are milliseconds. Each character represents a digit - so the input should have 2 digits for minutes, 2 digits for seconds, and 3 digits for milliseconds. You can assume that the minimum value is 0 milliseconds (`00:00.000`) and the maximum value is 5,999,999 milliseconds (`99:59.999`).

## Requirements

The input component must...

- allow the parent component to specify the value in milliseconds
- provide a way for the parent to get the millisecond value as the input changes
- display the input in the format outlined above - `mm:ss.SSS`

## Optional Features

An input that meets the requirements is good, but we can probably do better. Time permitting, you
might want to tackle some of these optional features that can make the component easier to work with as well as improve the user experience.

The optional features listed here aren't in any particular order - you can add them to your component as you see fit. You also don't need to add these features directly to your component. For example, if you think a feature below should be the parent component's responsibility, you can just add some code showing how the feature is supported. Keep in mind however that this input might be used in many places in the same application and having every component that uses the input manage state for the features below could make the component difficult to use and lead to a lot of duplicated code.

### Cancel Input

As a user, I might type something into the input accidentally. This feature reverts the input to its last known valid state if the user presses `Esc` while the input is in focus.

For example:

1. input reads `00:12.000`
2. user modifies the value to `00:12.123`
3. user presses `Esc`. when this happens, the input should switch back to rendering `00:12.000`

### Input Validation

As a user, it would be nice to know if the input I entered is valid. Based on the requirements above, the user can technically type anything he wants in the input. What if he types non-numeric characters or enters something else into the input that doesn't match the required format?

You can handle this any way you want - prevent characters that aren't valid given the required format, have an error callback that forces the parent to deal with the bad input, etc. The error state should be rendered when the input loses focus.

### Static Input Characters

As a user, having to type the specific `mm:ss.SSS` format is a little painful. We can make this easier on the user by "fixing" the `:` and `.` characters so that the user doesn't have to type them. We should also restrict the user from inputting any invalid characters.

You might find that you need a placeholder for characters that the user didn't input. You can use any placeholder you'd like, but consider that some placeholders might provide a better user experience than others.

### Unbounded Input Value

Some parts of the site might need to support 3 or more digits for the minutes part of the input. This feature adds support for 3 or more minute digits.

### Min / Max Input Value

This feature adds support for a min/max bound for the input component.

What happens if the user enters something that's out of bounds? You can handle this any way you see fit. If an out of bounds value is entered, you might want to set the input to the min/max value or you might choose to render an error state, forcing the user to fix it.

### Arrow Key Controls

Numeric inputs typically support changing the value with the arrow keys. While this isn't technically a numeric input, it does contain numbers and users might expect it to work similarly to a numeric input.

Pressing the up arrow key should increase the time and pressing the down arrow should decrease the time. It would also be nice if pressing and holding up/down continued to increase/decrease the value in the input, but this is harder to support and not required for this feature.

You can increment / decrement the input value in any way you'd like. For example, pressing up might increase the input by 1 millisecond, 1 second, etc. You might also want to detect where the cursor is and only adjust that value. For example, given the input `12:34.567` with the cursor between `3` and `4` would increase only the seconds portion of the input.

## Test Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

The test project is setup with boilerplate to get you started. You can install any npm packages that will help with your solution (make sure to save the dependencies to package.json so we can run your code). Since this is a React project, there shouldn't be a need for jQuery or other libraries that modify the DOM outside the context of React.

You can modify the project however you like. The following features are included by default:

- `Solution.jsx` is mapped to `http://localhost:3000` and should be used to render your solution. You can create files for your solution as you see fit
- We use a lot of Typescript in our frontend code. You're not required to use Typescript for your solution, but it is fully supported in the project

If you have any questions or issues with the test project, please let us know.

## Your Solution

You should submit your solution by zipping up your project and emailing it back to us. Please don't include any libraries you used in your solution - we will run `yarn` before testing your code.
