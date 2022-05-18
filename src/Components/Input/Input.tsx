import React, { ChangeEvent, KeyboardEvent, useState } from "react";
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

    function onKeyPressHandler(event: KeyboardEvent<HTMLInputElement>) {  
        if(event.charCode === 13) {
            if(value.trim() !== "") {
                props.onSubmit(value);
                setValue("");
            } else {
                setPlaceholder("Enter something!")
            }
        }
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
            <div className={style.Button} onClick={onClickHandler}><i className="fa-solid fa-magnifying-glass"></i></div><input
            onKeyPress={onKeyPressHandler}
            onChange={onChangeHandler}
            value={value} 
            className={style.Input} 
            placeholder={placeholder}></input>
        </div>
    );
}

export default Input;