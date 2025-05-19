export const config = {
  title: "3D Web Developer",
  sections: ["home", "skills", "projects", "contact"],
  home: {
    title: "Ren Okazaki",
    subtitle: "Web Developer",
  },
  skills: [
    {
      name: "React",
      icon: "icons/react-native.png",
    },
    {
      name: "JavaScript",
      icon: "icons/javascript.png",
    },
    {
      name: "Three.js",
      icon: "icons/threejs.png",
    },
    {
      name: "Blender",
      icon: "icons/blender-3d.png",
    },
    {
      name: "French",
      icon: "icons/france.png",
    },
    {
      name: "English",
      icon: "icons/usa.png",
    },
    {
      name: "Japanese",
      icon: "icons/japan.png",
    },
  ],
  projects: [
    {
      name: "習慣応援SNS",
      image: "../textures/ActiveLink.PNG",
      link: "https://active-link-frontend.vercel.app",
      techIcons: [
        { name: "Next.js", icon: "/icons/Nextjs.png" },
        { name: "Hono.js", icon: "/icons/Honojs.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Tailwind CSS", icon: "/icons/Tailwindcss.png" },
        { name: "Prisma", icon: "/icons/Prisma.png" },
        { name: "Clerk", icon: "/icons/Clerk.png" },
        { name: "Bun",icon: "/icons/Bun.png"},
      ]
    },
    {
      name: "タスク管理アプリ",
      image: "../textures/TaskManagement.png",
      link: "https://task-management-application-sable.vercel.app/",
      techIcons: [
        { name: "Next.js", icon: "/icons/Nextjs.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Tailwind CSS", icon: "/icons/Tailwindcss.png" },
        { name: "Prisma", icon: "/icons/Prisma.png" },
        { name: "Clerk", icon: "/icons/Clerk.png" },
        { name: "npm", icon: "/icons/Npm.png" },

      ]
    },
    {
      name: "家計簿アプリ",
      image: "../textures/MoneyManagement.PNG",
      link: "https://moneymanagement-jade.vercel.app",
      techIcons: [
        { name: "Next.js", icon: "/icons/Nextjs.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Tailwind CSS", icon: "/icons/Tailwindcss.png" },
        { name: "Prisma", icon: "/icons/Prisma.png" },
        { name: "Clerk", icon: "/icons/Clerk.png" }, 
        { name: "npm", icon: "/icons/Npm.png" },
      ]
    },
    {
      name: "縦スクロールサイト",
      image: "../textures/VerticalScroll.PNG",
      link: "https://first-gsap-scrollapp.vercel.app",
      techIcons: [
        { name: "React", icon: "/icons/React.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Three.js", icon: "/icons/threejs.png" },
        { name: "GSAP", icon: "/icons/GSAP.png" }
      ]
    },
    {
      name: "ハンバーガー積み上げゲーム",
      image: "../textures/HamburgerStack.PNG",
      link: "https://tower-battle.vercel.app",
      techIcons: [
        { name: "React", icon: "/icons/React.png" },
        { name: "Three.js", icon: "/icons/threejs.png" },
        { name: "TypeScript", icon: "/icons/TypeScript.png" },
        { name: "Tailwind CSS", icon: "/icons/Tailwindcss.png" }
      ]
    },

  ],
  contact: {
    name: "Ren Okazaki",
    address: "Tokyo, Japan",
    socials: {
      github: "https://github.com/renokazaki",
      zenn: "https://zenn.dev/ren21",
    },
    mail: "ren84690@gmail.com",
  },
};
