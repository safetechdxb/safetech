import SubTitle from '../common/SubTitle';
import {clients} from './data'
import Image from 'next/image';
const OurClients = () => {
  return ( 
    <section className='my-[140px]'>
      <div className="container">
      <div className="relative">
          <SubTitle titleText="Our Clients" color='text-secondary' />
      </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1em] mt-[50px] ">
          {clients.slice(0, 6).map((client) => (
            <div key={client.id} className='flex justify-center items-center '>
              <Image src={client.logo} alt="" className='object-contain w-auto' height={40} width={30} />
            </div>
          ))}
        </div>
        <div className="flex justify-around items-center mt-[50px]">
          {clients.slice(6, 11).map((client) => (
            <div key={client.id} className='flex justify-center items-center '>
              <Image src={client.logo} alt="" className='object-contain w-auto' height={30} width={30} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[2em] mt-[50px] ">
          {clients.slice(11, 17).map((client) => (
            <div key={client.id} className='flex justify-center items-center '>
              <Image src={client.logo} alt="" className='object-contain w-auto' height={40} width={30} />
            </div>
          ))}
        </div>
      </div>
    </section>
   );
}
 
export default OurClients;