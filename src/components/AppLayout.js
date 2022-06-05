import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <h2>Application Layout</h2>
      <Outlet />
    </div>
  );
};

export default AppLayout;
