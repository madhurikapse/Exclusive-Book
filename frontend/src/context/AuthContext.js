import { createContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import Api from "../axiosconfig";

// Reducer Function
function reducer(state, action) {
  console.log(state, action, "inside reducer function..");
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

// Initial State
const initialState = { user: null };

// Create Context
export const AuthContext = createContext();

function MyContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch Current User
  async function getCurrentUser() {
    try {
      const response = await Api.get("/auth/get-current-user");
      if (response.data.success) {
        dispatch({ type: "LOGIN", payload: response.data.userData });
        toast.success("User authenticated successfully!");
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.error || "Failed to connect to the server.";
      toast.error(errorMessage);
    }
  }

  // Effect to Fetch User on Mount
  useEffect(() => {
    alert("page load sucessfully")
    getCurrentUser();
  }, []);

  // Provider
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default MyContextProvider;
