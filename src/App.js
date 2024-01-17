import logo from './logo.svg';
import './App.css';

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>
            xlk <img src={logo} className="App-logo" alt="logo" />
          </p>
          <withAuthenticator>
            {({ signOut, user }) => (
              <main>
                <h1>hello { user.username }</h1>
                <button onClick={ signOut }>sign out</button>
              </main>
            )}
          </withAuthenticator>
      </header>
    </div>
  );
}

export default withAuthenticator(App);