<script >
import SingleItem from '../components/SingleItem.vue'

// importo store
import { store } from '../store';

export default {
    name: 'ListItem',
    components: {
        SingleItem,
    },
    data() {
        return {
            store,
        }
    },
}
</script>