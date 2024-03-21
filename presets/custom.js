// assets/presets/custom.js
import { usePassThrough } from 'primevue/passthrough';
import Tailwind from 'primevue/passthrough/tailwind';

const CustomTailwind = usePassThrough(Tailwind, {
    button: {
        root: 'my-button'
    }
}, { mergeProps: true });

export default CustomTailwind;
