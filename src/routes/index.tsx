import Landing from '@/pages/landing/Landing';
import { Routes, Route } from 'react-router-dom';

/**
 * Centralized routing component
 */
export default function Router() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/"                 element={<Landing />} />
    </Routes>
  );
}
