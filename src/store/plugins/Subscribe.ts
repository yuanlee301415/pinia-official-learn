import type { PiniaPluginContext } from "pinia";

export default function SubscribePininPlugin({ store }: PiniaPluginContext) {
    store.$subscribe(function (mutation, state) {
        console.log('SubscribePininPlugin>$subscribe>args:', arguments)
        console.log('SubscribePininPlugin>$subscribe>mutation:', mutation)
        console.log('SubscribePininPlugin>$subscribe>state:', state)
    })
}