import React from 'react'

const Navbar = () => {
  return (
<div className="mt-4">
    <div className=' flex text-gray-600 text-2xl bg-gray-900 ml-96 w-96 h-7 rounded-full pl-4'>
       <input  className="bg-gray-900 border-gray-900 " type="text" placeholder='   Search'></input>
       <span className='flex justify-end pt-1 bg-gray-400 rounded-md h-7 ml-11'><svg class="searchicon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"/></svg></span>
      
    </div>
    <div className="flex space-x-4 ml-5 mt-3">
        <div className='bg-black h-8 justify-center pb-1 pt-1 pl-3 mt-5 w-12 rounded-lg text-white'>
         All
       </div>
        <div className='bg-black h-8 justify-center pb-1 pt-1 pl-4 mt-5 w-16 rounded-lg text-white'>
         Music
        </div>
        <div className='bg-black h-8 justify-center pb-1 pt-1 pl-4 mt-5 w-16 rounded-lg text-white'>
         Live
      </div>
      <div className='bg-black h-8 justify-center pb-1 pt-1 pl-1 mt-5 w-30 rounded-lg text-white'>
         Bollywood Music
      </div>
      <div className='bg-black h-8 justify-center pb-1 pt-1 pl-2 mt-5 w-20 rounded-lg text-white'>
         Dramedy
      </div>
      <div className='bg-black h-8 justify-center pb-1 pt-1 pl-2 mt-5 w-30 rounded-lg text-white'>
         Action Thrillers
      </div>
      <div className='bg-black h-8 justify-center pb-1 pt-1 pl-2 mt-5 w-30 rounded-lg text-white'>
         Tamil Cinema
      </div>
      <div className='bg-black h-8 justify-center pb-1 pt-1 pl-3 mt-5 w-14 rounded-lg text-white'>
         News
      </div>
      <div className='bg-black h-8 justify-center pb-1 pt-1 pl-2 mt-5 w-16 rounded-lg text-white'>
         Cricket
      </div>
      <div className='bg-black h-8 justify-center pb-1 pt-1 pl-2 mt-5 w-30 rounded-lg text-white'>
         Game Shows
      </div>
      <div className='bg-black h-8 justify-center pb-1 pt-1 pl-2 mt-5 w-30 rounded-lg text-white'>
         Bhajan Music
      </div>
      <div className='bg-black h-8 justify-center pb-1 pt-1 pl-2 mt-5 w-24 rounded-lg text-white'>
         Astronomy
      </div>
      <div className='bg-black h-8 justify-center pb-1 pt-1 pl-2 mt-5 w-30 rounded-lg text-white'>
         Cooking Shows 
      </div>

    </div>



<div className='flex'>
     <div className=' flex'>
    <button className=" h-64 w-1/2 mt-5 ml-60 justify-center"><img className="h-64 rounded-lg" src="image1.jpg" ></img> </button>



       <div className='mt-5'>
       <div className='flex' >
       <button className="flex">
            <img className="rounded-2xl m-1 h-24" src="imagee.jpg"></img>
        </button>
        </div>
        
    <div className="flex  ml-10 mt-5">
    <button className='flex'>
        <svg className="bg-white rounded-full p-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 50 50">
         <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
          </svg>
          <div className="text-white font-bold ms-5 text-xs">
            <span className="pb-2">iPhone 15 Pro with titanium</span><br></br>
            <div className="pt-2"><span className="font-extrabold">Ad </span>
            <span>. Apple India</span></div><br></br>
            <button className="rounded-full bg-blue-500 pt-2 pb-2 pl-4 pr-4">Learn more</button>
         </div>
         </button>
         </div>



       </div>
     </div>
    </div>
    </div>
  )
}

export default Navbar