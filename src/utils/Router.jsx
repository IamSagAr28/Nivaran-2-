import React, { useState, useEffect } from 'react';

// Simple Router Hook
export const useRouter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return {
    currentPath,
    navigateTo
  };
};

// Simple Router Component
export const Router = ({ children, fallback = null }) => {
  const { currentPath } = useRouter();

  const childArray = React.Children.toArray(children);
  const matchedChild = childArray.find(child => {
    return React.isValidElement(child) && child.props.path === currentPath;
  });

  if (matchedChild) {
    return matchedChild;
  }

  // Return fallback component for 404 pages
  return fallback;
};

// Route Component
export const Route = ({ path, component: Component }) => {
  return <Component />;
};