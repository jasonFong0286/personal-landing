// File: src/components/Landing/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black py-6 border-t border-gray-200 dark:border-gray-700 text-center">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Jason Fong. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;