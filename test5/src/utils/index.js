export function propertyAccessor(acc, key)  {
  let path = key.split(".")
  if (!acc.hasOwnProperty(path[0])) return null
  if (path.length == 1) 
    return acc[path[0]]

  return propertyAccessor(acc[path[0]], path.slice(1).join("."))
}