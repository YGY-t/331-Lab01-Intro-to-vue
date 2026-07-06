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
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
        ])
        const sizes = ref(['S', 'M', 'L'])
        const cart = ref(0)
        return {
            product,
            description,
            details,
            image,
            variants,
            link,
            inStock,
            inventory,
            onSale,
            sizes,
            cart,
            addToCart,
            updateImage,
            toggleInStock
        }
        function addToCart() {
            cart.value += 1
        }
        function updateImage(variantImage) {
            image.value = variantImage
        }
        function toggleInStock() {
    if (inventory.value > 0) {
        inventory.value = 0
    } else {
        inventory.value = 100
    }
}
    }
}).mount('#app')
