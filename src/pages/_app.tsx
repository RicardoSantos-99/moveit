import '../styles/globals.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { Children, useState } from 'react';

function MyApp ({ Component, pageProps }) {
  

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
