import bretandadam from '../images/bretandadam.jpg'
import bret from '../images/bret.jpg'


export function About() {
  return (
    <div className="overflow-hidden bg-white" id='about'>
    <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="absolute bottom-0 left-3/4 top-0 hidden w-screen bg-gray-50 lg:block" />
      <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
        <div>
          <h2 className="text-lg font-semibold text-lime-900">J&L Group</h2>
          <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">Adam and Bret</h3>
        </div>
      </div>
      <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="relative lg:col-start-2 lg:row-start-1">
          <svg
            className="absolute right-0 top-0 -mr-20 -mt-20 hidden lg:block"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
            <figure>
              <div className="aspect-h-7 aspect-w-12 lg:aspect-none">
                <img
                  className="rounded-lg object-cover object-center shadow-lg"
                  src={bretandadam}
                  alt="bret and adam"
                  width={1184}
                  height={1376}
                />
                
              </div>
              <figcaption className="mt-3 flex text-sm text-gray-500">
                  
                  <span className="ml-2">Adam Levanger</span>
                </figcaption>
              <div className="aspect-h-7 aspect-w-12 lg:aspect-none mt-2">
                <img
                  className="rounded-lg object-cover object-center shadow-lg"
                  src={bret}
                  alt="bret and adam"
                  width={1184}
                  height={1376}
                />
                
              </div>
              <figcaption className="mt-3 flex text-sm text-gray-500">
             
                  <span className="ml-2">Bret Johnson</span>
                </figcaption>
            </figure>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="mx-auto max-w-prose text-base lg:max-w-none">
            <p className="text-lg text-gray-500">
              J&L Group is a small business that specializes in software development and training. We are a veteran owned company that is dedicated to providing the best possible products and services to our customers.
            </p>
          </div>
          <div className="prose prose-indigo mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none text-xl">
            <p className='text-lime-800'>
              The J stands for Johnson and the L stands for Levanger. Bret and Adam met in 2004 where they began working together on small projects, mostly home renovations and restorations. They quickly realized that they worked well together and decided to start a business. They began working on small software projects and eventually moved into the training realm. They have been working together ever since.
            </p>
            <p className='mt-12 text-lg'>
              Adam is a business leader with a wide array of experience and skills, including management, marketing, operations, and strategy. He has a specific interest in new ventures and have been fortunate to found and successfully exit multiple start-ups. He has a passion for family and fostering the success of his wife and children. Professionally, his passion to is create something of value where nothing existed before. He believe&apos;s in continual learning, as education should be an ongoing process throughout life.
            </p>
            <p className='mt-12 text-lg'>
              Bret is both a Marine and Army veteran with 12 years of service. He is a full-stack Developer, content creator, and experienced business owner. With over 14 years’ experience in software and web development he is a true professional highly skilled in data analysis, programming languages, and front end development. He has built and designed multiple architectures for different companies and has a passion for creating new and innovative products.
            </p>
            <p className='mt-12 text-lg'>
              Both Bret and Adam have a passion to create software and products designed to empower people, not replace them. They believe that technology should be used to enhance the human experience, not replace it. They are dedicated to creating products that are easy to use and intuitive.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
