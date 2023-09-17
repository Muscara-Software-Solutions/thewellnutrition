const products = [
  {
    id: 1,
    name: 'Right Track Nutrition',
    category: 'Nicholasville, KY',
    href: 'https://righttracknutrition.net',
    price: '',
    imageSrc: 'https://righttracknutrition.net/images/logo.jpeg',
    imageAlt: 'Right Track Nutrition',
  },
  {
    id: 1,
    name: 'Wilmore Well',
    category: 'Wilmore, KY',
    href: 'https://wilmorewell.com',
    price: '',
    imageSrc: 'https://wilmorewell.com/logo.jpeg',
    imageAlt: 'Wilmore Well',
  },
  {
    id: 1,
    name: 'Woodford Nutrition C & J',
    category: 'Versailles, KY',
    href: 'https://woodfordnutrition.com',
    price: '',
    imageSrc: 'https://woodfordnutrition.com/favicon.jpeg',
    imageAlt: 'Woodford Nutrition',
  },
]

export default function Locations() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          <h1 className="text-2xl font-medium text-gray-900">Other Locations</h1>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                <img src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                  <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                    Visit Website
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p>{product.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
