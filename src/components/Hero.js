const features = [
  { name: 'Healthy Shakes', description: 'Grab a shake to fuel your day and keep you satisfied with 24g of protein & 21 essential vitamins.', class: 'text-green-500 font-bold text-2xl' },
  { name: 'Energy Teas', description: 'Our teas contain B12 Vitamins, Herbal Tea for metabolism boost & aloe for digestive support.', class: 'text-blue-500 font-bold text-2xl' },
  { 
    name: 'Protein Donuts', 
    description: '10g of protein and gluten-free goodness 😋',
    class: 'text-red-500 text-2xl font-bold'
  },
  { name: 'Iced Cofee', description: 'Grab it for the go!', class: 'text-yellow-700 font-bold text-2xl' },
]

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-7xl font-bold tracking-tight text-gray-900 font-serif sm:text-6xl">The Well Nutrition</h1>
          <p className="mt-4 text-gray-500">
            Proudly serving the community with healthy snacks and drinks.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className={feature.class}>{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="/donut1.jpeg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/combo1.jpeg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/tea1.jpeg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="/tea2.jpeg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}
