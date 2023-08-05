import { UserButton } from '@clerk/nextjs'
import { MainNav } from '@/components/main-nav'
import StoreSwitcher from './ui/store-switcher'

export const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 gap-4">
        <StoreSwitcher />
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  )
}
