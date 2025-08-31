export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This layout is minimal since we redirect directly to CMS
  return <>{children}</>
}
