'use client';

import withAuth from '../LoginForm/withAuth';
import TravelMap from '../TravelMap';
import TravelEditContainer from './TravelEditContainer';

function TravelEdit() {
  return (
    <>
      <div className="basis-1/2">
        <TravelMap />
      </div>
      <TravelEditContainer />
    </>
  );
}
export default withAuth(TravelEdit);
