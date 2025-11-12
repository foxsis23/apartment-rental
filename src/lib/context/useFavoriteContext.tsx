import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { STORAGE_KEY } from '@/lib/constants';
import type { Apartment } from '@/lib/types';

interface FavoritesContextType {
  favorites: Apartment[];
  addFavorite: (apartment: Apartment) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Apartment[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setFavorites(JSON.parse(saved));
    } catch {
      setFavorites([]);
    }
  }, []);

  const saveFavorites = useCallback((newFavorites: Apartment[]) => {
    setFavorites(newFavorites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
  }, []);

  const addFavorite = useCallback(
    (apartment: Apartment) => {
      if (!favorites.some((item) => item.id === apartment.id)) {
        const updated = [...favorites, apartment];
        saveFavorites(updated);
      }
    },
    [favorites, saveFavorites]
  );

  const removeFavorite = useCallback(
    (id: number) => {
      const updated = favorites.filter((item) => item.id !== id);
      saveFavorites(updated);
    },
    [favorites, saveFavorites]
  );

  const isFavorite = useCallback(
    (id: number) => favorites.some((item) => item.id === id),
    [favorites]
  );

  const clearFavorites = useCallback(() => {
    saveFavorites([]);
  }, [saveFavorites]);

  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        try {
          const updated = e.newValue ? JSON.parse(e.newValue) : [];
          setFavorites(updated);
        } catch {
          setFavorites([]);
        }
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
