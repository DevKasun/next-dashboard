'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import HomeIcon from '../icons/home-icon';
import CashIcon from '../icons/cash-icon';
import ReportIcon from '../icons/reports-icon';
import SettingsIcon from '../icons/settings-icon';
import NavLink from './navlink';

const navItems = [
	{
		href: '/dashboard',
		icon: (isActive: boolean) => (
			<HomeIcon
				iconColor='text-kBlue font-medium'
				className={isActive ? 'text-kBlue' : 'text-black'}
			/>
		),
		label: 'Dashboard',
	},
	{
		href: '/dashboard/expenses',
		icon: (isActive: boolean) => (
			<CashIcon
				iconColor='text-kBlue font-medium'
				className={isActive ? 'text-kBlue' : 'text-black'}
			/>
		),
		label: 'Expenses',
	},
	{
		href: '/dashboard/reports',
		icon: (isActive: boolean) => (
			<ReportIcon
				iconColor='text-kBlue font-medium'
				className={isActive ? 'text-kBlue' : 'text-black'}
			/>
		),
		label: 'Reports',
	},
	{
		href: '/dashboard/settings',
		icon: (isActive: boolean) => (
			<SettingsIcon
				iconColor='text-kBlue font-medium'
				className={isActive ? 'text-kBlue' : 'text-black'}
			/>
		),
		label: 'Settings',
	},
];

// I want make sidebar stick on the left side of the screen

export default function Sidebar() {
	const pathname = usePathname();
	return (
		<aside className='flex-none w-72 bg-white border-r'>
			<div className='flex h-24 items-center justify-center'>
				<Link href='/'>
					<div className='max-w-48'>
						<Image
							className='rounded'
							src='/next-dashboard-logo.png'
							width={786}
							height={165}
							alt='Site Logo'
						/>
					</div>
				</Link>
			</div>

			<menu className=' py-6'>
				{navItems.map((item) => (
					<NavLink
						key={item.href}
						href={item.href}
						icon={item.icon(pathname === item.href)}
						label={item.label}
					/>
				))}
			</menu>
		</aside>
	);
}
