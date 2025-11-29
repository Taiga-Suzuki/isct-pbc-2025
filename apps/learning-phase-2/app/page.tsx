'use client';

import PetCard from '../components/PetCard'

type Pet = {
  id: number
  name: string
  species: string
  age: number
  color: string
  breed: string
}

export default function Home() {
  const pets: Pet[] = [
    {
      id: 1,
      name: "Pochi",
      species: "Dog",
      age: 3,
      color: "Brown",
      breed: "Golden Retriever"
    },
    {
      id: 2,
      name: "Tama",
      species: "Cat",
      age: 5,
      color: "Orange",
      breed: "Persian"
    },
    {
      id: 3,
      name: "Piyo",
      species: "Bird",
      age: 2,
      color: "Yellow",
      breed: "Canary"
    },
    {
      id: 4,
      name: "Masuo",
      species: "Fish",
      age: 1,
      color: "Blue",
      breed: "Betta"
    }
]

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {pets
          .map((pet) => (
            <PetCard key={pet.id} {...pet} />
          ))}
      </h2>
    </div>
  )
}
