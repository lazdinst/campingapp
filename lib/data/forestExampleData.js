var forests = [
  {
    name: 'Angeles National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'TThe Angeles National Forest was established by Executive Order in December, 1892. It covers about 700,000 acres and is the backyard playground to the huge metropolitan area of Los Angeles. The Angeles manages the watersheds within its boundaries to provide valuable water to southern California and to protect surrounding communities from catastrophic floods. The land within the Forest is as diverse in appearance and terrain as it is in the opportunities it provides for enjoyment. Elevations range from 1,200 to 10,064 feet. Much of the Forest is covered with dense chaparral which changes to pine and fir-covered slopes as you reach the majestic peaks of the higher elevations. The Angeles National Forest offers natural environments, spectacular scenery, developed campgrounds and picnic areas, swimming, fishing, skiing and the solitude of quiet wilderness areas. Trails winding throughout the forest accommodate hikers, equestrians, mountain bikers and off-highway vehicle enthusiasts.',
    usfs: 'https://www.fs.usda.gov/angeles',
    reviews: [
      {
        id: 1,
        title: 'Awesome Bro-cation',
        reviewer: 'Ben Franklin',
        review: 'This place is hella sick bro. I took some of my french mistresses here. Such nature, much wow.',
        rating: 5
      },
      {
        id: 2,
        title: 'Get Place! Ultimate place to meet Hot Chicks',
        reviewer: 'Jimmy Madison',
        review: 'Yeah Ben is so right, like always. Creme de la Creme. Im giving it 4 stars because my my wife called and ruined our party',
        rating: 4
      }
    ]
  },
  {
    name: 'Cleveland National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'https://www.fs.usda.gov/cleveland',
    reviews: [
      {
        id: 1,
        title: 'Awesome Bro-cation',
        reviewer: 'Ben Franklin',
        review: 'This place is hella sick bro. I took some of my french mistresses here. Such nature, much wow.',
        rating: 4
      },
      {
        id: 2,
        title: 'Get Place! Ultimate place to meet Hot Chicks',
        reviewer: 'Jimmy Madison',
        review: 'Yeah Ben is so right, like always. Creme de la Creme.',
        rating: 5
      }
    ]
  },
  {
    name: 'Eldorado National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'https://www.fs.usda.gov/eldorado',
    reviews: [
      {
        id: 1,
        title: 'Awesome Bro-cation',
        reviewer: 'Ben Franklin',
        review: 'This place is hella sick bro. I took some of my french mistresses here. Such nature, much wow.',
        rating: 4.5
      },
      {
        id: 2,
        title: 'Get Place! Ultimate place to meet Hot Chicks',
        reviewer: 'Jimmy Madison',
        review: 'Yeah Ben is so right, like always. Creme de la Creme.',
        rating: 5
      }
    ]
  },
  {
    name: 'Inyo National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/inyo'
  },
  {
    name: 'Klamath National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/klamath'
  },
  {
    name: 'Lake Tahoe Basin Management Area',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/ltbmu'
  },
  {
    name: 'Lassen National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/lassen'
  },
  {
    name: 'Los Padres National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/lpnf'
  },
  {
    name: 'Mendocino National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/mendocino'
  },
  {
    name: 'Modoc National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/modoc'
  },
  {
    name: 'Plumas National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/plumas'
  },
  {
    name: 'San Bernardino National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/sbnf'
  },
  {
    name: 'Sequoia National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.fed.us/r5/sequoia'
  },
  {
    name: 'Shasta-Trinity National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/stnf'
  },
  {
    name: 'Sierra National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/sierra'
  },
  {
    name: 'Six Rivers National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/srnf'
  },
  {
    name: 'Stanislaus National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/stanislaus'
  },
  {
    name: 'Tahoe National Forest',
    image: 'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5282935.png',
    description: 'This is a default description',
    usfs: 'http://www.fs.usda.gov/tahoe'
  }
];

module.exports.forests = forests;