/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import React from 'react';
import TravelPreviewRenderMarker from './TravelPreviewRenderMarker';
import TravelRenderMarkers from './TravelRenderMarkers';

export default function TravelMarkerContainer() {
  return (
    <>
      <TravelPreviewRenderMarker />
      <TravelRenderMarkers />
    </>
  );
}
