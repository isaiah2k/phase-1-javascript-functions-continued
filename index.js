// Function to describe a fun activity to do on Saturday
function saturdayFun(activity = 'roller-skate') {
    // Returns a string describing the activity to do on Saturday
    return `This Saturday, I want to ${activity}!`
}
// Function to describe the work activity to do on Monday
function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
    // Returns a string describing the work activity to do on Monday
}
// Function to create a function that wraps an adjective with a given wrapper
function wrapAdjective (wrap = "*") {
    // Returns a function that takes an adjective and returns a string with that adjective wrapped in the wrapper
    return function (adjective = "special") {
        return `You are ${wrap}${adjective}${wrap}!`
    }
}
