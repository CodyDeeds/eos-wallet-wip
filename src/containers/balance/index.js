import { connect } from "react-redux";
import {
  selectEOSBalanceDifference,
  selectEOSTotalBalance
} from "../../redux-modules/eos-account/account-selectors";

const mapStateToProps = state => ({
  difference: selectEOSBalanceDifference(state),
  total: selectEOSTotalBalance(state)
});

export const withCurrentEOSBalance = connect(mapStateToProps);
