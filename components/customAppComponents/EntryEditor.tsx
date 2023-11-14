import React, { useEffect } from 'react';
import { EditorAppSDK } from '@contentful/app-sdk';
import { /* useCMA, */ useSDK } from '@contentful/react-apps-toolkit';

const Entry = () => {
  const sdk = useSDK<EditorAppSDK>();
  /*
     To use the cma, inject it as follows.
     If it is not needed, you can remove the next line.
  */
  // const cma = useCMA();
  return <h3>Hello Entry Editor Component (AppId: {sdk.ids.app})</h3>;
};

export default Entry;
