import React from 'react';
import ColorContainer from './ColorContainer';
import BuySection from './BuySection';
import SizeContainer from './SizeContainer';
import Description from './Description';
import InfoHeader from './InfoHeader';

const InfoPage = props => {
  return (
    <div className="info">
      <InfoHeader />
      <Description />
      <ColorContainer {...props} />
      <SizeContainer />
      <BuySection />
    </div>
  );
};

export default InfoPage;
