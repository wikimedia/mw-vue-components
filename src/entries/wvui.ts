import WvuiButton from '@/components/button/Button.vue';
import WvuiCheckbox from '@/components/checkbox/Checkbox.vue';
import WvuiDropdown from '@/components/dropdown/Dropdown.vue';
import WvuiIcon from '@/components/icon/Icon.vue';
import WvuiInput from '@/components/input/Input.vue';
import WvuiOptionsMenu from '@/components/options-menu/OptionsMenu.vue';
import WvuiRadio from '@/components/radio/Radio.vue';
import WvuiTypeaheadSearch from '@/components/typeahead-search/TypeaheadSearch.vue';
import WvuiTypeaheadSuggestion from '@/components/typeahead-suggestion/TypeaheadSuggestion.vue';

// Export version as a named export so that the default export can be
// passed to the Vue app instance's components directly.
export const version = VERSION;

export { restSearchClient } from '@/components/typeahead-search/http/restSearchClient';

// Export all components available in the library.
export default {
	WvuiButton,
	WvuiCheckbox,
	WvuiDropdown,
	WvuiInput,
	WvuiIcon,
	WvuiOptionsMenu,
	WvuiRadio,
	WvuiTypeaheadSearch,
	WvuiTypeaheadSuggestion
};
