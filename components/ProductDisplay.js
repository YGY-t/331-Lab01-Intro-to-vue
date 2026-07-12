const productDisplay = {
    template:
        /*html*/
        `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :class="{'out-of-stock-img': inventory === 0}">
                </div>
                <div class="product-info">
                    <h1><a :href="link">{{ title }}</a></h1>
                    <p>{{description}}</p>
                    <p v-if="inventory > 10">In Stock</p>
                    <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping: {{shipping}}</p>

                    <p v-if="onSale">{{ saleMessage }}</p>
                    <product-details :details="details"></product-details>
                    <div class="color-circle" :style="{ backgroundColor: variant.color }" v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)">
                    </div>
                    <div>
                        <h3>Sizes:</h3>
                        <span v-for="size in sizes" :key="size">{{ size }}, </span>
                    </div>
                    <button class="button" :disabled="inventory === 0" :class="{disabledButton: inventory === 0}" @click="addToCart">Add To Cart</button>
                    <button class="button" @click="toggleInStock">Toggle Stock</button>
                </div>
            </div>
        </div>
        `,
    props: {
        premium: Boolean
    },
    setup(props) {
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
        const shipping = computed(() => {
            if (props.premium) {
                return 'Free'
            } else {
                return 30
            }
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
            shipping,
            addToCart,
            updateVariant,
            toggleInStock
        }
    }
}