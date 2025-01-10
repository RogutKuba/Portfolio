const CONTACT_LINKS: {
  href: string;
  icon: string;
}[] = [
  {
    href: 'https://x.com/rogutkuba',
    icon: 'x.svg',
  },
  {
    href: 'https://github.com/rogutkuba',
    icon: 'github.svg',
  },
  {
    href: 'https://www.linkedin.com/in/kuba-rogut/',
    icon: 'linkedin.svg',
  },
  {
    href: 'mailto:rogutkuba@gmail.com',
    icon: 'mail.svg',
  },
];

export const MyLinks = () => {
  return (
    <div className='flex gap-4'>
      {CONTACT_LINKS.map((link) => (
        <a key={link.href} href={link.href} target='_blank'>
          <img src={link.icon} alt={link.icon} className='w-6 h-6' />
        </a>
      ))}
    </div>
  );
};
