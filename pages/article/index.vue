<!-- existing article page -->
<template>
    <main class="w-full">
        <!-- Top bar -->
        <TopBar
            :left-menu-items="[
                { name: 'Article', link: '/article' },
                { name: 'Talk', link: '/article/talk' },
            ]"
            :right-menu-items="[
                { name: 'Edit Source', link: '/article/edit-source' },
                { name: 'View History', link: '/article/view-history' },
            ]"
        />

        <!-- article page -->
        <section class="bg-white p-2">
            <div class="flex border-b border-b-gray-300 items-center mb-2">
                <h2 class="font-bold text-xl mr-2">Arts and entertainment</h2>
                <NuxtLink to="/article/edit-source" exact
                    >[<span class="text-blue-500 text-sm">edit source</span
                    >]</NuxtLink
                >
            </div>

            <p class="bg-white-100 mb-4 text-justify text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam
            </p>
        </section>

        <section class="bg-white p-2">
            <div class="flex border-b border-b-gray-300 items-center mb-2">
                <h2 class="font-bold text-xl mr-2">
                    Businesses and organizations
                </h2>
                <NuxtLink to="/article/edit-source" exact
                    >[<span class="text-blue-500 text-sm">edit source</span
                    >]</NuxtLink
                >
            </div>
            <ul class="list-disc pl-5">
                <li class="mb-2">
                    BB Bloggingsbooks, an imprint of OmniScriptum
                </li>
                <li class="mb-2">
                    BB Microlight, a Hungarian aircraft manufacturer
                </li>
                <li class="mb-2">
                    Banco do Brasil, a Brazilian financial services company
                </li>
                <li class="mb-2">
                    Bavarian Peasants' League (Bayerischer Bauernbund), a former
                    German political party
                </li>
                <li class="mb-2">
                    BlackBerry Limited (stock ticker BB), Canadian technology
                    company
                </li>
                <li class="mb-2">
                    Borderland Beat, a news blog covering the Mexican drug war
                </li>
                <li class="mb-2">
                    Boys' Brigade, a Christian youth organization
                </li>
            </ul>
        </section>
    </main>
</template>

<script setup>
useHead({
    title: 'Article',
})
</script>
