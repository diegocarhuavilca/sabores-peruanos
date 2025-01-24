<template>
    <section class="text-gray-600 body-font bg-white dark:bg-slate-900">
        <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
            <div
                class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1
                    class="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                    Title of Project
                </h1>
                <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
                    Short description here, Short description here Short description here Short description here
                    Short
                    description here Short description here.
                </p>
                <div class="flex justify-center">
                    <a href="#"
                        class="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">Start
                        Exploring
                    </a>
                    <a href="#"
                        class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Read
                        articles</a>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                <img class="object-cover object-center rounded" alt="hero"
                    src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg">
            </div>
        </div>
    </section>

    <div class="flex flex-wrap">
        <!-- Left Column -->
        <div class="w-full md:w-1/2 p-4">
            <a class="p-8  border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                href="#">
                <img src="https://loremflickr.com/800/600/girl" class="shadow rounded-lg overflow-hidden border">
                <div class="mt-8">
                    <h4 class="font-bold text-xl">Exercises</h4>
                    <p class="mt-2 text-gray-600">Create Exercises for any subject with the topics you and your students
                        care about.</p>
                    <div class="mt-5">
                        <button type="button"
                            class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start
                            Creating</button>
                    </div>
                </div>
            </a>
        </div>

        <!-- Right Column -->
        <div class="w-full md:w-1/2 p-4 space-y-4 flex flex-col justify-between">
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                    <div class="md:shrink-0">
                        <img class="h-48 w-full object-cover md:h-full md:w-48"
                            src="https://loremflickr.com/g/320/240/team">
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats
                        </div>
                        <a href="#"
                            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                            accommodation for your team</a>
                        <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food
                            and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                </div>
            </div>

            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                    <div class="md:shrink-0">
                        <img class="h-48 w-full object-cover md:h-full md:w-48"
                            src="https://loremflickr.com/g/320/240/team">
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats
                        </div>
                        <a href="#"
                            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                            accommodation for your team</a>
                        <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food
                            and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                </div>
            </div>

            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="md:flex">
                    <div class="md:shrink-0">
                        <img class="h-48 w-full object-cover md:h-full md:w-48"
                            src="https://loremflickr.com/g/320/240/team">
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats
                        </div>
                        <a href="#"
                            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible
                            accommodation for your team</a>
                        <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food
                            and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <section
        class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

        <template v-for="recipe in mostPopularRecipes" :key="recipe.id">
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                    <div class="px-4 py-3 w-72">
                        <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                    </div>
                </a>
            </div>
        </template>


    </section>
</template>

<script lang="ts" setup>

const mostPopularRecipes = ref([
    {
        id: 1,
        title: 'Product Name',
        price: 149,
        discount: 199,
        image: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        brand: 'Brand',
    },
    {
        id: 2,
        title: 'Product Name',
        price: 149,
        discount: 199,
        image: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        brand: 'Brand',
    },
    {
        id: 2,
        title: 'Product Name',
        price: 149,
        discount: 199,
        image: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        brand: 'Brand',
    }, {
        id: 2,
        title: 'Product Name',
        price: 149,
        discount: 199,
        image: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        brand: 'Brand',
    }, {
        id: 2,
        title: 'Product Name',
        price: 149,
        discount: 199,
        image: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        brand: 'Brand',
    }, {
        id: 2,
        title: 'Product Name',
        price: 149,
        discount: 199,
        image: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        brand: 'Brand',
    }
]);


useSeoMeta({
    title: 'Sabores Peruanos | Las mejores recetas del Perú y del mundo',
    ogTitle: 'Sabores Peruanos | Las mejores recetas del Perú y del mundo',
    description: 'En Sabores Peruanos encontrarás recetas auténticas de la cocina peruana, como ceviche y lomo saltado, y platos internacionales de todo el mundo. Aprende a cocinar comidas fáciles, sabrosas y saludables con ingredientes frescos. ¡Inspírate y disfruta de la mejor gastronomía en casa!',
    ogDescription: 'En Sabores Peruanos encontrarás recetas auténticas de la cocina peruana, como ceviche y lomo saltado, y platos internacionales de todo el mundo. Aprende a cocinar comidas fáciles, sabrosas y saludables con ingredientes frescos. ¡Inspírate y disfruta de la mejor gastronomía en casa!',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
    keywords: 'Recetas peruanas, Cocina peruana, Recetas internacionales, Ceviche peruano, Lomo saltado, Recetas fáciles, Cocina saludable, Platos tradicionales peruanos, Recetas del mundo, Comidas sabrosas',
})

</script>

<style></style>
