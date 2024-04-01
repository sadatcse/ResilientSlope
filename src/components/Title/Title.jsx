import React from 'react';

const Title = ({ title }) => {
    return (
        <div class="grid grid-cols-6 gap-4">
  <div class="col-start-2 col-span-4 bg-custom-gray">
    <h1 className='text-center text-3xl text-white p-5 font-title'>{title}</h1>
  </div>
</div>
    );
};

export default Title;