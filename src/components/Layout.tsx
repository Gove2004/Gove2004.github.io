import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FileText, Home, Menu, X } from 'lucide-react';
import { clsx } from 'clsx';

export function Layout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const NavLink = ({ to, icon: Icon, children }: { to: string; icon: React.ElementType; children: React.ReactNode }) => (
    <Link
      to={to}
      onClick={() => setIsSidebarOpen(false)}
      className={clsx(
        "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200",
        "transform hover:translate-x-1",
        location.pathname === to
          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
          : "text-white/90 hover:bg-white/10"
      )}
    >
      <Icon className="h-4 w-4" />
      {children}
    </Link>
  );

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-600">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-600/40 backdrop-blur-sm text-white"
      >
        {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside className={clsx(
        "fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-blue-600/40 to-cyan-600/40 backdrop-blur-sm p-6 transition-transform duration-300 lg:translate-x-0 lg:static",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center gap-2 mb-8 text-white">
          <FileText className="h-6 w-6 animate-pulse" />
          <h1 className="text-xl font-bold">Docs Site</h1>
        </div>
        
        <nav className="space-y-2">
          <NavLink to="/" icon={Home}>Home</NavLink>
        </nav>
      </aside>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 p-4 lg:p-8 pt-16 lg:pt-8">
        <div className="max-w-4xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}