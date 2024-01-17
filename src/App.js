import logo from './logo.svg';
import './App.css';

import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>
            xlk
          </p>
          <Authenticator>
            {({ signOut, user }) => (
              <main>
                <h1>hello { user.username }</h1>
                <button onClick={ signOut }>sign out</button>
              </main>
            )}
          </Authenticator>
          <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}