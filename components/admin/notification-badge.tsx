'use client'

import { Badge } from "@/components/ui/badge"
import { Bell } from "lucide-react"

interface NotificationBadgeProps {
  count: number
  type: 'pending' | 'urgent' | 'review'
  onClick?: () => void
}

export function NotificationBadge({ count, type, onClick }: NotificationBadgeProps) {
  if (count === 0) return null

  const getBadgeVariant = () => {
    switch (type) {
      case 'urgent':
        return 'destructive'
      case 'review':
        return 'secondary'
      default:
        return 'default'
    }
  }

  const getBadgeText = () => {
    switch (type) {
      case 'urgent':
        return `${count} urgent`
      case 'review':
        return `${count} pending`
      default:
        return count.toString()
    }
  }

  return (
    <Badge 
      variant={getBadgeVariant()} 
      className="cursor-pointer hover:opacity-80 transition-opacity"
      onClick={onClick}
    >
      <Bell className="w-3 h-3 mr-1" />
      {getBadgeText()}
    </Badge>
  )
}
