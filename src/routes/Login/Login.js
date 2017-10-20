import * as React from "react";
import Container from "containers/Login";
import Notifications from "containers/Notifications";
import cx from "classnames";
import css from "./login.module.scss";

const Login = ({ handleClose, test }) => (
  <div className={`login ${test}`}>
    <div className="login-header modal-header">
      <h2
        onClick={handleClose}
        className={cx("title is-6", css.title)}
        >Login to EOS</h2>

      <button
        className="js-modal-close"
        onClick={() => {
          console.log("hello world", handleClose)
        }}
      />
    </div>
    <div className="modal-body">
      <Notifications />

      <Container />
    </div>
  </div>
);

export default Login;