import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import HiringRequirementModal from '@/components/landing/HiringRequirementModal';

const HiringRequirementModalContext = createContext(null);

export function HiringRequirementModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState('nexa_landing_page');

  const openModal = useCallback((nextSource = 'nexa_landing_page') => {
    setSource(nextSource || 'nexa_landing_page');
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(() => ({ openModal, closeModal, isOpen: open }), [openModal, closeModal, open]);

  return (
    <HiringRequirementModalContext.Provider value={value}>
      {children}
      <HiringRequirementModal open={open} source={source} onClose={closeModal} />
    </HiringRequirementModalContext.Provider>
  );
}

export function useHiringRequirementModal() {
  const ctx = useContext(HiringRequirementModalContext);
  if (!ctx) {
    throw new Error('useHiringRequirementModal must be used within HiringRequirementModalProvider');
  }
  return ctx;
}
