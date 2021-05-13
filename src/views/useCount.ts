import { ref } from "vue";

export default function() {
    const count = ref(0);
    function add() {
        count.value ++;
    }
    return {count, add}
}