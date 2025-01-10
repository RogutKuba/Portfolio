const PROJECTS = [
  {
    href: 'https://x.com/rogutkuba/status/1870138291565277229',
    title: 'Wallstreet Wrapped',
    description: 'Spotify wrapped for your stock trades',
  },
  {
    href: 'https://sfxengine.com/',
    title: 'SFX Engine',
    description: 'Create sound effects using AI. 2000+ users, $100 MRR',
  },
  {
    href: 'https://x.com/rogutkuba/status/1861210937149055350',
    title: 'AI App Tour Guide',
    description:
      'Built a browser agent that replaces customer support by guiding users through an app. Built for Meta Llama hackathon',
  },
  {
    href: 'https://x.com/rogutkuba/status/1841540900666712526',
    title: 'Drake vs Kendrick Choose Your Own Adventure Game',
    description:
      'AI-powered choose-your-own-adventure game where livestream chat shapes the story by choosing the options, with AI powered art that reacts to the choices. Built for New Builds hackathon',
  },
  {
    href: 'https://www.promptordle.com',
    title: 'Promptordle',
    description: 'A wordle clone that gives riddles as clues to guess the word',
  },
  {
    href: null,
    title: 'NFT Reveal Sniper Tool',
    description:
      'Built a tool to help users snipe NFTs on reveal day. Generated over $30k in revenue',
  },
];

export const Projects = () => {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-4'>Projects</h2>
      <div className='space-y-8'>
        {PROJECTS.map((project) => {
          const ProjectContent = (
            <div className='flex items-center justify-between group'>
              <div className='flex flex-col'>
                <h3 className='font-bold'>
                  {project.title}
                  {project.href && (
                    <span className='inline-block transition-transform duration-200 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-[4px]'>
                      {'>'}
                    </span>
                  )}
                </h3>
                <p className='font-medium text-gray-500'>
                  {project.description}
                </p>
              </div>
            </div>
          );

          return project.href ? (
            <a
              key={project.title}
              href={project.href}
              target='_blank'
              rel='noopener noreferrer'
              className='block text-inherit hover:no-underline'
            >
              {ProjectContent}
            </a>
          ) : (
            <div key={project.title}>{ProjectContent}</div>
          );
        })}
      </div>
    </section>
  );
};
