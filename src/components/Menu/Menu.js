import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import cx from "classnames";
import { CurrentEOSBalance } from "../Balance";
import Login from "components/LoginForm/index";
import Shortcuts from "components/Shortcuts";
import { doLogout } from "../../thunks/login";
import styles from "./styles.module.scss";

const unauthLinks = [
  {
    to: "/users",
    text: "Users"
  },
  {
    to: "/about",
    text: "About"
  },
  {
    to: "/faq",
    text: "FAQ"
  }
];
const authLinks = ({ onLogout }) => [
  [
    {
      to: "/transfer",
      text: "Transfer",
      iconClass: "icon-transfer u-mr1"
    },
    {
      to: "/transactions",
      text: "Transaction History",
      iconClass: "icon-history u-mr1"
    },
    {
      to: "/accounts",
      text: "Accounts",
      iconClass: "icon-account u-mr1"
    },
    {
      to: "/logout",
      onClick: onLogout,
      text: "Logout",
      iconClass: "icon-logout u-mr1"
    }
  ],
  ...unauthLinks
];

const Menu = props => {
  const { isAuthenticated } = props;
  return (
    <div className={cx("menu p-lg", styles.menu)}>
      {!isAuthenticated && <Login className="aside-login" modal={false} />}
      {isAuthenticated && (
        <div className={cx("u-p3", styles.financials)}>
          <CurrentEOSBalance />
        </div>
      )}

      <Shortcuts data={isAuthenticated ? authLinks(props) : unauthLinks} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(doLogout())
});

export default withRouter(connect(undefined, mapDispatchToProps)(Menu));
