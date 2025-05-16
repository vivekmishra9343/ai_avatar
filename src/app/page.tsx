"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import AvatarCard from "@/components/AvatarCard";
import CreateAvatarModal from "@/components/CreateAvatarModal";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface CustomAvatar {
  id: string;
  name: string;
  imageUrl: string;
}

//type Avatar = User | CustomAvatar;

const dummyAvatars: CustomAvatar[] = [
  {
    id: "dummy-1",
    name: "Cyber Ninja",
    imageUrl: "https://i.pravatar.cc/300?img=1",
  },
  {
    id: "dummy-2",
    name: "Digital Artist",
    imageUrl: "https://i.pravatar.cc/300?img=2",
  },
  {
    id: "dummy-3",
    name: "Tech Explorer",
    imageUrl: "https://i.pravatar.cc/300?img=3",
  },
];

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [customAvatars, setCustomAvatars] = useState<CustomAvatar[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setCustomAvatars(dummyAvatars);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://reqres.in/api/users?page=1&per_page=3"
        );
        const data = await response.json();
        setUsers(data.data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [mounted]);

  const handleCreateAvatar = (name: string, image: File) => {
    const newAvatar: CustomAvatar = {
      id: `custom-${mounted ? Date.now() : 0}`,
      name,
      imageUrl: URL.createObjectURL(image),
    };
    setCustomAvatars((prev) => [...prev, newAvatar]);
  };

  const handleEditAvatar = (id: string) => {
    // In a real app, this would open an edit modal
    console.log("Edit avatar:", id);
  };

  const filteredAvatars = [...users, ...customAvatars].filter((avatar) =>
    "first_name" in avatar
      ? `${avatar.first_name} ${avatar.last_name}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      : avatar.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!mounted) {
    return (
      <main className='min-h-screen bg-gray-50'>
        <Header />
        <div className='max-w-7xl mx-auto px-4 md:px-8 py-8'>
          <div className='flex justify-center items-center min-h-[200px]'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='min-h-screen bg-gray-50'>
      <Header />

      <div className='max-w-7xl mx-auto px-4 md:px-8 py-8'>
        <div className='mb-6'>
          <input
            type='text'
            placeholder='Search avatars...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full md:w-96 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          />
        </div>

        {isLoading ? (
          <div className='flex justify-center items-center min-h-[200px]'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredAvatars.map((avatar) => (
              <AvatarCard
                key={"first_name" in avatar ? avatar.id : avatar.id}
                name={
                  "first_name" in avatar
                    ? `${avatar.first_name} ${avatar.last_name}`
                    : avatar.name
                }
                imageUrl={
                  "first_name" in avatar ? avatar.avatar : avatar.imageUrl
                }
                onEdit={() =>
                  handleEditAvatar(
                    "first_name" in avatar ? avatar.id.toString() : avatar.id
                  )
                }
              />
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className='fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-110 duration-200'
      >
        <span className='text-2xl'>+</span>
      </button>

      <CreateAvatarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateAvatar}
      />
    </main>
  );
}
