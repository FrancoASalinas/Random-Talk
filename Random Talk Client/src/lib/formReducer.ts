type Forms =
  | { username: string; password: string }
  | { username: string; password: string; confirmPassword: string };

type Action = {
  type: "changeUsername" | "changePassword" | "changeConfirmPassword";
  nextValue: string;
};

function formReducer<State extends Forms>(state: State, action: Action) {
  switch (action.type) {
    case "changeUsername":
      return { ...state, username: action.nextValue };
    case "changePassword":
      return { ...state, password: action.nextValue };
    case "changeConfirmPassword":
      return { ...state, confirmPassword: action.nextValue };
    default:
      throw new Error("Action doesn't exist");
  }
}

export default formReducer;
