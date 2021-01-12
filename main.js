const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            inventory: 100,
            onSale:true,
            details: ['50% cotton', 'ben', 'p'],
            variants: [
                {id: 2234, color: 'green'},
                { id: 6784, color: 'blue'},
            ]
        }
    }
})
