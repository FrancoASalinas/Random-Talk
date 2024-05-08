import CustomForm from "../components/CustomForm";
import CustomInput from "../components/CustomInput";
import { useReducer } from "react";
import formReducer from "../lib/formReducer";

function SignIn() {
  const initialState = {
    username: "",
    password: "",
  };
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <CustomForm title='Sign In' buttonText='Sign In!'>
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
    </CustomForm>
  );
}

export default SignIn;
