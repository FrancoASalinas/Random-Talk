import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ReactNode } from "react";


export default class TestForm {
    private _title: string;
    private _buttonText: string;
    private _element: any;
  
    constructor(title: string, buttonText: string, element: ReactNode) {
      this._title = title;
      this._buttonText = buttonText;
      this._element = element;
    }
  
    _setup() {
      return { user: userEvent.setup(), ...render(this._element) };
    }
  
    assertRendersInput(label: string) {
      this._setup();
      screen.getByLabelText(label);
    }
  
    assertInputGetsValue = async (label: string) => {
      const { user } = this._setup();
      const text = "testing text";
  
      const input = screen.getByLabelText(label);
      await user.type(input, text);
      expect(input).toHaveValue(text);
    };
  
    assertRendersTitle() {
      this._setup();
      screen.getByText(this._title);
    };
  
    assertRendersButton(){
      this._setup();
      screen.getByText(this._buttonText);
    }
  }