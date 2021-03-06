import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { change } from "redux-form";
import TransferForm from "./TransferForm";
import { selectEOSTotalBalance } from "../../redux-modules/eos-account/account-selectors";
import { doTransfer } from "../../thunks/transfer";

function setAmountToBalance() {
  return (dispatch, getState) => {
    const balance = selectEOSTotalBalance(getState());

    return dispatch(change("transfer", "amount", balance));
  };
}

const mapDispatchToProps = dispatch => ({
  callAPI(values) {
    return dispatch(doTransfer(values.to, values.amount, values.memo));
  },
  updateAmount() {
    dispatch(setAmountToBalance());
  }
});

export const EOSTransferForm = connect(null, mapDispatchToProps)(TransferForm);

export default withRouter(EOSTransferForm);
