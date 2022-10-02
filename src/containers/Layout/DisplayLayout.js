import React, { Component } from 'react';
import Personnel from '../../components/Personnel/Personnel';
import Gallery from '../../components/Gallery/Gallery';
import './Layout.css';

// ===== FUNCTIONAL COMPONENT SRC CODE =====
// function Gallery() {
//   return (
//     <div className="layout" data-testid="layout">
//       <div className="personnel" data-testid="personnel">
//         <Personnel />
//       </div>
//       <div className="gallery" data-testid="gallery">
//         <Gallery />
//       </div>
//     </div>
//   );
// }

// ===== CLASS COMPONENT SRC CODE =====
// eslint-disable-next-line react/prefer-stateless-function
export class DisplayLayout extends Component {
  render() {
    return (
      <div className="layout" data-testid="layout">
        <div className="personnel" data-testid="personnel">
          <Personnel />
        </div>
        <div className="gallery" data-testid="gallery">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default DisplayLayout;
