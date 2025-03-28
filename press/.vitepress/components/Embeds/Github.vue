<script setup>
import { useSlots } from 'vue'
import { format } from 'timeago.js';
import { createAlova } from 'alova';
import adapterFetch from 'alova/fetch';
import VueHook from 'alova/vue';
import { useRequest } from 'alova/client';
const slots = useSlots()
const url = slots.default()[0].children
let [, , repo] = /https?:\/\/(www\.)?github\.com\/([a-z0-9-]+\/[a-z0-9-\.]+)/i.exec(url)
const alova = createAlova({
  requestAdapter: adapterFetch(),
  responded: response => response.json(),
  statesHook: VueHook,
  id: 'api-github-repo',
  cacheFor: {
    // 统一设置POST的缓存模式
    GET: {
      mode: 'restore',
      expire: 60 * 60 * 1000
    },
    POST: {
      mode: 'restore',
      expire: 60 * 60 * 1000
    },
    // 统一设置HEAD请求的缓存模式
    HEAD: {
      mode: 'restore',
      expire: 60 * 60 * 1000
    },
    OPTIONS: {
      mode: 'restore',
      expire: 60 * 60 * 1000
    },
  }
})
const { data } = useRequest(
  alova.Get('https://api.github.com/repos/' + repo + '?' + new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    client_secret: GITHUB_CLIENT_SECRET,
  })),
  {
    initialData: {
      id: 0
    },
    immediate: true
  }
)
</script>
<template>
  <div class="github-card my5">
    <div v-if="data?.id">
      <div bg="gray-50 dark:gray-800" border="~ solid gray-3 hover:gray-4 dark:gray-7 dark:hover:gray-5"
           class="p3 rd-md transition-all ease-linear">
        <div class="flex gap-4">
          <div class="min-w-max">
                        <span text="emerald-6 dark:gray-1" bg="emerald-6/10 dark:gray-9"
                              class="rd flex aspect-square rounded-full" shadow>
                            <span flex text-2xl>
                                <img class="w-16 h-16 rounded-full" :src="data?.owner.avatar_url"
                                     :alt="data?.owner.login" />
                            </span>
                        </span>
          </div>
          <div class="space-y-0.5">
            <h3 text="lg gray-9 dark:gray-1" class="font-semibold mt0">
              <i i-cib:github class="mr-2"></i>
              <a :href="data?.html_url" target="_blank">
                {{ data?.full_name }}</a>
            </h3>
            <p text="gray-6 dark:gray-4" class="line-clamp-2">
              {{ data?.description }}
            </p>
            <div class="flex gap-4 repo-info">
              <span><i i-carbon-star></i> {{ data?.stargazers_count }}</span>
              <span><i i-carbon-direction-fork></i> {{ data?.forks_count }}</span>
              <span><i i-carbon-time></i> {{ format((new
                Date(data?.pushed_at)).getTime(),
                'zh_CN') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div>
        <i i-cib:github mr-2></i>
        <a :href="url" target="_blank">
          {{ url }}
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.github-card h3 {
  margin-top: 0;
}

.github-card a {
  text-decoration: none;
  text-underline-offset: 0;
}

.github-card .repo-info i,
.github-card h3 i {
  margin-top: -0.2em;
}
</style>
