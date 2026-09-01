
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/edushare.jpeg" | "/Elnido1.jpeg" | "/Elnido2.jpeg" | "/EventEase1.jpeg" | "/Hospital.jpeg" | "/Jade.jpg" | "/mdebt.png" | "/MentalHealth.jpeg" | "/mmbuilding.png" | "/mmcompanies.jpeg" | "/mmhotel.png" | "/Nutrigourment1.jpeg" | "/Nutrigourment2.jpeg" | "/Nutrigourment3.jpeg" | "/parinig.jpeg" | "/PEA.jpeg" | "/restobar.png" | "/reziofy.png" | "/robots.txt" | "/TravelHive.png" | string & {};
	}
}