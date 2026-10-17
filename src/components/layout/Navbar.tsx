import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Products', path: '/products' },
    { label: 'Sustainability', path: '/sustainability' },
    { label: 'Factory 3D', path: '/factory' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#171717]/90 dark:bg-[#121417]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <span className="w-8 h-8 rounded-lg bg-[#C7F36B] text-black font-display font-extrabold flex items-center justify-center text-lg shadow-sm group-hover:rotate-12 transition-transform">
                ✦
              </span>
              <div className="flex flex-col">
                <span className={`font-display font-bold text-lg md:text-xl tracking-tight transition-colors ${
                  isScrolled || theme === 'dark' ? 'text-white' : 'text-[#191919]'
                }`}>
                  THREADCRAFT
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#777777] uppercase -mt-1 hidden sm:block">
                  PRECISION APPAREL MFG
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'text-[#C7F36B] bg-white/10 font-semibold'
                        : isScrolled || theme === 'dark'
                          ? 'text-neutral-300 hover:text-white hover:bg-white/5'
                          : 'text-[#191919] hover:text-black hover:bg-black/5 font-medium'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA & Dark/Light Mode Button */}
            <div className="hidden sm:flex items-center gap-2.5">
              
              {/* Dark & Light Mode Toggle Button */}
              <button
                id="theme-toggle-btn"
                type="button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
                className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center gap-1.5 font-mono text-xs ${
                  theme === 'dark'
                    ? 'bg-white/10 hover:bg-white/20 text-[#C7F36B] border-white/15 shadow-sm'
                    : isScrolled
                      ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 shadow-sm'
                      : 'bg-white/80 hover:bg-white text-neutral-800 border-black/10 shadow-sm'
                }`}
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-[#C7F36B] animate-spin-slow" />
                    <span className="hidden xl:inline text-[11px] font-bold text-[#C7F36B]">LIGHT</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-neutral-800" />
                    <span className="hidden xl:inline text-[11px] font-bold text-neutral-800">DARK</span>
                  </>
                )}
              </button>

              <Link
                to="/quote"
                className="btn-magnetic relative px-4 py-2.5 rounded-xl bg-[#C7F36B] hover:bg-[#b8e858] text-[#191919] font-bold text-xs font-mono uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger & Theme Switcher */}
            <div className="flex items-center gap-2 lg:hidden">
              
              {/* Mobile Quick Theme Switcher */}
              <button
                id="mobile-theme-toggle-btn"
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme mode"
                className={`p-2 rounded-xl border transition-colors ${
                  theme === 'dark' || isScrolled
                    ? 'bg-white/10 text-[#C7F36B] border-white/15'
                    : 'bg-white/80 text-black border-black/10'
                }`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#C7F36B]" />
                ) : (
                  <Moon className="w-4 h-4 text-black" />
                )}
              </button>

              <Link
                to="/quote"
                className="px-3 py-1.5 rounded-lg bg-[#C7F36B] text-black font-bold text-xs font-mono uppercase"
              >
                Quote
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors ${
                  isScrolled || theme === 'dark' ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/10'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-current" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/90 dark:bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 animate-fadeIn">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <Link to="/" className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#C7F36B] text-black font-display font-extrabold flex items-center justify-center text-lg">
                  ✦
                </span>
                <span className="font-display font-bold text-xl text-white">
                  THREADCRAFT
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Dark/Light Mode Switch Row */}
            <div className="mt-4 p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-300 uppercase">
                Theme Appearance:
              </span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 text-[#C7F36B] text-xs font-mono font-bold"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5" />
                    <span>DARK MODE (ON)</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-white" />
                    <span className="text-white">LIGHT MODE</span>
                  </>
                )}
              </button>
            </div>

            <nav className="flex flex-col gap-2 mt-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`py-3 px-4 rounded-xl text-lg font-display uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'bg-[#C7F36B] text-black font-bold'
                        : 'text-neutral-200 hover:text-[#C7F36B] hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <Link
              to="/quote"
              className="w-full py-4 rounded-xl bg-[#C7F36B] text-black font-bold text-center block uppercase tracking-wider font-mono shadow-xl"
            >
              Request a Manufacturing Quote
            </Link>
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>B2B SOURCING: inquiry@threadcraft-mfg.com</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
