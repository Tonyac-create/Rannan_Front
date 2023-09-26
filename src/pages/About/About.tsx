'use client';
import React from 'react';
import { Accordion } from 'flowbite-react';

const About = () => {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>
          Qui somme nous
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut eleifend turpis. Cras molestie eros mi, semper finibus erat convallis vitae. Curabitur nec ante quis diam laoreet bibendum. Vivamus pretium et tortor vitae tincidunt. Curabitur ut maximus arcu. Cras pharetra rhoncus sem at euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris nisl turpis, commodo eget rutrum at, sagittis quis nisl. Nam tincidunt bibendum convallis. Nunc vulputate mauris a bibendum blandit. Nunc id varius lacus, vel dignissim massa. Integer nec aliquam felis. 
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          L'application
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut eleifend turpis. Cras molestie eros mi, semper finibus erat convallis vitae. Curabitur nec ante quis diam laoreet bibendum. Vivamus pretium et tortor vitae tincidunt. Curabitur ut maximus arcu. Cras pharetra rhoncus sem at euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris nisl turpis, commodo eget rutrum at, sagittis quis nisl. Nam tincidunt bibendum convallis. Nunc vulputate mauris a bibendum blandit. Nunc id varius lacus, vel dignissim massa. Integer nec aliquam felis. 
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          Remerciements
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut eleifend turpis. Cras molestie eros mi, semper finibus erat convallis vitae. Curabitur nec ante quis diam laoreet bibendum. Vivamus pretium et tortor vitae tincidunt. Curabitur ut maximus arcu. Cras pharetra rhoncus sem at euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris nisl turpis, commodo eget rutrum at, sagittis quis nisl. Nam tincidunt bibendum convallis. Nunc vulputate mauris a bibendum blandit. Nunc id varius lacus, vel dignissim massa. Integer nec aliquam felis. 
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  )
}

export default About