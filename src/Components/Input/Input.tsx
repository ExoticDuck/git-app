import React, { ChangeEvent, useState } from "react";
import style from "./Input.module.css";

type InputPropsType = {
    value: string
    onSubmit: (value: string) => void
}

let Input: React.FC<InputPropsType> = (props) => {
    let [value, setValue] = useState(props.value);

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.currentTarget.value);
    }
    
    function onClickHandler() {
        debugger
        
            props.onSubmit(value);
            // setValue("");
        
    }

    return(
        <div className={style.InputContainer}>
            <button className={style.Button} onClick={onClickHandler}><i className="fa-solid fa-magnifying-glass"></i></button><input
            onChange={onChangeHandler}
            value={value} 
            className={style.Input} 
            placeholder={"Enter GitHub username"}></input>
        </div>
    );
}

export default Input;