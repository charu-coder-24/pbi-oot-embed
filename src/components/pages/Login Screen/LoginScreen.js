import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { reportsDataDummy } from "../../../datasets/reports";
import backgroundImage from "../../../assets/illustration_dashboard.png"
import "./loginScreen.scss"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MicrosoftIcon from '@mui/icons-material/AcUnit';
import { MsalContext, useMsal } from "@azure/msal-react";
import * as config from "../../../Config";


const LoginScreen = (props) => {
  const { name, subMenus, iconClassName, onClick, to, exact, handleLogin } = props;
  const [expand, setExpand] = useState(false);
  //   reportsDataDummy
  const { instance, accounts, inProgress } = useMsal();

  useEffect(() => {
    if (accounts.length > 0 && sessionStorage.getItem("access_token") == null) {
      // props.handleLogin()
      const msalInstance = instance;
      const loginRequest = {
        scopes: config.scopeBase,
        account: accounts[0],
      };
      msalInstance
        .acquireTokenSilent(loginRequest)
        .then((response) => {

          sessionStorage.setItem("access_token", response.accessToken)
          props.updateAuthenticateStatus(true)
        })
        .catch((error) => {
          if (
            error.errorCode === "consent_required" ||
            error.errorCode === "interaction_required" ||
            error.errorCode === "login_required"
          ) {
            msalInstance.acquireTokenRedirect(loginRequest);
          } else if (error.errorCode === "429") {
            return ({ error: ["Our Service Token Server (STS) is overloaded, please try again in sometime"] });
          } else {
            return ({ error: ["There was some problem fetching the access token" + error.toString()] });
          }
        });
    }
  })
  return (
    <div className="page-container">
      <div className="img_bg" style={{ backgroundImage: `url(${backgroundImage})` }}>

        {/* Add your other components/content here */}
      </div>
      <div className="bg_content">
        <h1>Welcome to our Enhanced Analytics Hub - Unleashing the Power of Embedding!"
        </h1>
        <Button className={"button"} variant="outlined" startIcon={<MicrosoftIcon />} onClick={props.handleLogin}>Sign In with Microsoft</Button>
      </div>

    </div>

  );
};

export default LoginScreen;
