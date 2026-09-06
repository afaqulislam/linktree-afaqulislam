import Image from 'next/image'
import { FiGlobe } from 'react-icons/fi'
import {
  SiBehance,
  SiBluesky,
  SiBuymeacoffee,
  SiCodeforces,
  SiDevdotto,
  SiDiscord,
  SiDribbble,
  SiFacebook,
  SiGithub,
  SiGitlab,
  SiHashnode,
  SiInstagram,
  SiLeetcode,
  SiLinkedin,
  SiMedium,
  SiNpm,
  SiPinterest,
  SiProducthunt,
  SiReddit,
  SiSnapchat,
  SiTelegram,
  SiThreads,
  SiX
} from 'react-icons/si'

import PrimaryLinks from '@/components/primary-links'
import Spotlight from '@/components/spotlight'

const links = [
  {
    icon: <SiLinkedin className='text-zinc-300' />,
    title: 'AUI | LinkedIn',
    url: 'https://www.linkedin.com/in/afaqulislam'
  },
  {
    icon: <SiGithub className='text-zinc-300' />,
    title: 'AUI | GitHub',
    url: 'https://github.com/afaqulislam'
  },
  {
    icon: <SiX className='text-zinc-300' />,
    title: 'AUI | X (Twitter)',
    url: 'https://x.com/afaqulislam708'
  },
  {
    icon: <SiBuymeacoffee className='text-zinc-300' />,
    title: 'AUI | Buy Me A Coffee',
    url: 'https://buymeacoffee.com/afaqulislam'
  },
  {
    icon: <SiInstagram className='text-zinc-300' />,
    title: 'AUI | Instagram',
    url: 'https://www.instagram.com/afaqulislam707'
  },
  {
    icon: <SiBluesky className='text-zinc-300' />,
    title: 'AUI | Bluesky',
    url: 'https://bsky.app/profile/afaqulislam.bsky.social'
  },
  {
    icon: <SiFacebook className='text-zinc-300' />,
    title: 'AUI | Facebook',
    url: 'https://www.facebook.com/share/187g2ok8vB'
  },
  {
    icon: <SiTelegram className='text-zinc-300' />,
    title: 'AUI | Telegram',
    url: 'https://t.me/afaqulislam'
  },
  {
    icon: <SiDiscord className='text-zinc-300' />,
    title: 'AUI | Discord',
    url: 'https://discord.com/users/1213139995179618424'
  },
  {
    icon: <SiGitlab className='text-zinc-300' />,
    title: 'AUI | GitLab',
    url: 'https://gitlab.com/afaqulislam707'
  },
  {
    icon: <SiLeetcode className='text-zinc-300' />,
    title: 'AUI | LeetCode',
    url: 'https://leetcode.com/u/JpXin4PDxX'
  },
  {
    icon: <SiCodeforces className='text-zinc-300' />,
    title: 'AUI | Codeforces',
    url: 'https://codeforces.com/profile/afaqulislam'
  },
  {
    icon: <FiGlobe className='text-zinc-300' />,
    title: 'AUI | NeetCode',
    url: 'https://neetcode.io/user/KineticBatarang336'
  },
  {
    icon: <SiMedium className='text-zinc-300' />,
    title: 'AUI | Medium',
    url: 'https://medium.com/@afaqulislam'
  },
  {
    icon: <SiDevdotto className='text-zinc-300' />,
    title: 'AUI | DEV Community',
    url: 'https://dev.to/afaqulislam'
  },
  {
    icon: <SiHashnode className='text-zinc-300' />,
    title: 'AUI | Hashnode',
    url: 'https://hashnode.com/@afaqulislam'
  },
  {
    icon: <SiReddit className='text-zinc-300' />,
    title: 'AUI | Reddit',
    url: 'https://www.reddit.com/u/afaqulislam/s/TTIQFpGxnN'
  },
  {
    icon: <SiProducthunt className='text-zinc-300' />,
    title: 'AUI | Product Hunt',
    url: 'https://www.producthunt.com/@afaqulislam'
  },
  {
    icon: <SiThreads className='text-zinc-300' />,
    title: 'AUI | Threads',
    url: 'https://www.threads.com/@afaqulislam707'
  },
  {
    icon: <SiDribbble className='text-zinc-300' />,
    title: 'AUI | Dribbble',
    url: 'https://dribbble.com/afaqulislam'
  },
  {
    icon: <SiBehance className='text-zinc-300' />,
    title: 'AUI | Behance',
    url: 'https://www.behance.net/afaqulislam'
  },
  {
    icon: <SiNpm className='text-zinc-300' />,
    title: 'AUI | NPM',
    url: 'https://www.npmjs.com/~afaq-ul-islam'
  },
  {
    icon: <SiPinterest className='text-zinc-300' />,
    title: 'AUI | Pinterest',
    url: 'https://www.pinterest.com/afaqulislam707'
  },
  {
    icon: <SiSnapchat className='text-zinc-300' />,
    title: 'AUI | Snapchat',
    url: 'https://www.snapchat.com/add/afaqulislam707'
  }
]

const Page = () => {
  return (
    <>
      <div className='relative mx-auto flex flex-col items-center justify-center gap-4 pt-24 pb-10'>
        <Spotlight className='-top-4 left-56' />
        <Image src='/afaqulislam.png' width={90} height={90} alt='Afaq Ul Islam' className='rounded-full' priority />
        <h1 className='text-xl font-semibold'>Afaq Ul Islam</h1>
        <p className='text-[#a1a1a1]'>Full-Stack & AI Engineer | Co-Founder & COO, Neofyx</p>
      </div>
      <PrimaryLinks />
      <div className='flex flex-col gap-4 py-3'>
        {links.map((link) => {
          const { icon, title, url } = link

          return (
            <a
              key={url}
              href={url}
              className='relative flex h-14 w-full items-center justify-center rounded-xl border border-zinc-700 bg-[#151414] px-8 py-4 transition-colors duration-300 hover:border-zinc-500'
              target='_blank'
              rel='noopener, noreferrer'
            >
              <div className='absolute left-8'>{icon}</div>
              <div className='text-zinc-100'>{title}</div>
            </a>
          )
        })}
      </div>
    </>
  )
}

export default Page
