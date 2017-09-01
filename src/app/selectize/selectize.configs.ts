export const Example_Placeholder = 'Placeholder...';
export const Example_Placeholder_HasOptions = 'Click to select options';
export const Example_Placeholder_NoOptions = 'No options available...';

export const DEFAULT_DROPDOWN_CONFIG: any = {
	highlight: false,
	create: false,
	persist: true,
	plugins: ['dropdown_direction', 'remove_button'],
	dropdownDirection: 'down'
};


export interface SelectizeOption {
	label: string;
	value: number;
}


export const PageSizeValues: SelectizeOption[] = <SelectizeOption[]>[
	{
		label: '5',
		value: 5
	}, {
		label: '10',
		value: 10
	}, {
		label: '20',
		value: 20
	}, {
		label: '50',
		value: 50
	}
];

