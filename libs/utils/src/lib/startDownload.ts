export function stardDownload(uri: string, filename: string) {
  const pdfUrl = uri
  const link = document.createElement('a')
  link.href = pdfUrl
  link.download = filename
  link.click()
}
