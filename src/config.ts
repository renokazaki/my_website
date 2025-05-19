export const config = {
  title: "3D Web Developer",
  sections: ["home",  "projects","profile", "contact"],
  home: {
    title: "Ren Okazaki",
  },

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
        { name: "Shadcn/ui", icon: "/icons/Shadcn.png" },
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
        { name: "Shadcn/ui", icon: "/icons/Shadcn.png" },
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
        { name: "Shadcn/ui", icon: "/icons/Shadcn.png" },
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
        { name: "GSAP", icon: "/icons/GSAP.png" },
        { name: "npm", icon: "/icons/Npm.png" },
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
        { name: "Tailwind CSS", icon: "/icons/Tailwindcss.png" },
        { name: "npm", icon: "/icons/Npm.png" },
      ]
    },
  ],
  
    // 自己紹介セクションの構造
    about: {
      profile: {
        title: "プロフィール",
        icon: "/icons/profile.png",
        content: "名前：岡崎 蓮\n西暦：1999年8月21日 25歳\n"
      },
      education: {
        title: "学歴・職歴",
        icon: "/icons/education.png",
        content: "2023年 駒澤大学 卒業\n2023-現在 株式会社ウィズ・ワン エンジニア"
      },
      skills: {
        title: "保有資格",
        icon: "/icons/skills.png",
        content: "・TOEIC スコア830点\n・基本情報技術者試験\n・ServiceNow CSA\n・ServiceNow CAD\n・ServiceNow ITSM\n・秘書技能検定準1級",
      },
      personality: {
        title: "性格",
        icon: "/icons/values.png",
        content: "・前向き\n・向上心\n・大食い"
      },
      hobbies: {
        title: "趣味",
        icon: "/icons/hobbies.png",
        content: "・運動\n・映画鑑賞\n・旅行\n"
      },
    },
  
  contact: {
    name: "Ren Okazaki",
    address: "Tokyo, Japan",
    socials: {
      github: "https://github.com/renokazaki",
      zenn: "https://zenn.dev/ren21",
    },
    mail: "ren84690@gmail.com",
  }
}

