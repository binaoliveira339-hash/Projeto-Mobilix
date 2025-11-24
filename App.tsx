// FIX: Import `useState` from 'react' to resolve reference error.
import React, { useState } from 'react';
import { AuthProvider, useAuth } from './hooks/useAuth';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

const AppContent: React.FC = () => {
    const { user } = useAuth();
    const [isSigningUp, setIsSigningUp] = useState(false);

    if (!user) {
        return isSigningUp ? (
            <SignUp onSwitchToLogin={() => setIsSigningUp(false)} />
        ) : (
            <Login onSwitchToSignUp={() => setIsSigningUp(true)} />
        );
    }

    return <Dashboard />;
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <AppWrapper />
        </AuthProvider>
    );
};

const AppWrapper: React.FC = () => {
    return (
         <div className="min-h-screen font-sans transition-colors duration-300 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
            <AppContent />
        </div>
    )
}

export default App;