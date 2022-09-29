import React, { Component } from 'react';
import Professional from '../../components/Professional/Professional';
import Personnel from '../../components/Personnel/Personnel';
import './Layout.css';

// ===== FUNCTIONAL COMPONENT SRC CODE =====
// function Layout() {
//   return (
//     <div className="layout" data-testid="layout">
//       <div className="personnel" data-testid="personnel">
//         <Personnel />
//       </div>
//       <div className="professional" data-testid="professional">
//         <Professional />
//       </div>
//     </div>
//   );
// }

// ===== CLASS COMPONENT SRC CODE =====
// eslint-disable-next-line react/prefer-stateless-function
export class Layout extends Component {
  render() {
    return (
      <div className="layout" data-testid="layout">
        <div className="personnel" data-testid="personnel">
          <Personnel />
        </div>
        <div className="professional" data-testid="professional">
          <Professional />
        </div>
      </div>
    );
  }
}

export default Layout;
