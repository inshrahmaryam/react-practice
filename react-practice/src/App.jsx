import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import ErrorBoundary from './ErrorBoundary';

// Lazy load About page
const LazyAbout = lazy(() => import('./About'));

// Regular components
function Home() {
  return <h1>Home Page</h1>;
}

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About (Lazy)</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <Suspense fallback={<p>⏳ Loading About Page...</p>}>
              <ErrorBoundary>
                <LazyAbout />
              </ErrorBoundary>
            </Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
