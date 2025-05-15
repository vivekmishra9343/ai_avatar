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

1. **Avatar Customization Suite**: Implement a comprehensive set of tools allowing users to modify avatar attributes like hairstyle, clothing, and accessories using AI. This would add significant value by enabling personalization and making the platform more engaging. Users could create unique avatars that better represent their identity or brand.

2. **Export & Integration System**: Develop functionality to export avatars in various formats (PNG, SVG, 3D models) and integrate with popular platforms like Discord, Slack, or social media. This would increase the tool's utility by making it practical for real-world use and expanding its reach across different platforms.

## Part 3: Challenge Faced

The main challenge I faced was implementing the avatar upload and preview functionality while maintaining a clean user experience. I solved this by:

1. Using the FileReader API to create image previews before upload
2. Implementing proper state management for the upload process
3. Adding loading states and error handling
4. Ensuring the UI remained responsive and user-friendly throughout the process

The solution involved careful consideration of the user experience, including proper feedback during the upload process and maintaining a consistent design language across all components.

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
