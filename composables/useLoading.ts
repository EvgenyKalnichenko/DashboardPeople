export default function useLoading () {
    const isLoading = ref(false);
    const loadingOn = () => {
        isLoading.value = true
    }
    const loadingOff = () => {
        isLoading.value = false
    }
    const message = ref('');

    const setMessage = (data) => {
        message.value = `Successfully login: ${data}`;
        isLoading.value = false;
        setTimeout(() => {
            message.value = "";
        }, 3000);
    }

    return {
        isLoading,
        message,
        loadingOn,
        loadingOff,
        setMessage
    }
}
