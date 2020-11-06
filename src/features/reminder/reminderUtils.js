export const colorToHexMap = {
  Red: '#d9534f',
  Orange: '#f0ad4e',
  Green: '#5cb85c',
  Teal: '#5bc0de',
  Blue: '#0275d8'
}

export const hexToColorMap = {}

for (const property in colorToHexMap) {
  hexToColorMap[ colorToHexMap[ property ] ] = property
}
