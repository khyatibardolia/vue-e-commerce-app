/* eslint-disable */
export default interface ProductModel {
  uuid: string,
  cover_image_url: string,
  title: string,
  description: string,
  net_price: { value: number, formatted_value: string},
  retail_price: { value: number, formatted_value: string},
  discount: number,
}

