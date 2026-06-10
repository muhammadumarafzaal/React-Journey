# React Props Drilling & State Lifting

This module explores two fundamental data flow concepts in React:
1. **Props Drilling**: Passing data from a higher-level parent component to deeply nested child components through intermediate components that do not need the data themselves.
2. **State Lifting**: Moving state up to the closest common ancestor of components that need to share state.

## Concepts Covered
- Managing parent-child data flow via props.
- Disadvantages of deep prop drilling (maintenance overhead, coupled components).
- Lifting state up to enable sibling component communication.
- Synchronizing state updates using callback functions.
