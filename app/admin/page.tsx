import { redirect } from 'next/navigation'

export default function AdminPage() {
  // Redirect directly to ApostropheCMS
  redirect('http://localhost:3001')
}
