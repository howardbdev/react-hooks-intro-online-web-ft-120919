# What are  some differences between class components and function components in React?? (cut and dry)

- class components are defined as JS classes, function components are defined as functions (function declarations, function expressions, or arrow arrow function expressions, these are all available to build function components)
- class components inherit (extend) from `React.Component` -- function components do not
- class components can have state -- function components cannot!
  - we declare state in a class component one of two ways:
  1. in constructor, after calling `super(props)` , `this.state = {}`
  2. using public class fields proposal, `state = {}`
- class components have access to certain methods, including `.render()`, `.constructor()`, `.componentDidMount()`, and all the LIFECYCLE METHODS! -- function components do not!
- class components use the `this` keyword -- function components do not!

# Container vs presentational components in React (blurry line)

## Container components typically:
  - are class components
  - may have state
  - may use advanced lifecycle methods
  - may contain a good bit of "business logic"

## Presentational components typically
  - are stateless function components
  - are concerned with how some actually looks at a granular

# But wait, now we have React Hooks!!!!

## What are React Hooks?

React Hooks represet a set of functions that allow function components to be stateful and effectively mimic lifecycle behaviors.

Further, React has allowed us to build and use our own hooks!

The two main hooks we will look at:
- `useState()` and `useEffect()`
- `useState()` is for adding state to function components
- `useEffect()` is for adding functionality to function components


Lots of React libraries now have their own hooks (Redux, react-router-dom, to name two..)

SOME POST LECTURE NOTES:
If you were in lecture you noticed I hit a snag when using the `useEffect()` -- remember I called one of the state variables `interval`?  And its setter, conventionally, `setInterval`?  ... Well, `setInterval` is the function in JS that starts an interval, hence the crazy requests we were seeing.. On top of that, `useEffect` can, and did, in this case, cause trouble if we don't 'watch' the variables involved, in other words, add them to the array of variables to invoke the callback when changed.  Turns out intervals are tricky with hooks so for the sake of a more straightforward example I removed the interval and replaced it with a button to cycle through the reviews instead.
