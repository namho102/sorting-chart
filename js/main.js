var chart = c3.generate({
	bindto: '#chart',
	data: {
		columns: [
			['Bubble', 3.6, 79, 350.2, 9804, 37703.2],
			['Selection', 2.2, 35.4, 120, 2993.2, 12076.2],
			['Insertion', 1.8, 16, 62, 1478.6, 6102.4],
			['Merge', 1.6, 5.6, 8.8, 31.2, 60, 301.2, 594, 3018.2, 6102.6],
			['Quick', 1, 2, 2, 9, 17.4, 90.8, 180.6, 973.6, 2027.4],
			['Heap', 1, 2, 5, 13.2, 23.4, 139.4, 326.2, 2238.4, 4783],
		]
	},
	grid: {
		x: {
			lines: [{
				value: 0,
				text: '1000'
			}, {
				value: 1,
				text: '5000'
			}, {
				value: 2,
				text: '10000'
			}, {
				value: 3,
				text: '50000'
			}, {
				value: 4,
				text: '100000'
			}, {
				value: 5,
				text: '500000'
			}, {
				value: 6,
				text: '1000000'
			}, {
				value: 7,
				text: '5000000'
			}, {
				value: 8,
				text: '10000000'
			}]
		}
	}
});


function show1() {
	chart.show(['Bubble', 'Selection', 'Insertion']);
	chart.hide(['Quick', 'Merge', 'Heap']);
}

function show2() {
	chart.show(['Quick', 'Merge', 'Heap']);
	chart.hide(['Bubble', 'Selection', 'Insertion']);
}