const testimonials = [
  {
    body: 'Best ever!! Shakes taste as they should!! Delicious!',
    author: {
      name: 'Chrissy Thomas Owens',
      handle: 'chrissy.thomasowens',
      imageUrl: '/test1.jpeg',
    },
  },
  // {
  //   body: 'Wonderful service and yummy shakes!',
  //   author: {
  //     name: 'Cassie Carrillo',
  //     handle: 'ccarrillo0002',
  //     imageUrl: '/test2.jpeg'
  //   }
  // },
  {
    body: 'Today was my first time trying a shake. While I was there they gave me a sample an it was delicious. I got a Chocolate Peanut Butter Pie Shake and it was soooo good. The staff is very friendly and I would recommend to everyone!',
    author: {
      name: 'Ashley Wethington',
      handle: 'ashley.wethingtongrant',
      imageUrl: '/test3.jpeg'
    }
  },
  {
    body: 'Great shakes, and I loved their Skittles tea.  Will definitely visit frequently.',
    author: {
      name: 'Carrie Bates Richardson',
      handle: 'carrister',
      imageUrl: '/test4.jpeg'
    }
  },
  {
    body: 'The owners and staff are the absolute BEST!  Today was my 2nd time there this week, I had a Chocolate Covered Banana  and a Maple Butter Pecan BOTH were delicious! Looks like I will be filling in my stamp card very quickly!😀',
    author: {
      name: 'Victoria Torres',
      handle: 'victoria.torres.3386',
      imageUrl: '/test5.jpeg'
    }
  },
  {
    body: 'Awesome energy drinks, and Delicious protien shakes. Elvis is my favorite ❤',
    author: {
      name: 'Suzieq Roark',
      handle: 'FlowerStarBomb',
      imageUrl: '/test6.jpeg'
    }
  },
  {
    body: 'Love The Well! Friendly staff, very helpful with finding something new. Everything is delicious!! Always look forward to my next visit',
    author: {
      name: 'Tammy R Aaronson',
      handle: 'tammy.aaronson.7',
      imageUrl: '/test7.jpeg'
    }
  },
]

export default function Reviews() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Reviews</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let those we've served speak for us!
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img className="h-10 w-10 rounded-full bg-gray-50" src={testimonial.author.imageUrl} alt="" />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
