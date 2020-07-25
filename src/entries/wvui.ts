import WvuiButton from '@/components/button/Button.vue';
import WvuiInput from '@/components/input/Input.vue';

// Export version as a named export so that the default export so that the default export can be
// passed to the Vue app instance's components directly.
export const version = VERSION;

// Export all components available in the library.
export default {
	WvuiButton,
	WvuiInput
};
