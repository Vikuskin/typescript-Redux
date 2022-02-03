import React from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelector";

export const Counter: React.FC = () => {    
    const counter = useTypedSelector(state => state.counter.counter);
    const theme = useTypedSelector(state => state.theme.value);
    const {increment, decrement, themeChangeDark, themeChangeLight} = useActions();

    return (
        <>  
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <div>
                <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button>
                <button onClick={() => theme === 'light' ? themeChangeDark() : themeChangeLight()}>Change theme</button>
            </div>
        </>
    )
}