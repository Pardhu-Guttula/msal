import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
  MsalProvider,
} from "@azure/msal-react";
import { loginRequest } from "./auth-config";
import { ClassNames } from "@emotion/react";

const WrappedView = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const handleRedirect = () => {
    instance
      .loginRedirect({
        ...loginRequest,
        prompt: "create",
      })
      .catch((error) => console.log(error));
  };
  const handleLogout = () => instance.logout();
  return (
    <div className="App">
      <AuthenticatedTemplate>
        {activeAccount ? (
          <div>
            Authenticated Successfully...{" "}
            <div>
              Wanna Logout? Click Here
              <button onClick={handleLogout}>Log Out</button>
            </div>
          </div>
        ) : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button onClick={handleRedirect}>Sign up</button>
      </UnauthenticatedTemplate>
    </div>
  );
};

const App = ({ instance }) => {
  return (
    <MsalProvider instance={instance}>
      <WrappedView />
    </MsalProvider>
  );
};

export default App;
