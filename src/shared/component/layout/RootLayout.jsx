
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Link } from 'react-router-dom';

function RootLayout({children}) {
  return (
    <div className="root-main">
        <Link to="/">Home</Link>
        <Link to="/calcu">Calculator</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/List">List</Link>
        <Header />
          {children}
        <Footer />
    </div>
  );
}

export default RootLayout;
