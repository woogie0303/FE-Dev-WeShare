import React from 'react';

type Props = {};

export default function CategoryPrice({}: Props) {
  return (
    <div className="flex flex-col">
      <p className="mb-2 text-xl font-bold">금액</p>
      <div className="space-x-2">
        <input type="number" className="rounded-xl p-2 " />
        <span>~</span>
        <input type="number" className="rounded-xl p-2" />
      </div>
    </div>
  );
}
