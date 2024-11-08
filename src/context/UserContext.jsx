import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
        id: null,
        username: '',
        email: '',
        avatarUrl: '',
        role: 'user',
        isVerified: false,
    });

    const updateUserContext = (property, value) => {
        setUser(prevUser => ({ ...prevUser, [property]: value }));
    };

  return (
    <UserContext.Provider value={{ user, updateUserContext }}>
      {children}
    </UserContext.Provider>
  );
};
