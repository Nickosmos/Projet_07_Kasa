import React from 'react';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';
import BannerImage from '../../assets/bannerHome.png';
import Data from '../../assets/logements.json';
import './Home.css';


export default function Home() {
  return (
    <main>
      <Banner title='Chez vous, partout et ailleurs' img={BannerImage} altImg='Paysage côtier' />
      <section  className='gallery'>
        {Data.map((Rental, id) => {
            return (
            <Card locId={Rental.id} key={id} title={Rental.title} cover={Rental.cover} />
        )})}
      </section>
    </main>
  );
};
