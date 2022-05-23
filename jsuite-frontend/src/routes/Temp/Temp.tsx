import {Global, Title} from './Temp.styles'
import {Outlet, Link} from 'react-router-dom';
import SharedTemp from '../../components/SharedTemp/SharedTemp';

const Temp = () => {
    return (
        <Global>
          <Title>Welcome to JSuite!</Title>
          {/* Here goes the app's components */}
          <nav>
            <Link to="/invoices">Invoices</Link> {" "}
          </nav>
          <Outlet />
          <SharedTemp></SharedTemp>
        </Global>
      );
}

export default Temp;