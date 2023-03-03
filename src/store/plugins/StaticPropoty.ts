import type { PiniaPluginContext } from "pinia";

/**
 * 返回一个对象将一个静态属性添加到所有 store
 * @param context
 * @constructor
 */
export default function StaticPropotyPiniaPlugin(context: PiniaPluginContext) {
    console.log('piniaPlugin>args:', arguments)
    console.log('piniaPlugin>pinia:', context.pinia)
    console.log('piniaPlugin>store:', context.store)
    console.log('piniaPlugin>app:', context.app)
    console.log('piniaPlugin>options:', context.options)

    return {
        staticPrototype: 'The cake is a lie'
    }
}