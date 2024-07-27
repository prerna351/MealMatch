


export const DetailsButtons = ({label, onClick}) => {
    
  return (
    <div>
       
      <button onClick={onClick} type="button" className= "mt-5 w-full max-w-screen-sm  md:max-w-96 flex justify-between text-gray-900 bg-white border md:border-white border-gray-300 focus:outline-none   font-medium rounded-lg text-sm px-5  py-4 md:py-1 me-2 mb-2">
       
       <div className='flex group'> 
       <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="group-hover:text-gray-900 size-5 mr-1 text-gray-500 ">
          <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
        </svg>

        </span>
        <span className="text-sm font-semibold text-gray-500 group-hover:text-gray-900  ">{label}</span>
       </div>
         <div className='block md:hidden'>
         <svg className="ml-2 w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m0 0l-7-7m7 7l-7 7"></path>
          </svg>
         </div>

      </button>
      
    </div>
  );
}

