import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addEndangeredSpecies } from '../apis/endangeredSpecies'
import { EndangeredSpeciesData } from '../../models/endangeredSpecies';
import { useNavigate } from 'react-router-dom';

const AddEndangeredSpeciesForm = () => {
  const [formData, setFormData] = useState<EndangeredSpeciesData>({
    name: '',
    population: 0,
  });

  const queryClient = useQueryClient()
  const mutation = useMutation(addEndangeredSpecies, {
    onSuccess: () => {
      queryClient.invalidateQueries(['species'])

      setFormData({
        name: '',
        population: 0,
      })
    },
  })

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate(formData)
    navigate('/')

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


