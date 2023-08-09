// pages/api/auth/[auth0].js
import { handleAuth, handleLogout,handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  logout: handleLogout({ returnTo: 'http://localhost:3000/home' }),
    login: handleLogin({ returnTo: 'http://localhost:3000/home' }),
});