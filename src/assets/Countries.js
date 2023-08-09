import southAfrica from './maps/SouthAfrica.png';
import egypt from './maps/Egypt.png';
import nigeria from './maps/Nigeria.png';
import kenya from './maps/Kenya.png';

const countries = [
  {
    continent: 'Africa',
    name: 'South Africa',
    map: southAfrica,
    cities: ['Cape Town', 'Johannesburg', 'Durban'],
  },
  {
    continent: 'Africa',
    name: 'Egypt',
    map: egypt,
    cities: ['Cairo', 'Alexandria', 'Luxor'],
  },
  {
    continent: 'Africa',
    name: 'Nigeria',
    map: nigeria,
    cities: ['Lagos', 'Abuja', 'Kano'],
  },
  {
    continent: 'Africa',
    name: 'Kenya',
    map: kenya,
    cities: ['Nairobi', 'Mombasa', 'Kisumu'],
  },
];

export default countries;
