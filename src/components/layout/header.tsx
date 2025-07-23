
'use client'

import { Logo } from '../logo'

export function Header() {
  return (
    <header className="bg-primary text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
            <Logo />
        </div>
      </div>
    </header>
  )
}
