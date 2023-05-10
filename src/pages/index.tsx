import { initialAnimals } from '@/lib/animals'
import React, { useState } from 'react'
import { AnimalsView } from './animals'

export default function Home() {
  const [animals] = useState(initialAnimals)
  return (
    <main
      className={`min-h-screen p-24`}
    >
      <AnimalsView animals={animals} />
    </main>
  )
}
