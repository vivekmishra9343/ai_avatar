"use client";

import React from "react";
import Image from "next/image";

interface AvatarCardProps {
  name: string;
  imageUrl: string;
  onEdit: () => void;
}

const AvatarCard = ({ name, imageUrl, onEdit }: AvatarCardProps) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105'>
      <div className='relative h-48 w-full'>
        <Image src={imageUrl} alt={name} fill className='object-cover' />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-900'>{name}</h3>
        <button
          onClick={onEdit}
          className='mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors'
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default AvatarCard;
