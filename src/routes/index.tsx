import Landing from '@/pages/landing/Landing';
import NotFound from '@/pages/NotFound';
import { Routes, Route, Navigate } from 'react-router-dom';

/**
 * Centralized routing component
 */
export default function Router() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/"                 element={<NotFound />} />

      {/* Protected Route (Required Authentication) */}

      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
