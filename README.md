# React 19 useEffect Cleanup Issue

This repository demonstrates a problem with the useEffect cleanup function in React 19.  The cleanup function, intended to run when the component unmounts, is not executing as expected.

## Problem Description

The `useEffect` hook is used with an empty dependency array to ensure it only runs once on mount. A cleanup function is provided to log a message when the component unmounts. However, this message is not being logged, suggesting the cleanup function isn't being called.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console logs.  The 'Effect running' log appears, but 'Cleanup function running' does not when the component is unmounted.

## Solution

The solution is provided in `bugSolution.js` and involves double checking that the component is actually unmounting (e.g. using a wrapper component with a conditional rendering) and ensuring no errors are preventing cleanup.