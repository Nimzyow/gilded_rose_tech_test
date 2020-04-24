# Makers Gilded Rose Tech Test challenge
This tech test allows us the opportunity to work on the Gilded Rose tech challenge with Jest. It is an exercise of applying the TDD process while refactoring.

## Table of content

- [Installation](#installation)
- [Testing](#testing)
- [Tech stack](#tech-stack)
- [Extra notes](#extra-notes)

## Installation

Install dependencies

```
npm install
```
That's it!

## Testing

To run all tests

```
npm test
```
You will see the test run in the command line.

To see test coverage, you can do so in one of two ways: 

1 - Navigate to coverage/Icov-report/index.html and run the file in the chrome browser. You should see test coverage and 100% passing tests. 

2 - in the root of the project, run the following in the terminal
```
yarn jest --coverage
```
You should see 100% passing tests in the command line.

## Tech stack

- JavaScript
- Jest

## Extra notes

This was an interesting twist to the usual TDD process we go through. We are presented with code that is the equivalent to a ball of string that's twisted in and out and we basically need to refactor it. 

We can't just start refactoring the code right from the get go as that doesn't guarantee the application will still function properly. So for whatever aspect of the code I wanted to refactor, I needed to make sure there were tests in place that will insure that what I refactor doesn't break the application.

I believe I saw the value of testing more than ever when going through the process of refactoring code that's already established. There were more than one occasion where a piece of refactoring led to the application breaking and my tests caught that which led me to effectively and swiftly resolve the issue.
