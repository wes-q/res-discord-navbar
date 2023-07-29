export default function Test() {
    function toggleDarkMode() {
        document.documentElement.classList.toggle("dark");
    }

    return (
        <>
            <nav className="peer fixed bottom-0 sm:top-0 duration-500 ease-in-out bg-zinc-800 h-20 w-screen sm:w-20 sm:min-h-screen group sm:hover:w-64 text-sky-300">
                <ul className="flex flex-row items-center w-full sm:flex-col h-full">
                    <li className="w-full sm:mt-10">
                        <a href="#" className="flex justify-center items-center sm:justify-start h-20 grayscale hover:bg-black hover:grayscale-0 transition duration-500">
                            <svg className="inline w-8 mx-6 min-w-0 sm:min-w-[2rem]" data-icon="cat" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <g>
                                    <path className="text-sky-600" fill="currentColor" d="M448 96h-64l-64-64v134.4a96 96 0 0 0 192 0V32zm-72 80a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm80 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16zm-165.41 16a204.07 204.07 0 0 0-34.59 2.89V272l-43.15-64.73a183.93 183.93 0 0 0-44.37 26.17L192 304l-60.94-30.47L128 272v-80a96.1 96.1 0 0 0-96-96 32 32 0 0 0 0 64 32 32 0 0 1 32 32v256a64.06 64.06 0 0 0 64 64h176a16 16 0 0 0 16-16v-16a32 32 0 0 0-32-32h-32l128-96v144a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V289.86a126.78 126.78 0 0 1-32 4.54c-61.81 0-113.52-44.05-125.41-102.4z"></path>
                                    <path className="text-sky-300" fill="currentColor" d="M376 144a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm80 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16zM131.06 273.53L192 304l-23.52-70.56a192.06 192.06 0 0 0-37.42 40.09zM256 272v-77.11a198.62 198.62 0 0 0-43.15 12.38z"></path>
                                </g>
                            </svg>
                            <span className="hidden sm:ml-8 sm:inline sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-500">Cats</span>
                        </a>
                    </li>
                    <li className="w-full">
                        <a href="#" className="flex justify-center items-center sm:justify-start h-20 grayscale hover:bg-black hover:grayscale-0 transition duration-500">
                            <svg className="inline w-8 mx-6 min-w-0 sm:min-w-[2rem]" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="alien-monster" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <g className="">
                                    <path
                                        fill="currentColor"
                                        d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                                        className="text-sky-600"
                                    ></path>
                                    <path fill="currentColor" d="M160,320h64V224H160Zm192-96v96h64V224Z" className="text-sky-300"></path>
                                </g>
                            </svg>
                            <span className="hidden sm:ml-8 sm:inline sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-500">Aliens</span>
                        </a>
                    </li>
                    <li className="w-full">
                        <a href="#" className="flex justify-center items-center sm:justify-start h-20 grayscale hover:bg-black hover:grayscale-0 transition duration-500">
                            <svg className="inline w-8 mx-6 min-w-0 sm:min-w-[2rem]" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="space-station-moon-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <g className="fa-group">
                                    <path className="text-sky-600" fill="currentColor" d="M501.70312,224H448V160H368V96h48V66.67383A246.86934,246.86934,0,0,0,256,8C119.03125,8,8,119.0332,8,256a250.017,250.017,0,0,0,1.72656,28.26562C81.19531,306.76953,165.47656,320,256,320s174.80469-13.23047,246.27344-35.73438A250.017,250.017,0,0,0,504,256,248.44936,248.44936,0,0,0,501.70312,224ZM192,240a80,80,0,1,1,80-80A80.00021,80.00021,0,0,1,192,240ZM384,343.13867A940.33806,940.33806,0,0,1,256,352c-87.34375,0-168.71094-11.46094-239.28906-31.73633C45.05859,426.01953,141.29688,504,256,504a247.45808,247.45808,0,0,0,192-91.0918V384H384Z"></path>
                                    <path className="text-sky-300" fill="currentColor" d="M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z"></path>
                                </g>
                            </svg>
                            <span className="hidden sm:ml-8 sm:inline sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-500">Space</span>
                        </a>
                    </li>

                    <li className="w-full sm:mt-auto">
                        <a href="#" onClick={toggleDarkMode} className="flex justify-center items-center sm:justify-start h-20 grayscale hover:bg-black hover:grayscale-0 transition duration-500">
                            <svg className="inline dark:hidden w-8 mx-6 min-w-0 sm:min-w-[2rem]" id="lightIcon" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="moon-stars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <g>
                                    <path className="text-sky-300" fill="currentColor" d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"></path>
                                    <path className="text-sky-600" fill="currentColor" d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"></path>
                                </g>
                            </svg>

                            <svg className="hidden dark:inline w-8 mx-6 min-w-0 sm:min-w-[2rem]" id="darkIcon" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sunglasses" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <g>
                                    <path
                                        className="text-sky-600"
                                        fill="currentColor"
                                        d="M574.09 280.38L528.75 98.66a87.94 87.94 0 0 0-113.19-62.14l-15.25 5.08a16 16 0 0 0-10.12 20.25L395.25 77a16 16 0 0 0 20.22 10.13l13.19-4.39c10.87-3.63 23-3.57 33.15 1.73a39.59 39.59 0 0 1 20.38 25.81l38.47 153.83a276.7 276.7 0 0 0-81.22-12.47c-34.75 0-74 7-114.85 26.75h-73.18c-40.85-19.75-80.07-26.75-114.85-26.75a276.75 276.75 0 0 0-81.22 12.45l38.47-153.8a39.61 39.61 0 0 1 20.38-25.82c10.15-5.29 22.28-5.34 33.15-1.73l13.16 4.39A16 16 0 0 0 180.75 77l5.06-15.19a16 16 0 0 0-10.12-20.21l-15.25-5.08A87.95 87.95 0 0 0 47.25 98.65L1.91 280.38A75.35 75.35 0 0 0 0 295.86v70.25C0 429 51.59 480 115.19 480h37.12c60.28 0 110.38-45.94 114.88-105.37l2.93-38.63h35.76l2.93 38.63c4.5 59.43 54.6 105.37 114.88 105.37h37.12C524.41 480 576 429 576 366.13v-70.25a62.67 62.67 0 0 0-1.91-15.5zM203.38 369.8c-2 25.9-24.41 46.2-51.07 46.2h-37.12C87 416 64 393.63 64 366.11v-37.55a217.35 217.35 0 0 1 72.59-12.9 196.51 196.51 0 0 1 69.91 12.9zM512 366.13c0 27.5-23 49.87-51.19 49.87h-37.12c-26.69 0-49.1-20.3-51.07-46.2l-3.12-41.24a196.55 196.55 0 0 1 69.94-12.9A217.41 217.41 0 0 1 512 328.58z"
                                    ></path>
                                    <path className="text-sky-300" fill="currentColor" d="M64.19 367.9c0-.61-.19-1.18-.19-1.8 0 27.53 23 49.9 51.19 49.9h37.12c26.66 0 49.1-20.3 51.07-46.2l3.12-41.24c-14-5.29-28.31-8.38-42.78-10.42zm404-50l-95.83 47.91.3 4c2 25.9 24.38 46.2 51.07 46.2h37.12C489 416 512 393.63 512 366.13v-37.55a227.76 227.76 0 0 0-43.85-10.66z"></path>
                                </g>
                            </svg>
                            <span className="hidden sm:ml-8 sm:inline sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-500">Themify</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <main className="sm:ml-20 p-8 sm:peer-hover:ml-64">
                <svg className="mb-8 scale-75 sm:scale-100" width="512" height="63.478" xmlns="http://www.w3.org/2000/svg">
                    <path d="M52.898 0C38.792 0 29.976 7.053 26.45 21.16c5.29-7.054 11.462-9.699 18.515-7.935 4.024 1.005 6.9 3.926 10.084 7.157 5.186 5.264 11.189 11.357 24.3 11.357 14.106 0 22.922-7.053 26.449-21.16-5.29 7.054-11.462 9.699-18.515 7.935-4.024-1.005-6.9-3.926-10.084-7.157C72.012 6.093 66.01 0 52.898 0zM26.45 31.739c-14.106 0-22.922 7.053-26.449 21.16 5.29-7.054 11.461-9.699 18.514-7.935 4.025 1.007 6.9 3.926 10.084 7.157 5.186 5.264 11.19 11.357 24.3 11.357 14.107 0 22.923-7.053 26.45-21.16-5.29 7.054-11.462 9.699-18.515 7.935-4.024-1.005-6.9-3.926-10.084-7.156-5.186-5.265-11.189-11.358-24.3-11.358z" fill="#38bdf8" />
                    <path
                        d="M158.687 26.747h-9.231v17.868c0 4.765 3.126 4.69 9.231 4.392v7.222c-12.358 1.489-17.272-1.936-17.272-11.614V26.747h-6.85v-7.743h6.85v-10l8.04-2.382v12.382h9.232zm35.192-7.743h8.04V56.23h-8.04v-5.36c-2.83 3.945-7.222 6.328-13.03 6.328-10.124 0-18.537-8.562-18.537-19.58 0-11.093 8.413-19.58 18.538-19.58 5.807 0 10.2 2.382 13.029 6.253zM182.115 49.53c6.7 0 11.764-4.989 11.764-11.912s-5.063-11.912-11.764-11.912-11.763 4.988-11.763 11.912 5.063 11.912 11.763 11.912zm33.205-36.11c-2.83 0-5.137-2.383-5.137-5.138a5.147 5.147 0 0 1 5.137-5.137 5.147 5.147 0 0 1 5.137 5.137c0 2.755-2.308 5.138-5.137 5.138zm-4.02 42.808V19.004h8.04V56.23zm17.346 0V1.881h8.041v54.348zm60.23-37.225h8.487L285.675 56.23h-7.892l-7.743-25.09-7.817 25.09h-7.891l-11.689-37.225h8.487l7.222 25.685 7.817-25.685h7.668l7.743 25.685zm18.464-5.583c-2.83 0-5.137-2.383-5.137-5.138a5.147 5.147 0 0 1 5.137-5.137 5.147 5.147 0 0 1 5.137 5.137c0 2.755-2.308 5.138-5.137 5.138zm-4.02 42.808V19.004h8.04V56.23zm36.926-38.193c8.339 0 14.295 5.659 14.295 15.337v22.856h-8.04V34.192c0-5.658-3.277-8.636-8.34-8.636-5.285 0-9.454 3.127-9.454 10.72V56.23h-8.04V19.004h8.04v4.765c2.457-3.871 6.477-5.733 11.54-5.733zM392.66 4.114h8.04V56.23h-8.04v-5.36c-2.83 3.945-7.222 6.328-13.029 6.328-10.125 0-18.538-8.562-18.538-19.58 0-11.093 8.413-19.58 18.538-19.58 5.807 0 10.2 2.382 13.029 6.253zM380.896 49.53c6.7 0 11.763-4.989 11.763-11.912s-5.063-11.912-11.763-11.912-11.763 4.988-11.763 11.912 5.062 11.912 11.763 11.912zm46.754 7.668c-11.242 0-19.654-8.562-19.654-19.58 0-11.093 8.412-19.58 19.654-19.58 7.296 0 13.625 3.796 16.603 9.603l-6.924 4.02c-1.638-3.498-5.286-5.732-9.753-5.732-6.552 0-11.54 4.988-11.54 11.689s4.988 11.688 11.54 11.688c4.467 0 8.115-2.308 9.902-5.732l6.923 3.945c-3.126 5.882-9.455 9.679-16.75 9.679zm30.003-27.919c0 6.775 20.027 2.68 20.027 16.454 0 7.445-6.477 11.465-14.517 11.465-7.445 0-12.806-3.35-15.188-8.71l6.924-4.021c1.191 3.35 4.169 5.36 8.264 5.36 3.573 0 6.328-1.19 6.328-4.169 0-6.626-20.027-2.903-20.027-16.23 0-6.998 6.03-11.39 13.624-11.39 6.105 0 11.168 2.828 13.773 7.742l-6.774 3.797c-1.34-2.903-3.946-4.244-6.999-4.244-2.903 0-5.435 1.266-5.435 3.946zm34.322 0c0 6.775 20.027 2.68 20.027 16.454 0 7.445-6.477 11.465-14.518 11.465-7.445 0-12.805-3.35-15.188-8.71l6.924-4.021c1.191 3.35 4.17 5.36 8.264 5.36 3.574 0 6.328-1.19 6.328-4.169 0-6.626-20.027-2.903-20.027-16.23 0-6.998 6.03-11.39 13.625-11.39 6.104 0 11.167 2.828 13.773 7.742l-6.775 3.797c-1.34-2.903-3.946-4.244-6.998-4.244-2.904 0-5.435 1.266-5.435 3.946z"
                        fill="currentColor"
                    />
                </svg>
                <div className="text-justify flex flex-col gap-4">
                    <p className="text-[#38bdf8] uppercase">Animated navbar + mobile responsive + dark mode</p>
                    <p>I'm baby kale chips affogato ennui lumbersexual, williamsburg paleo quinoa iceland normcore tumeric. Kitsch coloring book retro, seitan schlitz tattooed biodiesel vexillologist neutra. Synth mumblecore deep v, umami selfies normcore gluten-free snackwave. Seitan ramps drinking vinegar venmo keytar, humblebrag VHS post-ironic tacos godard pour-over.</p>
                    <p>Sartorial kogi taxidermy, kickstarter synth yr irony ennui everyday carry retro helvetica stumptown cloud bread squid echo park. Etsy cloud bread sartorial quinoa tacos beard mumblecore shaman tumblr pop-up. Twee retro fingerstache af helvetica pabst 8-bit leggings taiyaki portland ramps tbh tumblr vinyl. Neutra humblebrag bushwick portland subway tile plaid, offal scenester flexitarian cliche squid small batch palo santo. Palo santo meh adaptogen +1 3 wolf moon, listicle brunch ethical fanny pack everyday carry fam. Offal fingerstache taxidermy, man bun venmo PBR&amp;B helvetica thundercats everyday carry tote bag artisan cray wolf jianbing.</p>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
                        <p>Next level selfies cronut ethical. Tofu tumblr you probably haven't heard of them, man braid literally forage swag chillwave. Pug yr flannel tumeric. Coloring book yr chillwave snackwave, shoreditch shaman gentrify typewriter tumeric DIY copper mug small batch. Scenester waistcoat YOLO hexagon kombucha poke 8-bit meditation. Selvage scenester forage williamsburg. Hoodie fingerstache tacos mustache, hashtag quinoa next level sartorial craft beer retro disrupt lo-fi.</p>
                        <p>YOLO twee keytar farm-to-table flexitarian cardigan polaroid lumbersexual adaptogen drinking vinegar echo park dreamcatcher. Brunch shoreditch dreamcatcher iPhone knausgaard plaid edison bulb letterpress ethical yr fanny pack. Typewriter portland woke glossier cronut, post-ironic migas gentrify letterpress cray brunch lyft 8-bit master cleanse. Pitchfork thundercats organic pour-over unicorn lomo.</p>
                    </div>
                    <p>Ugh yr tacos aesthetic everyday carry, tumeric selvage cliche skateboard. Wolf truffaut enamel pin vexillologist poutine. Hoodie roof party pabst, cardigan letterpress af disrupt +1 subway tile chillwave live-edge meggings next level readymade. Master cleanse gentrify hashtag, stumptown fam single-origin coffee occupy dreamcatcher air plant viral vexillologist enamel pin meggings. Tumblr chambray pickled microdosing austin scenester green juice.</p>
                    <p>Austin four dollar toast church-key, vaporware hoodie edison bulb jean shorts sustainable williamsburg plaid helvetica scenester lomo humblebrag. Meditation tumblr kickstarter ennui williamsburg taiyaki pabst pour-over. 8-bit godard cred, chillwave enamel pin skateboard you probably haven't heard of them. Meditation before they sold out single-origin coffee swag try-hard jianbing slow-carb shaman leggings. Palo santo shabby chic whatever man bun. Master cleanse wayfarers single-origin coffee pork belly cronut, normcore cliche jianbing before they sold out tousled shabby chic af pop-up gentrify. Direct trade la croix vexillologist jianbing, flexitarian selvage try-hard stumptown polaroid shaman wayfarers poke ramps food truck swag.</p>
                    <p>Pok pok lumbersexual wayfarers, direct trade leggings poutine truffaut kitsch. Seitan aesthetic master cleanse squid coloring book banh mi YOLO vegan locavore vexillologist readymade next level pop-up edison bulb. Selvage knausgaard literally, quinoa photo booth 3 wolf moon microdosing freegan yuccie. Truffaut gentrify lomo put a bird on it waistcoat. Ugh austin distillery, tbh actually pork belly snackwave artisan mixtape quinoa vexillologist pok pok polaroid listicle readymade.</p>
                    <p>Hammock letterpress prism dreamcatcher truffaut shabby chic vice cold-pressed. Franzen pug fashion axe before they sold out, tumblr irony kogi actually af bushwick banh mi. Snackwave bicycle rights tofu dreamcatcher tote bag pour-over meditation raw denim fanny pack. Pop-up retro taiyaki meditation twee gastropub VHS etsy. Semiotics gochujang street art normcore, edison bulb farm-to-table pour-over taxidermy brooklyn.</p>
                    <p>Taxidermy thundercats whatever austin. VHS helvetica ethical, dreamcatcher enamel pin YOLO shabby chic locavore man bun crucifix pabst chillwave pop-up vegan. Air plant mlkshk ethical echo park tumeric, whatever crucifix godard scenester locavore pork belly yuccie vape. +1 gochujang put a bird on it, pork belly whatever selfies vaporware occupy banh mi normcore VHS. Cornhole normcore hashtag tilde. Hell of yr try-hard DIY raw denim banjo, enamel pin irony polaroid copper mug tofu. Dreamcatcher lomo literally 90's before they sold out, 3 wolf moon banh mi seitan chambray cliche offal tote bag occupy pug.</p>
                    <p>Post-ironic hot chicken salvia yr yuccie ugh cold-pressed keffiyeh franzen viral taxidermy mustache slow-carb crucifix vape. Taiyaki yuccie hell of tacos PBR&amp;B, kitsch meggings tbh truffaut kickstarter mixtape af kogi. Fingerstache vegan tofu waistcoat gentrify cray. Drinking vinegar 3 wolf moon health goth craft beer master cleanse. Letterpress health goth 8-bit chillwave craft beer brooklyn. Chicharrones master cleanse 8-bit, mumblecore copper mug messenger bag poutine lomo kale chips flannel. Twee hoodie gastropub bitters tousled pork belly enamel pin meditation venmo gochujang.</p>
                </div>
            </main>
        </>
    );
}
