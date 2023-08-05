'use client'

import { Store } from '.prisma/client'
import { Popover, PopoverTrigger } from '@/components/ui/popover'
import { useStoreModal } from '@/hooks/use-store-modal'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Store as StoreIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[]
}

export default function StoreSwitcher({
  className,
  items = [],
}: StoreSwitcherProps) {
  const storeModal = useStoreModal()
  const params = useParams()
  const router = useRouter()

  const formattedItems = items.map((item: Store) => ({
    label: item.name,
    value: item.id,
  }))

  const currentStore = formattedItems.find(
    (item) => item.value === params.storeId,
  )

  const [open, setOpen] = useState(false)

  const onStoreSelected = (store: { value: string; label: string }) => {
    setOpen(false)
    router.push(`/${store.value}`)
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a store"
          className={cn('w-[200px] justify-between', className)}
        >
          <StoreIcon className="mr-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
    </Popover>
  )
}