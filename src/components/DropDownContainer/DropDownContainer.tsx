import React, { Component, createRef, RefObject } from 'react';

import { DropDownField } from '../../styledComponents';
import { themeContext } from '../../ThemeContext/ThemeContext';
interface Props {
    handleChangeInput: (value: string, type: string) => void;
    age: number[];
    type: string;
}

class DropDownContainer extends Component<Props> {
    private inputRef: RefObject<HTMLSelectElement> = createRef();
    state = { dropdownValue: '' }

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

    handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        //  console.log(e.target.value);
        console.log(typeof (e.target.value));
        this.setState({ dropdownValue: e.target.value });
        this.props.handleChangeInput(e.target.value, this.props.type);
    }

    render() {
        console.log(this.state.dropdownValue);
        return (
            <themeContext.Consumer>
                {({ theme }) => (
                    <DropDownField ref={this.inputRef} onChange={this.handleChange} value={this.state.dropdownValue || ''} >
                        <option value="">Select {this.props.type}</option>
                        {
                            this.props.age.map((age: number, index) => {
                                return <option key={index} value={age}>{age}</option>
                            })}
                    </DropDownField >
                )}
            </themeContext.Consumer>

        );
    }
}

export default DropDownContainer;