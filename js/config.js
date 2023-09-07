class Config {

	constructor() {
		this.getQuickSearchData = this.getQuickSearchData.bind(this);
		this.getSearchEngines = this.getSearchEngines.bind(this);
		this.getWebSites = this.getWebSites.bind(this);
		this.getDockSites = this.getDockSites.bind(this);
	}

	getQuickSearchData = () => {
		const quickSearchData = {
			'r/': {
				urlPrefix: 'https://www.roblox.com/discover/?Keyword='
			},
			'w/': {
				urlPrefix: 'https://wikipedia.org/wiki/'
			},
			'd/': {
				urlPrefix: 'https://www.deviantart.com/search?q='
			},
			'a/': {
				urlPrefix: 'https://amazon.com/s?k='	
			},
			'e/': {
				urlPrefix: 'https://ebay.com/sch/?_nkw='
			},
			'y/': {
				urlPrefix: 'https://youtube.com/results?search_query='
			},
			'g/': {
				urlPrefix: 'https://github.com/'
			},
			'p/': {
				urlPrefix: 'https://www.pinterest.pt/search/pins/?q='
			}
		};

		return quickSearchData;
	}
	

	getSearchEngines = () => {

		const searchEngines = {
			'google': {
				name: 'Google',
				prefix: 'https://www.google.com/search?q='
			},
			'duckduckgo': {
				name: 'Duckduckgo',
				prefix: 'https://duckduckgo.com/?q='
			},
			'ecosia': {
				name: 'Ecosia',
				prefix: 'https://www.ecosia.org/search?q='
			},
			'yahoo': {
				name: 'Yahoo',
				prefix: 'https://search.yahoo.com/search?p='
			},
			'bing': {
				name: 'Bing',
				prefix: 'https://www.bing.com/search?q='
			},
			'searX': {
				name: 'SearX',
				prefix: 'https://searx.mha.fi/search?q='
			}
		};

		return searchEngines;
	}

	getWebSites = () => {
		// Web menu
		// A list of websites that will be generated and put on the web menu
		const webSites = [
			{
				site: 'Reddit',
				icon: 'reddit',
				url: 'https://reddit.com/',
				category: 'social'
			},
			{ 
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/',
				category: 'development'
			},
			{
				site: 'Facebook',
				icon: 'facebook',
				url: 'https://facebook.com/',
				category: 'social'
			},
			{
				site: 'Gmail',
				icon: 'gmail',
				url: 'https://mail.google.com/',
				category: 'social'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/',
				category: 'media'
			},
			{
				site: 'Twitter',
				icon: 'twitter',
				url: 'https://twitter.com/',
				category: 'social'
			},
			{
				site: 'Instagram',
				icon: 'instagram',
				url: 'https://instagram.com/',
				category: 'social'
			},
			{
				site: 'Bitbucket',
				icon: 'bitbucket',
				url: 'https://bitbucket.org/',
				category: 'development'
			},
			{
				site: 'Gitlab',
				icon: 'gitlab',
				url: 'https://gitlab.com/',
				category: 'development'
			},
			{
				site: 'Deviantart',
				icon: 'deviantart',
				url: 'https://deviantart.com/',
				category: 'design'
			},
			{
				site: 'Duckduckgo',
				icon: 'duckduckgo',
				url: 'https://duckduckgo.com/',
				category: 'development'
			},
			{
				site: 'Ecosia',
				icon: 'ecosia',
				url: 'https://ecosia.org/',
				category: 'search engine'
			},
			{
				site: 'Google',
				icon: 'google',
				url: 'https://google.com/',
				category: 'search engine'
			},
			{
				site: 'Twitch',
				icon: 'twitch',
				url: 'https://twitch.tv/',
				category: 'media'
			},
			{
				site: 'Material.io',
				icon: 'materialio',
				url: 'https://material.io/',
				category: 'design'
			},
			{
				site: 'Netflix',
				icon: 'netflix',
				url: 'https://netflix.com/',
				category: 'media'
			},
			{
				site: '4chan',
				icon: '4chan',
				url: 'https://4chan.org/',
				category: 'social'
			},
			{
				site: 'Discord',
				icon: 'discord',
				url: 'https://discord.com/',
				category: 'social'
			},
			{
				site: 'Spotify',
				icon: 'spotify',
				url: 'https://spotify.com/',
				category: 'media'
			},
			{
				site: 'ArchWiki',
				icon: 'archwiki',
				url: 'https://wiki.archlinux.org/',
				category: 'information'
			},
			{
				site: 'Figma',
				icon: 'figma',
				url: 'https://figma.com/',
				category: 'design'
			},
			{
				site: 'Stackoverflow',
				icon: 'stackoverflow',
				url: 'https://stackoverflow.com/',
				category: 'development'
			},
			{
				site: 'Stackexchange',
				icon: 'stackexchange',
				url: 'https://stackexchange.com/',
				category: 'development'
			},
			{
				site: 'Superuser',
				icon: 'superuser',
				url: 'https://superuser.com/',
				category: 'development'
			},
			{
				site: 'Icons8',
				icon: 'icons8',
				url: 'https://icons8.com/',
				category: 'design'
			},
			{
				site: 'Markdown Cheatsheet',
				icon: 'markdown',
				url: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet/',
				category: 'development'
			},
			{
				site: 'Keycode',
				icon: 'keycode',
				url: 'https://keycode.info/',
				category: 'development'
			},
			{
				site: 'Soundcloud',
				icon: 'soundcloud',
				url: 'https://soundcloud.com/',
				category: 'media'
			},
			{
				site: 'Flaticon',
				icon: 'flaticon',
				url: 'https://flaticon.com/',
				category: 'design'
			},
			{
				site: 'ChatGPT',
				icon: 'chatgpt',
				url: 'https://chat.openai.com/',
				category: 'development'
			},
			{
				site: 'Roblox',
				icon: 'roblox',
				url: 'https://www.roblox.com/home',
				category: 'media'
			},
			{
				site: 'WhatsApp',
				icon: 'whatsapp',
				url: 'https://web.whatsapp.com/',
				category: 'social'
			}
		];

		return webSites;
	}

	getDockSites = () => {
		// Dock
		// A list of websites that will be generated and put on the dock
		const dockSites = [
			{
				site: 'ArchWiki',
				icon: 'archwiki',
				url: 'https://wiki.archlinux.org/'
			},
			{
				site: 'Github',
				icon: 'github',
				url: 'https://github.com/'
			},
			{
				site: 'Roblox',
				icon: 'roblox',
				url: 'https://www.roblox.com/home'
			},
			{
				site: 'WhatsApp',
				icon: 'whatsapp',
				url: 'https://web.whatsapp.com/'
			},
			{
				site: 'Youtube',
				icon: 'youtube',
				url: 'https://youtube.com/'
			},
			{
				site: 'ChatGPT',
				icon: 'chatgpt',
				url: 'https://chat.openai.com/'
			},
			{
				site: 'Twitter',
				icon: 'twitter',
				url: 'https://twitter.com/'
			},
			{
				site: 'Instagram',
				icon: 'instagram',
				url: 'https://instagram.com/'
			}
		];

		return dockSites;
	}
}
