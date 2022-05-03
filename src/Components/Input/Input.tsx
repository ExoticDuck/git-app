import React, { ChangeEvent, useState } from "react";
import style from "./Input.module.css";

type InputPropsType = {
    value: string
    onSubmit: (value: string) => void
}

let Input: React.FC<InputPropsType> = (props) => {
    let [value, setValue] = useState(props.value);
    let [placeholder, setPlaceholder] = useState("Enter GitHub username")

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        if(placeholder !== "Enter GitHub username") {
            setPlaceholder("Enter GitHub username");
        }
        setValue(e.currentTarget.value);
    }
    
    function onClickHandler() {
        if(value.trim() !== "") {
            props.onSubmit(value);
            setValue("");
        } else {
            setPlaceholder("Enter something!")
        }
    }

    return(
        <div className={style.InputContainer}>
            <button className={style.Button} onClick={onClickHandler}><i className="fa-solid fa-magnifying-glass"></i></button><input
            onChange={onChangeHandler}
            value={value} 
            className={style.Input} 
            placeholder={placeholder}></input>
        </div>
    );
}

export default Input;