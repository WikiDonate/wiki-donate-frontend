<!-- view history page -->
<template>
    <main class="w-full">
        <!-- Topbar Title -->
        <TopBarTitle :page-title="'Spain: Revision history'" />
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

        <!-- view history list -->
        <section class="bg-white p-2">
            <ul class="list-disc pl-5">
                <li>
                    curprev 23:10, 18 October 2024 PrimeBOT talk contribs m
                    250,633 bytes −35‎ →External links: Task 24: elink template
                    removal following a TFD Tag: AWB 14 October 2024
                </li>
                <li>
                    curprev 20:27, 14 October 2024 Citation bot talk contribs
                    250,668 bytes +5‎ Altered template type. Added magazine.
                    Removed parameters. Some additions/deletions were parameter
                    name changes. | Use this bot. Report bugs. | Suggested by
                    BorgQueen | Linked from User:BorgQueen/sandbox |
                    #UCB_webform_linked 565/940 12 October 2024
                </li>

                <li>
                    curprev 18:19, 12 October 2024 Trappist the monk talk
                    contribs m 250,663 bytes +10‎ Task 20 (dev test): replace
                    {lang-??} templates with {langx|??} ‹See Tfd› (Replaced 10);
                    Tag: AWB 7 October 2024
                </li>
                <li>
                    curprev 23:56, 7 October 2024 Anthere talk contribs 250,653
                    bytes −233‎ →Science and technology: GII 2 October 2024
                </li>
                <li>
                    curprev 05:37, 2 October 2024 Citation bot talk contribs
                    250,886 bytes +472‎ Altered template type. Add: work, date,
                    title. Changed bare reference to CS1/2. | Use this bot.
                    Report bugs. | Suggested by Abductive | Category:Articles
                    with failed verification from January 2016 | #UCB_Category
                    2/49
                </li>
            </ul>
        </section>
    </main>
</template>

<script setup>
useHead({
    title: 'View History',
})
</script>
