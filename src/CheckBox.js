import React, {useReducer} from 'react'

export default function CheckBox(){
    const [checked, toggle] = useReducer(
        checked => !checked, //this is the Reducer, the function that's going to take in the old state and return a new state.
        false
    );
    return(
        <>
            <label htmlFor="checkbox">{checked ? "checked" : "not checked"}</label>
            <input 
            id="checkbox"
            type="checkbox"
            value={checked}
            onChange={toggle}
            />
        </>
    )
}