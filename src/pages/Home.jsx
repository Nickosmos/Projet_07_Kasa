import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import BannerImage from '../assets/bannerHome.png';
import Data from "../assets/logements.json";


export default function Home() {
  return (
    <div className='main'>
      <section className='banner'>
        <Banner title='Chez vous, partout et ailleurs' img={BannerImage} altImg='Paysage côtier' />
      </section>
      <section  className='gallery'>
        {Data.map((Location, id) => {
            return (
            <Card locId={Location.id} key={id} title={Location.title} cover={Location.cover} />
        )})}
      </section>
    </div>
  );
};
