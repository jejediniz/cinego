import React, { createContext, useContext, useState } from 'react';

export const FavoritosContext = createContext(null);

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const addFavorito = (item) =>
    setFavoritos(prev => (prev.some(f => f.id === item.id) ? prev : [...prev, item]));

  const removeFavorito = (id) =>
    setFavoritos(prev => prev.filter(f => f.id !== id));

  return (
    <FavoritosContext.Provider value={{ favoritos, addFavorito, removeFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritoContext() {
  const ctx = useContext(FavoritosContext);
  if (!ctx) {
    throw new Error('useFavoritoContext deve ser usado dentro de <FavoritosProvider>');
  }
  return ctx;
}
