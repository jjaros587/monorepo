import { useState } from 'react'
import { FieldDescriptors, FieldDescriptor } from '.'

export const useDataController = (descriptors: FieldDescriptors, initialValues?: { [key: string]: any }) => {
  const [data, setData] = useState<{ [key: string]: any }>(initialValues || {})
  const [patch, setPatch] = useState<{ [key: string]: any }>({})
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const isValueFilled = (value: any) => {
    return value !== undefined && value !== null && value !== ''
  }

  const checkConstraints = (value: any, descriptor: FieldDescriptor) => {
    if (descriptor.required && !isValueFilled(value)) {
      return 'This value must be filled'
    }
    if (descriptor.rules) {
      for (const rule of descriptor.rules) {
        const error = rule(value)
        if (error) {
          return error
        }
      }
    }
  }

  const validateSingleValue = (key: string, value: any) => {
    const error = checkConstraints(value, descriptors[key])
    if (error) {
      setErrors({ ...errors, [key]: error })
    } else {
      delete errors[key]
      setErrors(errors)
    }
  }

  const validate = () => {
    let valid = true
    const newErrors: { [key: string]: string } = {}
    Object.keys(descriptors).forEach((key) => {
      const value = data[key]
      const error = checkConstraints(value, descriptors[key])
      if (error) {
        valid = false
        newErrors[key] = error
      }
    })
    if (valid) {
      setErrors({})
      return true
    } else {
      setErrors(newErrors)
      return false
    }
  }

  const handleChange = (key: string, value: any) => {
    setData((prevState) => {
      return {
        ...prevState,
        [key]: isValueFilled(value) ? value : undefined
      }
    })
    setPatch((prevState) => {
      return {
        ...prevState,
        [key]: isValueFilled(value) ? value : undefined
      }
    })
    validateSingleValue(key, value)
  }

  return {
    patch,
    errors,
    handleChange,
    validate
  }
}

export default useDataController
