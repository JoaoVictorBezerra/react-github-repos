export function convertDate(date: string): string {
  const formatDate = new Date(date);
  return formatDate.toLocaleDateString("pt-br");
}