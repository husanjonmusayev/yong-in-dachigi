import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import "./App.css";

const clientId =
  "191503931009 - eqlrq4m79dknuiis7tli75c1dvgjkoom.apps.googleusercontent.com";

function App() {
  const handleLoginSuccess = (response) => {
    console.log(10, response.profileObj);
  };

  const handleLoginFailure = (error) => {
    console.error("Kirishda xato:", error);
  };
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div>
        <GoogleLogin
          buttonText="Google bilan kirish"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
