import CustomInput from "./CustomInput";
import CustomForm from "../components/CustomForm";
import { forwardRef, useReducer } from "react";
import formReducer from "../lib/formReducer";

const SignUp = forwardRef<HTMLFormElement>((_, ref) => {
  
  const initialState = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [state, dispatch] = useReducer(
    formReducer<typeof initialState>,
    initialState
  );

  return (
    <CustomForm ref={ref} buttonText='Sign Up!' title='Sign Up'>
      <CustomInput
        onChange={e =>
          dispatch({ type: "changeUsername", nextValue: e.target.value })
        }
        value={state.username}
        label='User Name'
        placeholder='a_good_name'
        id='user-name'
      />
      <CustomInput
        onChange={e =>
          dispatch({ type: "changePassword", nextValue: e.target.value })
        }
        value={state.password}
        label='Password'
        placeholder='pickAH4RD1'
        id='password'
      />
      <CustomInput
        onChange={e =>
          dispatch({ type: "changeConfirmPassword", nextValue: e.target.value })
        }
        value={state.confirmPassword}
        label='Confirm Password'
        id='confirm-password'
      />
    </CustomForm>
  );
})

export default SignUp;
