import React from 'react';
import { DialogAppSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Dialog = () => {
  const sdk = useSDK<DialogAppSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();

  return <h3>Hello Dialog Component (AppId: {sdk.ids.app})</h3>;
};

export default Dialog;
