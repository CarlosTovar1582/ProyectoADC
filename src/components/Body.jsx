import React from 'react'
import ReactPlayer from 'react-player'



import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Empresa 1',
    id: '1',
    href: '#',
    priceMonthly: '$49',
    description: 'Automatización de Lavadora industrial con PLC delixi y hmi delixi para lavado de jeans',
    source:'videos/video11.mp4',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
  },
  {
    name: 'Team',
    id: '2',
    href: '#',
    priceMonthly: '$79',
    description: 'Automatización de máquina de zumos de llenado y empaque de producción con PLC delixi y hmi delixi.',
    source:'videos/videoZumo.mp4',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
  }, 
]

export default function Body() {
  return (
    <div className='bg-slate-900 rounded-3xl'>
        <div className="isolate overflow-hidden bg-gray-900 rounded-3xl">
          <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8  ">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-base font-semibold leading-7 text-indigo-400"></h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-cabecera">
                Trabajos realizados con nuestros productos.
              </p>
            </div>
            <div className="relative mt-6">
              {/*<p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus
                molestiae voluptatum.
              </p>*/}
              <svg
                viewBox="0 0 1208 1024"
                className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
              >
                <ellipse cx={604} cy={512} fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx={604} ry={512} />
                <defs>
                  <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flow-root bg-white pb-24 sm:pb-32">
            <div className="-mt-80">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 ">
                  {tiers.map((tier) => (
                    <div
                      key={tier.id}
                      className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 "
                    >                    
                      <div>
                          <p className="mt-6 text-base leading-7 text-gray-600 font-cabecera">{tier.description}</p>  
                        <br />          
                      </div>
                      <div className='mx-auto bg-black h-72 w-72 items-center justify-center rounded-3xl'> 
                        <ReactPlayer
                        //url={`../videos/${tier.source}'`}  
                        url={tier.source}                                             
                        width='100%'
                        height='100%'
                        controls
                        playing
                        muted 
                        />
                      </div>
                    </div>
                  ))}
              
                </div>
              </div>
            </div>
          </div>
        </div>       
    </div>
  )
}
