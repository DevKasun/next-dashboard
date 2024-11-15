import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';

interface DashboardLayoutProps {
	children: React.ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
	return (
		<main className='flex h-screen w-full overflow-hidden'>
			<Sidebar />
			<div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
				<Navbar />
				<div className='p-10'>{children}</div>
			</div>
		</main>
	);
}
