import { render, screen } from "@testing-library/react";
import CustomInput from "../components/CustomInput";
import userEvent from "@testing-library/user-event";

it("Should render label", () => {
  const label = "username";
  new InputWithDefaultProps({ label: label }).setup();
  screen.getByLabelText(label);
});

it("Should render placeholder", () => {
  const placeholder = "placeholder";
  new InputWithDefaultProps({ placeholder: placeholder }).setup();
  screen.getByPlaceholderText(placeholder);
});

it("Should have a value property as input text", () => {
  const text = "testing";
  new InputWithDefaultProps({ value: text }).setup();
  screen.getByDisplayValue(text);
});

it("Should call callback function on change", async () => {
  const callback = vi.fn();
  const user = userEvent.setup();
  const input = new InputWithDefaultProps({ onChange: callback });

  input.setup()
  await user.type(screen.getByLabelText(input.label), "asd");
  expect(callback).toHaveBeenCalled();
});

class InputWithDefaultProps {
  _label: string;
  _value: string;
  _id: string;
  _onChange: () => void;
  _placeholder: string;

  constructor({
    label,
    value,
    id,
    onChange,
    placeholder,
  }: {
    label?: string;
    value?: string;
    id?: string;
    onChange?: () => any;
    placeholder?: string;
  }) {
    this._label = label || "label";
    this._value = value || "value";
    this._id = id || "1";
    this._placeholder = placeholder || "placeholder";
    this._onChange = () => {if(onChange){return onChange()}; return}
  }

  setup = () => {
    render(
      <CustomInput
        onChange={this._onChange}
        label={this._label}
        id={this._id}
        value={this._value}
        placeholder={this._placeholder}
      />
    );
  };
  
  get label() {return this._label.slice()}
}
