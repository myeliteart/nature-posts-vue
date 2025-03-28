import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useArticlesStore = defineStore('articles', () => {
    const articleSlides = ref ([
        {
            id: 1,
            img: new URL('@/assets/images-/1.jpg', import.meta.url).href,
            title: 'Sky mountains & waterfall',
            desc: 'enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar.',
            tag: ['water', 'tree']
        },
        {
            id: 2,
            img: new URL('@/assets/images-/2.jpg', import.meta.url).href,
            title: 'Hood in the deep sea',
            desc: 'dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper',
            tag: ['sky', 'mountain', 'water']
        },
        {
            id: 3,
            img: new URL('@/assets/images-/3.jpg', import.meta.url).href,
            title: 'Breathtaking sun',
            desc: 'adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            tag: ['sun']
        },
        {
            id: 4,
            img: new URL('@/assets/images-/4.jpg', import.meta.url).href,
            title: 'Shine on the horizon',
            desc: 'dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper',
            tag: ['sun']
            
        },
        {
            id: 5,
            img: new URL('@/assets/images-/5.jpg', import.meta.url).href,
            title: 'Nature in the desert',
            desc: 'as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
            tag: ['tree', 'mountain']
        },
        {
            id: 6,
            img: new URL('@/assets/images-/6.jpg', import.meta.url).href,
            title: 'Hashems wonder',
            desc: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            tag: ['water', 'mountain']
        },
        {
            id: 7,
            img: new URL('@/assets/images-/7.jpg', import.meta.url).href,
            title: 'Denver rockies',
            desc: 'tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
            tag: ['sky', 'mountain']
        },
        {
            id: 8,
            img: new URL('@/assets/images-/8.jpg', import.meta.url).href,
            title: 'Smoke on the mountains',
            desc: 'tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
            tag: ['mountain']
        },
        {
            id: 9,
            img: new URL('@/assets/images-/9.jpg', import.meta.url).href,
            title: 'Discovering the blue river',
            desc: 'tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
            tag: ['water', 'mountain']
        },
        {
            id: 10,
            img: new URL('@/assets/images-/10.jpg', import.meta.url).href,
            title: 'Blue sky, white clouds',
            desc: 'adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.',
            tag: ['sky', 'tree']
        }
    ])
    

    // const editedArticlesValues = ref (null);

    // const allArticles = ref(articleSlides.value.slice(0, 1))

    const allArticles = ref([])

    const articlesValues = ref({
        id: null,
        title: '',
        desc: '',
        review: [],
        img: '',
        tag: []
    });

    const reviews = ref ({
        rate: '',
        title: '',
        review: ''
    })

    const reviewingItem = ref(null)
    
    // favorites

    const allFavorites = ref([])

    const count = ref (0);

    const sorted = ref (['Top Rated', 'A to Z']);
    const sortedSelected = ref ('Top Rated');

    const articleSelected = ref(null);
    const favoriteSelected = ref(null);

    return { articleSlides, articlesValues, allArticles, allFavorites, sorted, sortedSelected, count, favoriteSelected, articleSelected, reviewingItem, reviews }
})