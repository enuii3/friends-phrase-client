export const formatDate = (updated_at: string): string => {
  const date = new Date(updated_at)
  return `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
}
