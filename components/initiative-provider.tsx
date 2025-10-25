"use client"

import React, { createContext, useContext, useState } from "react"
import { InitiativeDialog } from "@/components/initiative-dialog"

interface InitiativeContextType {
  openInitiativeDialog: (initiative: 'clinic' | 'blog' | 'spelling-bee') => void
}

const InitiativeContext = createContext<InitiativeContextType | null>(null)

export function useInitiativeDialog() {
  const context = useContext(InitiativeContext)
  if (!context) {
    throw new Error('useInitiativeDialog must be used within InitiativeProvider')
  }
  return context
}

interface InitiativeProviderProps {
  children: React.ReactNode
}

export function InitiativeProvider({ children }: InitiativeProviderProps) {
  const [initiativeDialog, setInitiativeDialog] = useState<{
    open: boolean
    initiative: 'clinic' | 'blog' | 'spelling-bee' | null
  }>({
    open: false,
    initiative: null
  })

  const openInitiativeDialog = (initiative: 'clinic' | 'blog' | 'spelling-bee') => {
    setInitiativeDialog({ open: true, initiative })
  }

  return (
    <InitiativeContext.Provider value={{ openInitiativeDialog }}>
      {children}
      <InitiativeDialog 
        open={initiativeDialog.open}
        onOpenChange={(open) => setInitiativeDialog(prev => ({ ...prev, open }))}
        initiative={initiativeDialog.initiative}
      />
    </InitiativeContext.Provider>
  )
}
