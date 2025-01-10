const PAST_JOBS: {
  href: string;
  logo: string;
  name: string;
  title: string;
  date: string;
}[] = [
  {
    href: 'https://useultrance.com',
    logo: 'ultrance.webp',
    name: 'Ultrance',
    title: 'Founder',
    date: '2024 - Present',
  },
  {
    href: 'https://joinslash.com',
    logo: '/slash.jpeg',
    name: 'Slash Financial',
    title: 'Full Stack Developer (Co-op)',
    date: 'Sept 2023 - Dec 2023',
  },
  {
    href: 'https://aws.amazon.com/blogs/compute/tag/aws-hyperplane/',
    logo: '/aws.png',
    name: 'AWS - Hyperplane Team',
    title: 'Software Engineer (Co-op)',
    date: 'Jan 2023 - Apr 2023',
  },
  {
    href: 'https://sobol.io/',
    logo: '/sobol.png',
    name: 'Sobol',
    title: 'Full Stack Platform Developer (Co-op)',
    date: 'May 2022 - Aug 2022',
  },
  {
    href: 'https://www.linkedin.com/company/we-are-black-hawk/about/',
    logo: '/blackhawk.jpeg',
    name: 'Black Hawk Digital',
    title: 'Frontend Developer (Co-op)',
    date: 'Sept 2021 - Dec 2021',
  },
  {
    href: 'https://www.scispot.com',
    logo: '/scispot.png',
    name: 'Scispot',
    title: 'Full Stack Developer (Co-op)',
    date: 'Jan 2021 - Apr 2021',
  },
  {
    href: 'https://www.uwaterloo.ca',
    logo: '/waterloo.webp',
    name: 'University of Waterloo',
    title: 'Bachelor of Computer Engineering',
    date: '2019 - 2024',
  },
];

export const Experience = () => {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-4'>Experience</h2>
      <div className='space-y-8'>
        {/* Slash Financial */}
        {PAST_JOBS.map((job) => (
          <a
            key={job.href}
            className='flex items-center justify-between group'
            href={job.href}
            target='_blank'
          >
            <div className='flex justify-between items-baseline mb-2'>
              <div className='flex items-center gap-3'>
                <img
                  src={job.logo}
                  alt={job.name}
                  className='w-10 h-10 rounded-lg border border-gray-200'
                />

                <div className='flex flex-col'>
                  <div className='flex items-center font-bold'>
                    <h3 className=''>{job.name}</h3>
                    <span className='inline-block transition-transform duration-200 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-[4px]'>
                      {'>'}
                    </span>
                  </div>
                  <p className='font-medium text-gray-500'>{job.title}</p>
                </div>
              </div>
            </div>
            <span className='text-gray-600'>{job.date}</span>
          </a>
        ))}
      </div>
    </section>
  );
};
