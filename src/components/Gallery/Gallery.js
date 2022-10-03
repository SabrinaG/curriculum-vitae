import React from 'react';
import Imgix from 'react-imgix';

import croatiaZagreb from '../../assets/photos/croatia_zagreb.jpeg';
import liechtensteinVaduz from '../../assets/photos/liechtenstein_vaduz.jpeg';
import franceParis from '../../assets/photos/france_paris.jpeg';
import franceToulouse from '../../assets/photos/france_toulouse.jpeg';
import germanyHagnau from '../../assets/photos/germany_hagnau.jpeg';
import germanyLindau from '../../assets/photos/germany_lindau.jpeg';
import italyMilan from '../../assets/photos/italy_milan.jpeg';
import italyRome from '../../assets/photos/italy_rome.jpeg';
import portugalPorto from '../../assets/photos/portugal_porto.jpeg';
import portugalLisbon from '../../assets/photos/portugal_lisbon.jpeg';
import spainCompostela from '../../assets/photos/spain_compostela.jpeg';
import spainSevilha from '../../assets/photos/spain_sevilha.jpeg';
import switzerlandGenebra from '../../assets/photos/switzerland_genebra.jpeg';
import switzerlandZurique from '../../assets/photos/switzerland_zurique.jpeg';

import './Gallery.css';

const photoList = [
  croatiaZagreb, liechtensteinVaduz,
  franceParis, franceToulouse,
  germanyHagnau, germanyLindau,
  italyMilan, italyRome,
  portugalPorto, portugalLisbon,
  spainCompostela, spainSevilha,
  switzerlandGenebra, switzerlandZurique,
];

function Gallery() {
  return (
    <div className="gallery-container" data-testid="gallery-container">
      <Imgix
        key="srcImg"
        src="https://i.pinimg.com/originals/ba/ac/55/baac557ee6f59ad451a1ac0b9f300afd.jpg"
        imgixParams={{ fit: 'crop', ar: '1:1' }}
      />
      {photoList.map(photo => (
        <img
          key={photo}
          src={photo}
          alt={photo}
        />
      ))}
    </div>
  );
}

export default Gallery;
