import images from './images';

const rooms = [
  {
    title: 'Sigle room',
    price: '1,500 L.E',
    tags: '1 P | 1 D',
  },
  {
    title: 'Double room',
    price: '2,750 L.E',
    tags: '2 P | 1 D',
  },
  {
    title: 'Triple room',
    price: '4,000 L.E',
    tags: '3 P | 1 D',
  },
  {
    title: 'Quad room',
    price: '5,500 L.E',
    tags: '4 P | 1 D',
  },
  {
    title: 'Studio',
    price: '2,500 L.E',
    tags: '1 P | 1 D',
  },
];

const suites = [
  {
    title: 'Standard suite',
    price: '15,000 L.E',
    tags: '1-2 P | 3 D' ,
  },
  {
    title: 'Junior suites',
    price: '20,000 L.E',
    tags: '1-3 P | 3 D ',
  },
  {
    title: "Presidential suites",
    price: '40,000 L.E',
    tags: '1-5 P | 2 D | Pool',
  },
  {
    title: 'Honeymoon suites',
    price: '150,000 L.E',
    tags: '2 P | 7 D | Pool',
  },
  {
    title: 'Villa',
    price: '300,000 L.E',
    tags: '100 m² - 150 m² | 1 D ',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { rooms, suites, awards };
