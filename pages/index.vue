<template>
    <main class="w-full shadow rounded-lg lg:mr-48">
        <h2 class="font-bold text-center lg:text-xl mb-2 p-1 bg-sky-100">
            Recent Articles
        </h2>
        <!-- Welcome Speach -->
        <div
            class="bg-white p-2 container mx-auto mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4"
        >
            <!-- Left Column -->
            <div class="bg-white p-4">
                <div>
                    <h2 class="font-bold mb-2 p-1 bg-gray-100">
                        From Today's Featured Article
                    </h2>
                    <p class="bg-white-100 mb-4 text-justify text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem. Veritatis obcaecati tenetur iure
                        eius earum ut molestias architecto voluptate aliquam.
                        <NuxtLink to="/article" exact
                            >[<span class="text-blue-500 text-sm"
                                >Read More..</span
                            >]</NuxtLink
                        >
                    </p>
                </div>
            </div>

            <!-- Right Column -->
            <section class="bg-white p-4">
                <div>
                    <h2 class="font-bold mb-2 p-1 bg-gray-100">In the News</h2>
                    <p class="bg-white-100 mb-4 text-justify text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem. Veritatis obcaecati tenetur iure
                        eius earum ut molestias architecto voluptate aliquam.
                        <NuxtLink to="/article" exact
                            >[<span class="text-blue-500 text-sm"
                                >Read More..</span
                            >]</NuxtLink
                        >
                    </p>
                </div>
            </section>

            <!-- Another Left Column Section -->
            <section class="bg-white p-4">
                <div>
                    <h2 class="font-bold mb-2 p-1 bg-gray-100">
                        Did You Know?
                    </h2>
                    <p class="bg-white-100 mb-4 text-justify text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem. Veritatis obcaecati tenetur iure
                        eius earum ut molestias architecto voluptate aliquam.
                        <NuxtLink to="/article" exact
                            >[<span class="text-blue-500 text-sm"
                                >Read More..</span
                            >]</NuxtLink
                        >
                    </p>
                </div>
            </section>

            <!-- Another Right Column Section -->
            <section class="bg-white p-4">
                <div>
                    <h2 class="font-bold mb-2 p-1 bg-gray-100">
                        On This Day...
                    </h2>
                    <p class="bg-white-100 mb-4 text-justify text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem. Veritatis obcaecati tenetur iure
                        eius earum ut molestias architecto voluptate aliquam.
                        <NuxtLink to="/article" exact
                            >[<span class="text-blue-500 text-sm"
                                >Read More..</span
                            >]</NuxtLink
                        >
                    </p>
                </div>
            </section>
        </div>
    </main>
</template>

<script setup>
// import TopBar from '~/components/TopBar.vue'
useHead({
    title: 'Main Page',
})
</script>
