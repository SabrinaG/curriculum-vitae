import Professional from '../Professional/Professional';
import Personnel from '../Personnel/Personnel';
import './Layout.css';

function Layout() {
  return (
    <div className="layout">
      <div className="personnel">
        <Personnel />
      </div>
      <div className="professional">
        <Professional />
      </div>
    </div>
  );
}

export default Layout;
