const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('A pair of warm, comfortable boots')
        const image = ref('./assets/images/socks_blue.jpg')
        const link = ref('http://www.camt.cmu.ac.th')
        const inStock = ref(true)
        const inventory = ref(5)
        const onSale = ref(true)
        return {
            product,
            description,
            image,
            link,
            inStock,
            inventory,
            onSale
        }
    }
}).mount('#app')
