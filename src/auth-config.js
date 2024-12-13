import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "de832a72-b92c-4377-a8f2-eead4bec81c5",
    authority:
      "https://login.microsoftonline.com/3882b70d-a91e-468c-9928-820358bfbd73",
    redirectUri: "/",
    postLogoutRedirectUri: "/",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;

          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};
export const loginRequest = {
  scopes: ["user.read"],
};
