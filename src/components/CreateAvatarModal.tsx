"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface CreateAvatarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (name: string, image: File) => void;
}

const CreateAvatarModal = ({
  isOpen,
  onClose,
  onSubmit,
}: CreateAvatarModalProps) => {
  const [name, setName] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && selectedFile) {
      onSubmit(name, selectedFile);
      // Reset form
      setName("");
      setPreviewUrl(null);
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
      <div className='bg-white rounded-lg p-6 w-full max-w-md'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-bold text-gray-900'>
            Create New Avatar
          </h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700 transition-colors'
          >
            ✕
          </button>
        </div>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'
            >
              Avatar Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
              placeholder='Enter avatar name'
              required
            />
          </div>
          <div>
            <label
              htmlFor='image'
              className='block text-sm font-medium text-gray-700'
            >
              Upload Image
            </label>
            <input
              ref={fileInputRef}
              type='file'
              id='image'
              accept='image/*'
              onChange={handleFileChange}
              className='mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100'
              required
            />
          </div>
          {previewUrl && (
            <div className='relative h-48 w-full rounded-lg overflow-hidden'>
              <Image
                src={previewUrl}
                alt='Preview'
                fill
                className='object-cover'
              />
            </div>
          )}
          <div className='flex justify-end space-x-3'>
            <button
              type='button'
              onClick={onClose}
              className='px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors'
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAvatarModal;
