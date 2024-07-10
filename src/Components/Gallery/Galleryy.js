import React from 'react'

function Galleryy() {
  return (
    <div>
      <section className="p-6 dark:bg-white dark:text-gray-900">
	<div className="container mx-auto">
		<span className="block mb-2 text-xs font-medium tracki text-center uppercase text-violet-400">What We Do?</span>
		<h2 className="text-5xl font-bold text-center text-black-900">Explore INDIA with "Indian Heritage"</h2>
		<div className="grid gap-6 my-16 lg:grid-cols-3">
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-300">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">1</div>
				<p className="text-2xl font-semibold">
					<b>Who we are?</b>Indian Heritage, a premier Indian tourism service provider.
				</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-300">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">2</div>
				<p className="text-2xl font-semibold">
					<b>Our Motto.</b>"Explore India's rich heritage and vibrant culture."
				</p>
			</div>
			<div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-300">
				<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-400 dark:text-gray-900">3</div>
				<p className="text-2xl font-semibold">
					<b>How can we help you?</b>Customized tours, cultural experiences, and travel assistance.
				</p>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Galleryy
