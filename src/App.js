import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from './routes';
const auth = {
  userName: null,
  token: null,
};

const App = () => {
  const userAuth = useSelector((state) => state.auth);
  const content = useRoutes(routes(userAuth));

  console.log(userAuth);

  return <div>{content}</div>;
};

export default App;
