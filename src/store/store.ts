import { create } from 'zustand';

type Store = {
	elementInView: string;
	setElementInview: (val: string) => void;
};

export const useViewStore = create<Store>((set) => ({
	elementInView: '',
	setElementInview: (val) => {
		set(() => ({ elementInView: val }));
	},
}));
