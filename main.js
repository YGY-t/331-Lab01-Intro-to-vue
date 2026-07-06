const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('A pair of warm, comfortable boots')
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('http://www.camt.cmu.ac.th')
        return {
            product,
            description,
            image,
            link
        }
    }
}).mount('#app')
