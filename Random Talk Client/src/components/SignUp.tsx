import { useState } from "react";
import CustomInput from "./CustomInput";
import PrimaryButton from "./PrimaryButton";

function SignUp() {
  const [fieldCollection, setFieldCollection] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <form action='' className='flex flex-col gap-6 bg-grape-900 p-5 rounded-xl items-center'>
      <legend className='text-5 font-medium font-headline self-start'>Sign Up</legend>
      <CustomInput
        onChange={e =>
          setFieldCollection({ ...fieldCollection, username: e.target.value })
        }
        value={fieldCollection.username}
        label='User Name'
        placeholder='a_good_name'
        id='user-name'
      />
      <CustomInput
        onChange={e =>
          setFieldCollection({ ...fieldCollection, password: e.target.value })
        }
        value={fieldCollection.password}
        label='Password'
        placeholder='pickAH4RD1'
        id='password'
      />
      <CustomInput
        onChange={e =>
          setFieldCollection({
            ...fieldCollection,
            confirmPassword: e.target.value,
          })
        }
        value={fieldCollection.confirmPassword}
        label='Confirm Password'
        id='confirm-password'
      />
      <PrimaryButton text='Sign Up!' padding="2" textSize="4"/>
    </form>
  );
}

export default SignUp;
