import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateEndangeredSpecies } from '../apis/endangeredSpecies'
import { EndangeredSpeciesData } from '../../models/endangeredSpecies'

interface UpdateEndangeredSpeciesFormProps {
  id: number
  initialData: EndangeredSpeciesData
  onClose: () => void
}

const UpdateEndangeredSpeciesForm: React.FC<
  UpdateEndangeredSpeciesFormProps
> = ({ id, initialData, onClose }) => {
  const [formData, setFormData] = useState<EndangeredSpeciesData>(initialData)

  const queryClient = useQueryClient()

  const mutation = useMutation(updateEndangeredSpecies, {
    onSuccess: () => {
      queryClient.invalidateQueries(['species'])
      onClose() // Close the form after successful update
    },
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Pass the parameters to the mutation
    mutation.mutate({ id, updatedEndangeredSpecies: formData })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="update-endangered-species-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="population">Population:</label>
        <input
          type="text"
          id="population"
          name="population"
          value={formData.population}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" disabled={mutation.isLoading}>
        Update
      </button>

      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  )
}

export default UpdateEndangeredSpeciesForm
