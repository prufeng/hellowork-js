function asyncFunction(callback) {
    setTimeout(callback, 200);
}
var color = 'blue';
(function (color) {
    asyncFunction(function () {
        console.log('The color is ' + color);
    })
})(color);
color = 'green';

// you wrap the call to asyncFunction in an anonymous
// function that takes a color argument. You then execute the anonymous function
// immediately, sending it the current contents of color. By making color an argument
// for the anonymous function, it becomes local to the scope of that function, and when
// the value of color is changed outside of the anonymous function, the local version is
// unaffected.
