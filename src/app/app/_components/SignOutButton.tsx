'use client'

import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

export function SignOutButton() {
  return (
    <Button
      variant="ghost"
      className="flex flex-row gap-2 justify-start p-2"
      onClick={() => signOut()}
    >
      <LogOut />
      Sair
    </Button>
  )
}
