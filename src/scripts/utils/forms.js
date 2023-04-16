export function formatForm(form) {
  const formData = new FormData(form)
  const entries = Array.from(formData.entries())
  const filtersObject = {}
  entries.forEach(([name, value]) => {
    try {
      filtersObject[name] = JSON.parse(value)
    } catch (e) {
      filtersObject[name] = value
    }
  })
  return filtersObject
}