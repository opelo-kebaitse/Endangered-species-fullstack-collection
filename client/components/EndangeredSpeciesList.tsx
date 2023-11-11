import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  deleteEndangeredSpecies,
  getEndangeredSpecies,
} from '../apis/endangeredSpecies'
import UpdateEndangeredSpeciesForm from './UpdateEndangeredSpeciesForm'
import { EndangeredSpecies } from '../../models/endangeredSpecies'

type FormState =
  | {
      selectedSpecies: EndangeredSpecies
      show: 'selected'
    }
  | {
      selectedSpecies: null
      show: 'update' | 'none'
    }

export default function EndangeredSpeciesList() {
  const {
    data: species,
    isLoading,
    error,
  } = useQuery(['species'], getEndangeredSpecies)

  // State to manage the selected species for update
  const [form, setForm] = useState<FormState>({
    selectedSpecies: null,
    show: 'none',
  })

  // delete data using mutation
  const queryClient = useQueryClient()
  const mutation = useMutation(deleteEndangeredSpecies, {
    onSuccess: () => {
      queryClient.invalidateQueries(['species'])
      setForm({ selectedSpecies: null, show: 'none' }) // Close the form after successful delete
    },
  })

  if (error instanceof Error) {
    return <p>Something went wrong: {error.message}</p>
  }

  if (!species || isLoading) {
    return <p>Still loading ...</p>
  }

  // Function to handle the update button click
  const handleUpdateClick = (selectedSpecies: null) => {
    setForm({ selectedSpecies, show: 'update' })
  }


  // Function to handle the delete button click

  const handleDeleteClick = async (id: number) => {
      await mutation.mutate(id); // Initiate the deletion mutation
    }

  
  return (
    <div>
      <ul>
        {species.map((species) => (
          <li key={species.id}>
            <p>Name: {species.name}</p>
            <p>Population: {species.population}</p>
            <button onClick={() => handleUpdateClick(species)}>Update</button>
            <button onClick={() => handleDeleteClick(species.id)}>Delete</button>

          </li>
        ))}
      </ul>

      {/* Render the update form if a species is selected for update */}
      {form.show === 'update' && (
        <UpdateEndangeredSpeciesForm
          id={form.selectedSpecies.id}
          initialData={form.selectedSpecies}
          onClose={() => setForm({ selectedSpecies: null, show: 'none' })}
        />
      )}
    </div>
  )
}
