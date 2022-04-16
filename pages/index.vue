<template>
    <div class="max-w-sm mx-auto mt-4">
        <div class="flex items-center">
            <img
                class="w-40 h-40 mb-4 rounded-full"
                height="160"
                width="160"
                src="https://avatars.githubusercontent.com/u/48611415?s=400&u=6dd61ccd864754c7d60f4d02e9f9cbe0befcdf61&v=4"
                alt="productfrontenddeveloper"
            />
            <a
                target="blank"
                class="ml-4 font-bold text-red-600 dark:text-green-400"
                href="https://github.com/rwerplus"
            >Follow Me Github</a>
        </div>
        <ul role="list" class="mt-10 space-y-4">
            <li v-for="item in lists" :key="item.id">
                <NuxtLink class="py-4 hover:shadow-xl global-text" :to="item.url">
                    <div
                        class="flex items-center justify-between p-4 space-x-3 bg-gray-300 rounded-lg dark:bg-gray-700"
                    >
                        {{ item.title }}
                        <ArrowNarrowRightIcon class="w-6 h-6 global-text" aria-hidden="true" />
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { ArrowNarrowRightIcon } from '@heroicons/vue/outline'

interface links {
    id: number
    title: string
    url: any
}

export default {
    components: {
        ArrowNarrowRightIcon
    },
    setup() {
        const router = useRouter()
        const lists = ref<links[]>([
            { id: 1, title: 'Pinia Store', url: 'pinia' },
            { id: 1, title: 'Modal', url: 'modal' },
             { id: 1, title: 'Menu', url: 'menu' },
            { id: 1, title: 'New soon...', url: '' },
        ])
        return {
            lists
        }
    }
}
</script>
