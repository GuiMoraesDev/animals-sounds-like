import React from 'react'
import { Animal } from '@/lib/animals'

export function AnimalsView ({
  animals,
}: {
  animals: Animal[]
}) {
  return (
    <div style={{ maxWidth: 800 }}>
      <ul className='list-disc'>
        {animals.map((animal) => (
          <li key={animal.id}>
            {animal.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
