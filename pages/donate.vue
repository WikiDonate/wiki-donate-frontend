<template>
    <main class="w-full">
        <div class="container mx-auto p-4 md:p-6">
            <!-- Page Heading -->
            <div class="text-center mb-8">
                <h1 class="text-2xl lg:text-4xl font-bold text-gray-800">
                    Support Us
                </h1>
                <p class="text-gray-600 mt-2">
                    Your contributions help us continue our mission.
                </p>
            </div>

            <!-- Donation Amount Selection -->
            <div class="max-w-sm md:max-w-md mx-auto mb-8">
                <label for="amount" class="block text-gray-700 font-medium mb-2"
                    >Donation Amount</label
                >
                <div class="flex flex-wrap space-x-2 space-y-0 md:space-y-0">
                    <div>
                        <button
                            class="bg-gray-100 text-gray-700 py-2 px-3 mr-1 mb-1 rounded hover:bg-blue-500 hover:text-white"
                        >
                            $10
                        </button>
                        <button
                            class="bg-gray-100 text-gray-700 py-2 px-3 mr-1 mb-1 rounded hover:bg-blue-500 hover:text-white"
                        >
                            $25
                        </button>
                        <button
                            class="bg-gray-100 text-gray-700 py-2 px-3 mr-1 mb-1 rounded hover:bg-blue-500 hover:text-white"
                        >
                            $50
                        </button>
                    </div>
                    <AmountInput v-model="amount" placeholder="Enter Amount" />
                </div>
            </div>

            <!-- Payment Options -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <!-- PayPal Section -->
                <div class="bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg">
                    <h2
                        class="text-lg lg:text-xl font-semibold text-gray-800 mb-4"
                    >
                        Donate with PayPal
                    </h2>
                    <p class="text-gray-600 mb-6">
                        Use PayPal to securely donate with your PayPal account
                        or credit/debit card.
                    </p>
                    <button
                        class="bg-yellow-500 text-white font-semibold py-2 px-4 rounded w-full hover:bg-yellow-600"
                    >
                        Donate via PayPal
                    </button>
                </div>

                <!-- Stripe Section -->
                <div class="bg-gray-100 p-4 md:p-6 rounded-lg shadow-lg">
                    <h2
                        class="text-lg lg:text-xl font-semibold text-gray-800 mb-4"
                    >
                        Donate with Stripe
                    </h2>
                    <p class="text-gray-600 mb-6">
                        Use Stripe to securely donate with your credit or debit
                        card.
                    </p>
                    <button
                        class="bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full hover:bg-blue-700"
                    >
                        Donate via Stripe
                    </button>
                </div>
            </div>

            <!-- Additional Information Section -->
            <div class="text-center mt-8">
                <p class="text-gray-600">
                    We appreciate every donation. You can choose your preferred
                    payment method to proceed.
                </p>
            </div>
        </div>
    </main>
</template>

<script setup>
useHead({
    title: 'Donate',
})

const amount = ref(0)
</script>
