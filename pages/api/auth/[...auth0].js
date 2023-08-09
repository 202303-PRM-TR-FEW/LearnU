// pages/api/auth/[auth0].js
import { handleAuth, handleLogout,handleLogin } from '@auth0/nextjs-auth0';

export default handleAuth({
  logout: handleLogout({ returnTo: 'https://learnu.vercel.app/home' }),
    login: handleLogin({ returnTo: 'https://learnu.vercel.app/home' }),
});