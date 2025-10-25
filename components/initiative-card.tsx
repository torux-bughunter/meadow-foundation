"use client"

import { Card } from "@/components/ui/card"
import { useInitiativeDialog } from "@/components/initiative-provider"

interface InitiativeCardProps {
  initiative: 'clinic' | 'blog' | 'spelling-bee'
  children: React.ReactNode
  className?: string
}

export function InitiativeCard({ initiative, children, className }: InitiativeCardProps) {
  const { openInitiativeDialog } = useInitiativeDialog()

  return (
    <Card 
      className={`cursor-pointer hover:shadow-lg transition-all duration-300 border-border hover:border-coral/30 h-full flex flex-col ${className || ''}`}
      onClick={() => openInitiativeDialog(initiative)}
    >
      {children}
    </Card>
  )
}
