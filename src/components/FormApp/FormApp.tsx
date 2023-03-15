import React, { Component, createRef, Fragment, RefObject } from "react";
import CheckBoxContainer from "../CheckBoxContainer/CheckBoxContainer";
import DropDownContainer from "../DropDownContainer/DropDownContainer";
import InputContainer from "../InputContainer/InputContainer";
import RadioContainer from "../RadioBoxContainer/RadioContainer";
import { SubmitButton, ThemeButton, FormContainer } from "../../styledComponents";
import {age,year} from "../../constants/FormAppConstants";
import { themeContext } from "../../ThemeContext/ThemeContext";
import "../../App.css";

interface InputContainerState {
    Name: string;
    College: string;
    Gender: string;
    Age: string;
    Year: string;
    TermsAndConditions: boolean;
}

class FormApp extends Component<{}, InputContainerState> {
    private nameRef: RefObject<InputContainer> = createRef<InputContainer>();
    private ageRef: RefObject<DropDownContainer> = createRef<DropDownContainer>();
    private genderRef: RefObject<RadioContainer> = createRef<RadioContainer>();
    private termsRef: RefObject<CheckBoxContainer> = createRef<CheckBoxContainer>();
    private collegeRef: RefObject<InputContainer> = createRef<InputContainer>();
    private yearRef: RefObject<DropDownContainer> = createRef<DropDownContainer>();

    constructor(props: {}) {
        super(props);
        this.state = {
            Name: "",
            College: "",
            Gender: "",
            Age: "",
            Year: "",
            TermsAndConditions: false


        };
    }

    age = age;
    collegeYears = year;

    handleSubmit = () => {
        let isFirst = false;
        if (this.state.Name === "") {
            if (isFirst === false) {
                isFirst = true;
                this.nameRef.current?.focusInput(isFirst);
            }
            else {
                this.nameRef.current?.focusInput(false);
            }

        }
        else {
            this.nameRef.current?.unfocusInput();
        }
        if (this.state.Age === "") {
            if (isFirst === false) {
                isFirst = true;
                this.ageRef.current?.focusInput(isFirst);
            }
            else {
                this.ageRef.current?.focusInput(false);

            }
        }
        else {
            this.ageRef.current?.unfocusInput();
        }
        if (this.state.Gender === "") {
            if (isFirst === false) {
                isFirst = true;
                this.genderRef.current?.focusInput(isFirst);
            }
            else {
                this.genderRef.current?.focusInput(false);

            }
        }
        else {
            this.genderRef.current?.unfocusInput();
        }
        if (this.state.TermsAndConditions === false) {
            if (isFirst === false) {
                isFirst = true;
                this.termsRef.current?.focusInput(isFirst);
            }
            else {
                this.termsRef.current?.focusInput(false);
            }
        }
        else {
            this.termsRef.current?.unfocusInput();
        }
        if (this.state.College === "") {
            if (isFirst === false) {
                isFirst = true;
                this.collegeRef.current?.focusInput(isFirst);
            }
            else {
                this.collegeRef.current?.focusInput(false);
            }
        }
        else {
            this.collegeRef.current?.unfocusInput();
        }
        if (this.state.Year === "") {
            if (isFirst === false) {
                isFirst = true;
                this.yearRef.current?.focusInput(isFirst);
            }
            else {
                this.yearRef.current?.focusInput(false);
            }
        }
        else {
            this.yearRef.current?.unfocusInput();
        }

    }




    handleChangeInput = (value: string | boolean, type: string) => {
        if (typeof (value) === 'string') {
            if (type === 'name') {
                this.setState({
                    Name: value
                });
            }
            if (type === 'age') {

                this.setState({
                    Age: value
                });
            }
            if (type === 'gender') {

                this.setState({
                    Gender: value
                });
            }
            
            if (type === 'college') {

                this.setState({
                    College: value
                });
            }
            if (type === 'year') {

                this.setState({
                    Year: value
                });
            }
        }
        else if(typeof(value) === 'boolean'){
            if (type === 'terms') {

                this.setState({
                    TermsAndConditions: value
                });
            }
        }

    }




    render() {

        return (
            <themeContext.Consumer>
                {({ theme, toggleTheme }) => (
                    <FormContainer theme={theme}>
                        <InputContainer
                            ref={this.nameRef}
                            handleChangeInput={this.handleChangeInput}
                            type={"name"}

                        />
                        <DropDownContainer ref={this.ageRef}
                            age={this.age}
                            handleChangeInput={this.handleChangeInput}
                            type={"age"}
                        />
                        <RadioContainer
                            ref={this.genderRef}

                            handleChangeInput={this.handleChangeInput}
                            type={"gender"}
                        />
                        <CheckBoxContainer
                            ref={this.termsRef}
                            handleChangeInput={this.handleChangeInput
                            }
                            type={"terms"}
                        />
                        <InputContainer
                            ref={this.collegeRef}
                            handleChangeInput={this.handleChangeInput}
                            type={"college"}
                        />

                        <DropDownContainer ref={this.yearRef}
                            age={this.collegeYears}
                            handleChangeInput={this.handleChangeInput}
                            type={"year"}
                        />
                        <SubmitButton theme={theme} onClick={this.handleSubmit}>Submit</SubmitButton>
                        <ThemeButton onClick={toggleTheme} theme={theme}>Toggle Theme</ThemeButton>
                    </FormContainer>
                )}
            </themeContext.Consumer>


        );
    }
}

export default FormApp;
