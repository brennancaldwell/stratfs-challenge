# Debt Spreadsheet

A simple React SPA spreadsheet for tracking debt.

![Full Spreadsheet](./assets/spreadsheet.png?raw=true)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

This debt spreadsheet keeps track of and calculates debt totals based on user input. At the outset, the debt "Total" will represent the total of all data represented in the table.

Clicking a checkbox next to an entry will select that particular entry, and thereafter, the debt "Total" will reflect the sum of the balances of all selected entries.

![Spreadsheet With Selections](./assets/spreadsheetselected.png?raw=true)

When items are selected, a "Remove Debt" button appears. Clicking "Remove Debt" will delete all selected entries.

If you would like to add debt, click the "Add Debt" button, and a modal will pop up with inputs for the required fields.

![Add Debt Modal](./assets/adddebtmodal.png?raw=true)

Entering a value that cannot be parsed into a number in either the "Min Pay %" or "Balance" fields will execute an alert prompting the user to input acceptable values.

## Requirements

- Axios 0.19.2
- React 16.13.1
- react-modal 3.12.1


## Development

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
