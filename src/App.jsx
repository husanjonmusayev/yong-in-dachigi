import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "191503931009-eqlrq4m79dknuiis7tli75c1dvgjkoom.apps.googleusercontent.com";

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
