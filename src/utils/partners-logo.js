const logos = [
	{
		name: 'McDonald\'s',
		filename: 'mcdonalds.svg'
	},
	{
		name: 'Uber',
		filename: 'uber.svg'
	},
	{
		name: 'Lon',
		filename: 'lon.svg'
	},
	{
		name: 'Kairos',
		filename: 'kairos.svg'
	},

	{
		name: 'Ufo',
		filename: 'ufo.svg'
	},
	{
		name: 'Tarzania',
		filename: 'tarzania.svg'
	},

	{
		name: 'Claustrophobia',
		filename: 'claustrophobia.svg'
	},
	{
		name: 'Lonmedia',
		filename: 'lonmedia.svg'
	},
	{
		name: 'Khospis',
		filename: 'khospis.svg'
	}
]

function preloadLogos() {
	var pics = []
	for (var i = 0; i < logos.length; i++) {
		pics[i] = {
			name: logos[i].name,
			url: require('Images/partners-logos/' + logos[i].filename)
		}
	}
	return pics
}
export default preloadLogos()
