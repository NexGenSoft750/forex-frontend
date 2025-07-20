import '@/styles/globals.scss';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <>
      {children}
    </>
  );
} 