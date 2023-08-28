import { pullAllBy } from 'lodash'
import unionWith from 'lodash/unionWith'
import { createContext, ReactElement, useContext, useState } from 'react'

type BulkPanelItem = {
  _id: string
}

interface BulkPanelContextProps<T extends BulkPanelItem> {
  items: T[]
  clear: () => void
  addItem: (item: T) => void
  addItems: (items: T[]) => void
  removeItem: (item: T) => void
  removeItems: (items: T[]) => void
}

function onError() {
  console.log('You are using BulkPanelContext out of BulkPanelContext.Provider')
}

export const BulkPanelContext = createContext<BulkPanelContextProps<BulkPanelItem>>({
  items: [],
  clear: onError,
  addItem: onError,
  addItems: onError,
  removeItem: onError,
  removeItems: onError,
})

export const BulkPanelContextProvider = <T extends BulkPanelItem>({
  children,
}: {
  children: ReactElement
}) => {
  const [items, setItems] = useState<T[]>([])

  const clear = () => {
    setItems([])
  }

  const addItem = (addedItem: T) => {
    setItems((prev) => [...prev, addedItem])
  }

  const addItems = (addedItems: T[]) => {
    setItems((prev) => unionWith(prev, addedItems, (a, b) => a._id === b._id))
  }

  const removeItem = (removedItem: T) => {
    setItems((prev) => prev.filter((prevItem) => prevItem._id !== removedItem._id))
  }

  const removeItems = (removedItems: T[]) => {
    const itemsTest = items
    const removedItemsTest = removedItems
    const test = pullAllBy(items, removedItems, '_id')
    setItems(pullAllBy(items, removedItems, '_id'))
  }

  return (
    <BulkPanelContext.Provider value={{ items, clear, addItem, addItems, removeItem, removeItems }}>
      {children}
    </BulkPanelContext.Provider>
  )
}

export const useBulkPanel = () => useContext(BulkPanelContext)
