import React, { Component, createRef, Fragment, RefObject } from 'react';
import { themeContext } from '../../ThemeContext/ThemeContext';
import { RadioButtonField, RadioLabel } from '../../styledComponents';

interface Props {
    handleChangeInput: (value: string, type: string) => void;
    type: string;
}

class RadioContainer extends Component<Props> {
    private inputRef: RefObject<HTMLFormElement> = createRef();

    focusInput(shouldfocus: boolean) {
        if (this.inputRef.current) {
            if (shouldfocus)
                this.inputRef.current.focus();

            this.inputRef.current.style.border = '1px solid red';
        }



    }
    unfocusInput() {
        if (this.inputRef.current)
            this.inputRef.current.style.border = 'none';
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.id);
        // console.log(typeof (e.target.value));
        this.props.handleChangeInput(e.target.id, this.props.type);
    }

    render() {
        return (
            <themeContext.Consumer>
                {({ theme }) => (
                    <Fragment >

                        <form ref={this.inputRef}>
                            <RadioButtonField type="radio" theme={theme} id='male' name='gender' onChange={this.handleChange}></RadioButtonField>
                            <RadioLabel htmlFor='male' theme={theme}>Male</RadioLabel>
                            <RadioButtonField type="radio" theme={theme} id='female' name='gender' onChange={this.handleChange}></RadioButtonField>
                            <RadioLabel theme={theme} htmlFor='female'>Female</RadioLabel>
                        </form>


                    </Fragment>
                )}
            </themeContext.Consumer>
        )
    }

}

export default RadioContainer;