import za from './maps/SouthAfrica.png';
import eg from './maps/Egypt.png';
import ng from './maps/Nigeria.png';
import ke from './maps/Kenya.png';
import can from './maps/Canada.png';
import jam from './maps/Jamica.png';
import mex from './maps/Mexico.png';
import usa from './maps/USA.png';
import cam from './maps/Cameroon.png';
import newz from './maps/New Zealand.png';
import sam from './maps/Samoa.png';
import arg from './maps/Argentina.png';
import brz from './maps/Brazil.png';
import ecu from './maps/Ecuador.png';
import uru from './maps/Uruguay.png';
import bel from './maps/Belgium.png';
import eth from './maps/Ethiopia.png';
import tun from './maps/Tunisia.png';
import chn from './maps/China.png';
import ind from './maps/India.png';
import uae from './maps/UAE.png';
import yem from './maps/Yemen.png';
import aus from './maps/Australia.png';
import fij from './maps/Fiji.png';
import den from './maps/Denmark.png';
import ita from './maps/Italy.png';
import por from './maps/Portugal.png';


const countries = [
  {
    continent: 'Africa',
    name: 'South Africa',
    map: za,
    cities: ['Cape Town', 'Johannesburg', 'Durban'],
  },
  {
    continent: 'Africa',
    name: 'Egypt',
    map: eg,
    cities: ['Cairo', 'Alexandria', 'Luxor'],
  },
  {
    continent: 'Africa',
    name: 'Nigeria',
    map: ng,
    cities: ['Lagos', 'Abuja', 'Kano'],
  },
  {
    continent: 'Africa',
    name: 'Kenya',
    map: ke,
    cities: ['Nairobi', 'Mombasa', 'Kisumu'],
  },
  {
    continent: 'North America',
    name: 'Canada',
    map: can,
    cities: ['Ottawa', 'Victoria', 'Toronto'],
  },
  {
    continent: 'North America',
    name: 'Jamaica',
    map: jam,
    cities: ['Kingstone', 'Portmore', 'Montego Bay'],
  },
  {
    continent: 'North America',
    name: 'Mexico',
    map: mex,
    cities: ['Mexico City', 'Tijuana', 'Acapulco'],
  },
  {
    continent: 'North America',
    name: 'USA',
    map: usa,
    cities: ['New York', 'Washington', 'Atlanta'],
  },
  {
    continent: 'South America',
    name: 'Argentina',
    map: arg,
    cities: ['San Rafael', 'Caseros', 'Chimbas'],
  },
  {
    continent: 'South America',
    name: 'Ecuador',
    map: ecu,
    cities: ['Loja', 'Puyo', 'Manta'],
  },
  {
    continent: 'South America',
    name: 'Brazil',
    map: brz,
    cities: ['Sao Paulo', 'Natal', 'Aracaju'],
  },
  {
    continent: 'Europe',
    name: 'Portugal',
    map: por,
    cities: ['Lisbon', 'Porto', 'Braga'],
  },
  {
    continent: 'Oceania',
    name: 'New Zealand',
    map: newz,
    cities: ['Auckland', 'Wellington', 'Christchurch'],
  },
  {
    continent: 'Oceania',
    name: 'Samoa',
    map: sam,
    cities: ['Apia', 'Salelologa', 'Aopo'],
  },
  {
    continent: 'South America',
    name: 'Uruguay',
    map: uru,
    cities: ['Durazno', 'Salto', 'Melo'],
  },
  {
    continent: 'Europe',
    name: 'Belgium',
    map: bel,
    cities: ['Aalst', 'Ghent', 'Namur'],
  },
  {
    continent: 'Europe',
    name: 'Denmark',
    map: den,
    cities: ['Copenhagen', 'Aarhus', 'Odense'],
  },
  {
    continent: 'Europe',
    name: 'Italy',
    map: ita,
    cities: ['Rome', 'Milan', 'Naples'],
  },
  {
    continent: 'Africa',
    name: 'Cameroon',
    map: cam,
    cities: ['Yaunde', 'Douala', 'Mokolo'],
  },
  {
    continent: 'Africa',
    name: 'Ethiopia',
    map: eth,
    cities: ['Addis Ababa', 'Bahir Dar', 'Adama'],
  },
  {
    continent: 'Africa',
    name: 'Tunisia',
    map: tun,
    cities: ['Tunis', 'Sfax', 'Sousse'],
  },
  {
    continent: 'Asia',
    name: 'China',
    map: chn,
    cities: ['Hong Kong', 'Macau', 'Beijing'],
  },
  {
    continent: 'Asia',
    name: 'India',
    map: ind,
    cities: ['Mumbai', 'Delhi', 'Bangalore'],
  },
  {
    continent: 'Asia',
    name: 'United Arab Emirates',
    map: uae,
    cities: ['Dubai', 'Abu Dhabi', 'Sharjah'],
  },
  {
    continent: 'Asia',
    name: 'Yemen',
    map: yem,
    cities: ['Sanaa', 'Taizz', 'Aden'],
  },
  {
    continent: 'Oceania',
    name: 'Australia',
    map: aus,
    cities: ['Sydney', 'Melbourne', 'Brisbane'],
  },
  {
    continent: 'Oceania',
    name: 'Fiji',
    map: fij,
    cities: ['Suva', 'Nadi', 'Labasa'],
  },
];

export default countries;
