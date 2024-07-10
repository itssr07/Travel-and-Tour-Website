import React from 'react'
import Moreservice from './Moreservice'

function Services() {
  return (
    <div>
      <section>
	<div className="dark:bg-white">
    <div
        class="w-full bg-center bg-cover h-[38rem]"
        style={{
          backgroundImage:
            "url('https://www.aimprosoft.com/wp-content/uploads/2022/03/How-to-Make-a-Travel-Website-in-2022.png')",
        }}
      >
        </div>

	</div>
    <section className="py-6 sm:py-12 dark:bg-white dark:text-gray-900">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">OUR SERVICES</h2>
			<p className="font-serif text-sm dark:text-black-900">All you need is at your finger tip.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col dark:bg-gray-100">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://cff2.earth.com/uploads/2023/06/02100547/Mountain-2.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-violet-400">View Website</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leadi">Explore through Our Website</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-black-900">
						<span>Indian Heritage</span>
						<span>View More</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-100">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://tourismnotes.com/wp-content/uploads/2018/09/tour-package.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-violet-400">Book Packages</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leadi">Get package of your favourite destination</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-900">
						<span>Indian Heritage</span>
						<span>View More</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-100">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/490190593.jpg?k=490f762e14bfdc24b53a4fa2576523b51481b7208d3af36722f3337ecb470221&o=&hp=1" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-violet-400">Book Hotels</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leadi">Explore Hotels of your favourite destination.</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-900">
						<span>Indian Heritage</span>
						<span>View More</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col dark:bg-gray-100">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://sendapp.live/wp-content/uploads/2021/02/24x7-customer-support.png" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline dark:text-violet-400">Support</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leadi">24/7 Customer Support</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-900">
						<span>Indian Heritage</span>
						<span>view More</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
    
</section>
<Moreservice />

    </div>
  )
}

export default Services

