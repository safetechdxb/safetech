import SubTitle from '../common/SubTitle';
import {clients} from './data'
import Image from 'next/image';
const OurClients = () => {
  return ( 
    <section className='py-140 bg-light-gray'>
      <div className="container">
      <div className="relative mb-10 lg:mb-20">
          <SubTitle titleText="Our Clients" color='text-secondary' />
      </div>
        <div className="flex justify-center lg:justify-between gap-6 flex-wrap items-center ">
          {clients.slice(0, 6).map((client) => (
            <div key={client.id} className='flex justify-center items-center '>
              <Image src={client.logo} alt="" className='object-contain w-30 h-10 lg:h-auto lg:w-auto' height={40} width={30} />
            </div>
          ))}
        </div>
        <div className="flex justify-center lg:justify-around gap-6 flex-wrap items-center mt-15">
          {clients.slice(6, 11).map((client) => (
            <div key={client.id} className='flex justify-center items-center '>
              <Image src={client.logo} alt="" className='object-contain w-30 h-10 lg:h-auto lg:w-auto' height={30} width={30} />
            </div>
          ))}
        </div>
        <div className="flex justify-center lg:justify-between gap-6 flex-wrap items-center mt-15">
          {clients.slice(11, 17).map((client) => (
            <div key={client.id} className='flex justify-center items-center '>
              <Image src={client.logo} alt="" className='object-contain w-30 h-10 lg:h-auto lg:w-auto' height={40} width={30} />
            </div>
          ))}
        </div>
      </div>
    </section>
   );
}
 
export default OurClients;