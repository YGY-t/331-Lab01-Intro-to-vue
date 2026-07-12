const { createApp, ref, computed } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('A pair of warm, comfortable boots')
        const link = ref('http://www.camt.cmu.ac.th')
        const inventory = ref(5)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ])
        const selectedVariant = ref(0)
        const sizes = ref(['S', 'M', 'L'])
        const cart = ref(0)

        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        const saleMessage = computed(() => {
            return brand.value + ' ' + product.value + ' is on sale'
        })

        function addToCart() {
            cart.value += 1
        }
        function updateVariant(index) {
            selectedVariant.value = index
        }
        function toggleInStock() {
            if (inventory.value > 0) {
                inventory.value = 0
            } else {
                inventory.value = 100
            }
        }

        return {
            product,
            brand,
            title,
            description,
            details,
            image,
            variants,
            link,
            inStock,
            inventory,
            onSale,
            saleMessage,    
            sizes,
            cart,
            addToCart,
            updateVariant,
            toggleInStock
        }
    }
}).mount('#app')