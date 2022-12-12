import React from 'react';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';
import BannerDesktop from '../../assets/bannerHome.png';
import BannerMobile from '../../assets/bannerHomeMob.png';
import Data from '../../assets/logements.json';
import './Home.css';


export default function Home() {
  return (
    <main>
      <Banner title='Chez vous, partout et ailleurs' imgdesk={BannerDesktop} imgmob={BannerMobile} altImg='Paysage côtier' />
      <section  className='gallery'>
        {Data.map((Rental, id) => {
            return (
            <Card locId={Rental.id} key={id} title={Rental.title} cover={Rental.cover} />
        )})}
      </section>
    </main>
  );
};
