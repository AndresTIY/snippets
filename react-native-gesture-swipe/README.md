<img src="https://image.flaticon.com/icons/svg/109/109652.svg" height="150" alt="User swiping right" />

# Gesture Responder

Snippet by [Hannigand](https://github.com/hannigand/GestureResponder)

A small wrapper for the React Native PanResponder.

Wrap any component, or a selection of components to record User gestures.

```
<GestureResponder
  onSwipeRight={(x, y) => {
    console.log(`You scrolled right - ${x} ${y}`)
  }}
  onSwipeLeft={(x, y) => {
    console.log(`You scrolled left - ${x} ${y}`)
  }}
>
  <Text>I now record gestures 👈</Text>
</GestureResponder>
```

You can specify `onSwipeUp` and `onSwipeDown` functions. If you do specify them and the User scrolls in a North-West position, both `onSwipeUp` and `onSwipeLeft` will be fired.
