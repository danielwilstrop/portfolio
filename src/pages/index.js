import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import Skills from '../sections/skills'
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Contact from '../sections/contact';
import Projects from '../sections/projects';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="NextJS Landing Page" />
          <Banner />
          <KeyFeature />          
          <CoreFeature />
          <WorkFlow />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
    </ThemeProvider>
  );
}
