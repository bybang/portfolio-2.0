import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";

import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/50 scrollbar-thumb-[#F7AB0A]">
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      {/* Footer */}
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpCircleIcon className="h-10 w-10 2xl:h-20 2xl:w-20 filter grayscale hover:grayscale-0 cursor-pointer text-[#F7AB0A]" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

// Build on the server(wating in the server which is already rendered), and the user comes in, they will see the static page. This wouldn't be update(ISR - middleware), it will revalidate statically generated pages(doesn't matter on time) and rebuild the stack page and prepare it on the server again(cache it).

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate page
    // When request comes in, and at most once every 10 seconds
    revalidate: 10,
  };
};
