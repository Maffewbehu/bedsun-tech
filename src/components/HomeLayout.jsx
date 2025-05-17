import { Outlet } from 'react-router-dom';

export default function HomeLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 text-center px-4">
      <Outlet />
    </div>
  );
}
