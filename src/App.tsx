function App() {
    return (
        <div className="flex relative">
            <div className="md:col-span-1 md:flex md:justify-end bg-slate-100 left-2 absolute min-h-screen ">
                <nav>
                    <div className="flex items-center justify-between">
                        <div className="px-4 outline-noner" id="burger">
                            <span className="material-symbols-outlined"> lunch_dining </span>
                        </div>
                    </div>

                    <ul className="text-right text-sm mt-6 md:block" id="menu">
                        <li className="text-gray-700 font-bold border-r-4 border-primary mb-1">
                            <a href="#" className="px-4 flex justify-end items-center">
                                <span>Home</span>
                                <span className="material-symbols-outlined ml-2"> cottage </span>
                            </a>
                        </li>
                        <li className="border-r-4 border-white">
                            <a href="#" className="px-4 flex justify-end items-center mb-1">
                                <span>About</span>
                                <span className="material-symbols-outlined ml-2"> contact_support </span>
                            </a>
                        </li>
                        <li className="border-r-4 border-white">
                            <a href="#" className="px-4 flex justify-end items-center mb-1">
                                <span>Contact</span>
                                <span className="material-symbols-outlined ml-2"> forward_to_inbox </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <main className="px-16 py-6 bg-white md:col-span-7">
                <div className="p-4 flex justify-between items-center border-b-4 border-t-4 border-gray-500 mb-4">
                    <h1 className="text-6xl font-bold uppercase text-primary">
                        <a href="/" className="">
                            Food Ninja
                        </a>
                    </h1>
                    <div className="flex gap-2">
                        <a href="#" className="text-primary border-4 rounded-full px-2 py-1 border-primary hover:bg-primary hover:text-white transition ease-in-out duration-500">
                            Log in
                        </a>
                        <a href="#" className="text-primary border-4 rounded-full px-2 py-1 border-primary hover:bg-primary hover:text-white transition ease-linear duration-500">
                            Sign up
                        </a>
                    </div>
                </div>

                <header className="flex justify-around">
                    <div>
                        <h2 className="text-gray-700 text-4xl font-semibold">Recipes</h2>
                        <h3 className="text-2xl font-semibold">For Ninjas</h3>
                    </div>

                    <button className="self-center mx-auto text-4xl font-bold bg-white rounded-md text-primary px-4 py-2 border-8 border-primary transform hover:-translate-y-3 transition duration-300 ease-in hover:bg-primary hover:text-white">Learn More</button>
                </header>

                <div>
                    <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Latest Recipes</h4>

                    <div className="mt-8 grid lg:grid-cols-3 gap-10">
                        {/* recipe 1 */}
                        <div className="card shadow-md hover:shadow-2xl hover:scale-105 transition ease-in duration-300">
                            <div className="relative">
                                <img src="img/stew.jpg" className="w-full" alt="stew" />
                                <div className="flex items-center bg-secondary-100 text-secondary-200 absolute text-xs rounded-full p-2 top-0 mt-2 ml-2 border-gray-600">
                                    <span className="material-symbols-outlined text-sm"> schedule </span>
                                    <span className="text-sm ml-1">25 mins</span>
                                </div>
                            </div>

                            <div className="flex justify-between p-2">
                                <div>
                                    <span>5 Bean Chili Stew</span>
                                    <span className="block text-gray-500 text-sm">Recipe by Mario</span>
                                </div>
                                <div>
                                    <button className="bg-lime-500 text-white whitespace-no-wrap py-2 px-4 rounded-md">Check Recipe</button>
                                </div>
                            </div>
                        </div>
                        {/* recipe 1 */}

                        {/* recipe 2 */}
                        <div className="card bg-slate-200 shadow-md hover:shadow-2xl hover:scale-105 transition ease-in duration-300">
                            <div className="relative">
                                <img src="img/noodles.jpg" className="w-full" alt="noodles" />
                                <div className="flex items-center bg-secondary-100 text-secondary-200 absolute text-xs rounded-full p-2 top-0 mt-2 ml-2 border-gray-600">
                                    <span className="material-symbols-outlined text-sm"> schedule </span>
                                    <span className="text-sm ml-1">25 mins</span>
                                </div>
                            </div>

                            <div className="flex justify-between p-2">
                                <div>
                                    <span>Veggie Noodies</span>
                                    <span className="block text-gray-500 text-sm">Recipe by Luigi</span>
                                </div>

                                <div>
                                    <button className="bg-lime-500 text-white whitespace-no-wrap py-2 px-4 rounded-md">Check Recipe</button>
                                </div>
                            </div>
                        </div>
                        {/* recipe 2 */}

                        {/* recipe 3 */}
                        <div className="card shadow-md hover:shadow-2xl hover:scale-105 transition ease-in duration-300">
                            <div className="relative">
                                <img src="img/curry.jpg" className="w-full" alt="curry" />
                                <div className="flex items-center bg-secondary-100 text-secondary-200 absolute text-xs rounded-full p-2 top-0 mt-2 ml-2 border-gray-600">
                                    <span className="material-symbols-outlined text-sm"> schedule </span>
                                    <span className="text-sm ml-1">25 mins</span>
                                </div>
                            </div>

                            <div className="flex justify-between p-2">
                                <div>
                                    <span className="font-bold">Magic Curry</span>
                                    <span className="block text-gray-500 text-sm">Recipe by Princess</span>
                                </div>
                                <div>
                                    <button className="bg-lime-500 text-white whitespace-no-wrap py-2 px-4 rounded-md">Check Recipe</button>
                                </div>
                            </div>
                        </div>
                        {/* recipe 3 */}
                    </div>

                    <h4 className="font-bold pb-2 mt-12 border-b border-gray-200">Most Popular</h4>

                    <div className="mt-8"></div>
                </div>

                <div className="mt-12 flex justify-center">
                    <div className="bg-secondary-100 text-secondary-200 py-2 px-4 rounded-full hover:shadow-inner transform hover:scale-125 transition ease-in-out duration-500 hover:opacity-75">Load more</div>
                </div>
            </main>
        </div>
    );
}

export default App;
