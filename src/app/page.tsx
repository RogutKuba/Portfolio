import { Experience } from '@/components/Experience';
import { MyLinks } from '@/components/MyLinks';
import { Projects } from '@/components/Projects';

export default function Home() {
  return (
    <div className='min-h-screen py-20 bg-white text-gray-800 font-[family-name:var(--font-geist-sans)]'>
      <main className='max-w-3xl mx-auto space-y-12'>
        {/* Hero Section */}
        <div>
          <h1 className='text-4xl font-bold mb-2'>Kuba Rogut</h1>
          <p className='text-lg text-gray-600'>
            Full stack software engineer. Trying to build cool stuff with cool
            people.
          </p>

          <div className='mt-4'>
            <MyLinks />
          </div>
        </div>

        {/* Work Experience Section */}
        <Experience />

        <Projects />

        {/* <Travel /> */}
      </main>
    </div>
  );
}
