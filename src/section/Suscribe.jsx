import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@puma.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
        <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red ">Sign-up</button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;