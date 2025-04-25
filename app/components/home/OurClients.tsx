import SubTitle from '../common/SubTitle';
import {clients} from './data'
import Image from 'next/image';
const OurClients = () => {
  return ( 
    <section className='py-[140px] bg-light-gray'>
      <div className="container">
      <div className="relative mb-20">
          <SubTitle titleText="Our Clients" color='text-secondary' />
      </div>
        <div className="flex justify-between items-center ">
          {clients.slice(0, 6).map((client) => (
            <div key={client.id} className='flex justify-center items-center '>
              <Image src={client.logo} alt="" className='object-contain w-auto' height={40} width={30} />
            </div>
          ))}
        </div>
        <div className="flex justify-around items-center mt-15">
          {clients.slice(6, 11).map((client) => (
            <div key={client.id} className='flex justify-center items-center '>
              <Image src={client.logo} alt="" className='object-contain w-auto' height={30} width={30} />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-15">
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