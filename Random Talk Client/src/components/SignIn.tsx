import CustomForm from "../components/CustomForm";
import CustomInput from "../components/CustomInput";
import { forwardRef, useReducer } from "react";
import formReducer from "../lib/formReducer";

const SignIn = forwardRef<HTMLFormElement>((_, ref) => {
  const initialState = {
    username: "",
    password: "",
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <CustomForm title='Sign In' buttonText='Sign In!' ref={ref}>
      <CustomInput
        onChange={e =>
          dispatch({ type: "changeUsername", nextValue: e.target.value })
        }
        value={state.username}
        label='User Name'
        placeholder='your_user_name'
        id='user-name'
      />
      <CustomInput
        onChange={e =>
          dispatch({ type: "changePassword", nextValue: e.target.value })
        }
        value={state.password}
        label='Password'
        placeholder='catslover3059'
        id='password'
      />
    </CustomForm>
  );
})

export default SignIn;
