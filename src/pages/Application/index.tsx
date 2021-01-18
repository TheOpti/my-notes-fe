import React, { PureComponent } from 'react';

import { AuthContext } from 'context/auth';
import type { AuthContextType } from 'types/context';

import Navbar from 'containers/Navbar';

class Application extends PureComponent {
  render(): React.ReactNode {
    return (
      <div>
        <Navbar />
        <div>
          This part is visible only for logged users
        </div>
        <AuthContext.Consumer>
          {({ logout }: AuthContextType) => (
            <button onClick={logout}>
              Logout from the app
            </button>
          )}
        </AuthContext.Consumer>
      </div>
    );
  }
}

export default Application;
