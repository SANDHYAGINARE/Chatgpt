import '@/styles/globals.css'

// // export default function App({ Component, pageProps }) {
// //   return <Component {...pageProps} />
// // }
// import { I18nextProvider } from 'react-i18next';
// import i18n from '../i18n.js';
// import { useEffect, useState } from 'react';

// function App({ Component, pageProps }) {
//   const [initialRenderComplete, setInitialRenderComplete] = useState(false);

//   useEffect(() => {
//     setInitialRenderComplete(true);
//   }, []);

//   if (!initialRenderComplete) return <></>;
//   return (
//     <I18nextProvider i18n={i18n}>
//       <Component {...pageProps} />
//     </I18nextProvider>
//   );
// }

// export default App;
import { appWithTranslation } from "next-i18next";
import { useEffect, useState } from "react";

function App({ Component, pageProps }) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;

  return <Component {...pageProps} />;
}

export default appWithTranslation(App);
