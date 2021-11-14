import ProductModel from '@/interfaces/productModel'

export const totalAmountFormatted = (array: Array<ProductModel>) => {
  // eslint-disable-next-line camelcase
  const total = array.map(({ retail_price }) => Number(retail_price.value))
    .reduce((a: number, b: number) => Number(a + b), 0)

  if (Number(total) > 0) {
    return `€ ${Number(total).toFixed(2)}`
  }

  return ''
}
