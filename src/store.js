import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { value: { username: "" } }

const userSlice = createSlice({
    name: "user",
    //the value is something to describe our name key
    //give the "value: " a value of { username: "" }
    //but to shorten the code, create an initialState variable in line 3
    // initialState: {value: {username: ""}},
    initialState,
    //define the reducers function. it takes in an argument in a state and
    //an action. the action will be something to modify the state which 
    //returns the new value of the state 
    //create 2 functions that will modify the state, these function will
    //return an object
    reducers: {
        //1st function
        login: (state, action) => {
            //payload is the one that takes in the value from outside store.js. if there will be payload, you should put action in the parameter
            //set the state.value to get the action.payload's value
            state.value = action.payload
        },
        //2nd function
        //set state to an empty state
        logout: (state) => {
            //make the "state" equal to the "initialState" variable because the
            //value of the username in initialState is an empty string
            state.value = initialState.value;
        }
    }
})
//export the 2 functions as variable with a value of userSlice.actions so it will be accessible outside store.js thru dispatch() method. we'll use dispatch() method for events
//userSlice is the object name with reference to line 5
//".actions" takes in reducers objects which are the login and logout in this example. 
    // Visualize it like this: 
    // userSlice{
    //     actions: {login, logout}
    // }
    //whatever function you type in as reducers above, becomes an object value of the "actions" key inside the userSlice
console.log(userSlice);
export const { login, logout } = userSlice.actions;

// we shall create a function called "store" and assign it the configureStore() method along with reducer object. We'll export it, and this will make the reducer objects in userSlice available across pages that are wrapped in <Provider store={store}>, we'll use the useSelector() method for display purposes in HTML.
//take note that the userSlice is the object we created above. The .reducer is one of its keys. You will see that if you go ahead and console log the userSlice
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
});
console.log(store);