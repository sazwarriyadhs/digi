'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Translation } from '@/lib/i18n';

type Language = 'id' | 'en';
type Currency = 'IDR' | 'USD';

interface AppContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  t: (key: string) => any;
  formatCurrency: (amountIDR: number) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const IDR_TO_USD_RATE = 1 / 16000;

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('id');
  const [currency, setCurrency] = useState<Currency>('IDR');

  const t = (key: string): any => {
    const keys = key.split('.');
    
    const getValue = (langObj: any, keyParts: string[]) => {
        let result = langObj;
        for (const part of keyParts) {
            if (result && typeof result === 'object' && part in result) {
                result = result[part];
            } else {
                return undefined;
            }
        }
        return result;
    }

    let value = getValue(translations[language], keys);
    if (value !== undefined) {
        return value;
    }

    if (language !== 'en') {
        value = getValue(translations['en'], keys);
        if (value !== undefined) {
            return value;
        }
    }
    
    return undefined;
  };

  const formatCurrency = (amountIDR: number) => {
    if (currency === 'IDR') {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amountIDR);
    } else { 
        const amountUSD = amountIDR * IDR_TO_USD_RATE;
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amountUSD);
    }
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, currency, setCurrency, t, formatCurrency }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
