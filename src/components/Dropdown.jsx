import { Accordion } from 'flowbite-react'
import React, { useState } from 'react'
import TextGradient from './TextGradient'

const Dropdown = () => {

  return (
    <div className='p-2'>
    <div className='flex gap-2 flex-col-reverse lg:flex-row'>
        <div className='lg:w-1/2'>
        <Accordion>
      <Accordion.Panel>
        <Accordion.Title>
            <div className='text-xl font-bold'>
            <TextGradient text='Accurate Demand Forecasting' />
            </div>
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        <div className='text-xl font-bold'>
            <TextGradient text='HELIX: Workflow Automation' />
            </div>
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a bird's eye view of your supply chain, and help you do things a spreadsheet never can.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        <div className='text-xl font-bold'>
            <TextGradient text='Automated Purchase Planning' />
            </div>
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What's more, Crest improves with every planning cycle as the data set gets richer.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>
        <div className='text-xl font-bold'>
            <TextGradient text='Automated Distribution Planning' />
            </div>
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>

      <Accordion.Panel>
        <Accordion.Title>
        <div className='text-xl font-bold'>
            <TextGradient text='Easy Integration' />
            </div>
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          From all online store solutions to cloud ERPs, Crest integrates seamlessly with your current tech and ops stack. What's more? Connecting them to Crest will give you actionable insights.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        <div className='text-xl font-bold'>
            <TextGradient text='Custom Dashboards' />
            </div>
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.
          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </div>
    <div className='Acc-image p-2'>
        <img className='m-2 mx-auto' src='./Problem_section.webp'></img>
    </div>
    </div>
    </div>
  )
}

export default Dropdown