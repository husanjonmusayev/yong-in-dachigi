import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = "YOUR_CLIENT_ID";

function App() {
  const handleLoginSuccess = (response) => {
    console.log("Kirish muvaffaqiyatli:", response.profileObj);
  };

  const handleLoginFailure = (error) => {
    console.error("Kirishda xato:", error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Google bilan kirish"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default App;
