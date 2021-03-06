import { createSelector } from "reselect";

const selectAccountState = state =>
  state && state.eosAccount ? state.eosAccount.account : {};
const selectBalanceState = state =>
  state && state.eosAccount ? state.eosAccount.balance : {};

export const selectEOSAccountName = createSelector(
  selectAccountState,
  account => account.accountName
);

export const selectEOSOwnerKeys = createSelector(
  selectAccountState,
  account => account.ownerKeys
);

export const selectEOSActiveKeys = createSelector(
  selectAccountState,
  account => account.activeKeys
);

export const selectEOSTotalBalance = createSelector(
  selectBalanceState,
  balance => balance.total
);

export const selectEOSBalanceDifference = createSelector(
  selectBalanceState,
  balance => balance.difference
);

export const selectEOSPrivateKeys = createSelector(
  selectEOSActiveKeys,
  selectEOSOwnerKeys,
  (activeKeys, ownerKeys) => [activeKeys.privateKey, ownerKeys.privateKey]
);

export const selectEOSAccountRehydrated = createSelector(
  selectAccountState,
  account => (account._persist ? account._persist.rehydrated : false)
);
