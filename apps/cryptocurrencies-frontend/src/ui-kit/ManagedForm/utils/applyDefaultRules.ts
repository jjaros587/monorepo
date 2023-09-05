import { isEmail } from './rules'
import { FieldDescriptors, FieldRules } from '../ManagedForm.types'

export const DEFAULT_RULES: { [key: string]: Array<(value: unknown) => string | undefined> } = {
  email: [isEmail],
}

export function applyDefaultRules(descriptors: FieldDescriptors) {
  const fields = Object.keys(descriptors)

  return fields.reduce((acc, key) => {
    if (key in DEFAULT_RULES) {
      const rules: FieldRules = descriptors[key].rules ?? []
      const updatedRules = [...rules, ...DEFAULT_RULES[key]]
      acc[key] = { ...descriptors[key], rules: updatedRules }
    } else {
      acc[key] = descriptors[key]
    }
    return acc
  }, {} as FieldDescriptors)
}
