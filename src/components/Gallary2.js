const posts = [
  {
    id: 1,
    imageUrl: '/gal21.jpeg',
  },
  {
    id: 2,
    imageUrl: '/gal22.jpeg',
  },
  {
    id: 3,
    imageUrl: '/gal23.jpeg'
  },
  {
    id: 3,
    imageUrl: '/gal30.jpeg'
  },
  {
    id: 3,
    imageUrl: '/gal25.jpeg'
  },
  {
    id: 3,
    imageUrl: '/gal26.jpeg'
  },
  {
    id: 3,
    imageUrl: '/gal27.jpeg'
  },
  {
    id: 3,
    imageUrl: '/gal28.jpeg'
  },
  {
    id: 3,
    imageUrl: '/gal29.jpeg'
  },
]

export default function Gallary2() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
