import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addEndangeredSpecies } from '../apis/endangeredSpecies'
import { NewEndangeredSpecies } from '../../models/endangeredSpecies'

const AddEndangeredSpeciesForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    population: '',
  });

  const queryClient = useQueryClient()
  const mutation = useMutation(addEndangeredSpecies, {
    onSuccess: () => {
      queryClient.invalidateQueries(['species'])

      setFormData({
        name: '',
        population: '',
      })
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="endangered-species-form">
    <div className="form-group">
      <label htmlFor="name"> Name: </label>
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
      <label htmlFor="population"> Population: </label>
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
    Submit
  </button>
</form>
  )
}

export default AddEndangeredSpeciesForm


