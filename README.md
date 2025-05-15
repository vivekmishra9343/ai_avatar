# AI Dashboard

A modern, responsive AI avatar management dashboard built with Next.js and Tailwind CSS.

## Features

- Welcome header with user greeting
- Display of avatar cards with names and images
- Create new avatar functionality with image upload
- Search functionality for avatars
- Responsive design for all screen sizes
- Loading states and error handling
- Image preview in upload modal
- Smooth transitions and hover effects

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Part 2: Feature Prioritization

If this was a real SaaS tool, I would prioritize these two features:

1. **AI-Powered Avatar Creation from a Photo**: With this feature, users could upload a photo of themselves and have a customized 3D avatar created for them automatically. It streamlines, engages, and personalizes the experience while eliminating the hassle of manual customization. A wide range of people would find this type of automation appealing, particularly those seeking fast and precise virtual representations of themselves or their brand.

2. **Export Avatars as GIFs or Videos**: While exporting avatars as static images or 3D models is useful, enabling users to export animated versions adds a dynamic element that greatly increases the utility and shareability of avatars. This would make the tool especially valuable for creators, streamers, marketers, and everyday users who want to showcase their avatars across platforms like Instagram, TikTok, or messaging apps. Together, these two features would significantly boost the platform’s appeal and real-world usability.

## Part 3: Challenge Faced

Implementing the avatar upload and preview features while preserving a pristine user experience was my biggest obstacle. I resolved this by:

1. Creating image previews prior to upload using the FileReader API
2. Putting in place appropriate state management for the upload procedure
3. Including error handling and loading states
4. Making sure the user interface stayed responsive and intuitive during the procedure

The user experience was carefully considered in the solution, which included keeping a consistent design language throughout all components and providing appropriate feedback during the upload process.

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- React Hooks
- FileReader API
- Reqres API for dummy data

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
