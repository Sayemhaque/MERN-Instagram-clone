import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Story = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 10
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel responsive={responsive}  className='mt-12 p-2 '>
            <div className='w-'>
                <img className='rounded-lg w-[120px]  h-[200px] object-cover ring ring-red-400 ring-offset-4' src="https://i2.cinestaan.com/image-bank/1500-1500/188001-189000/188124.jpg" alt="" />
                <p className='mt-2 text-sm'>samadali</p>
                
            </div>
            <div className='w-'>
                <img className='rounded-lg w-[120px] h-[200px] object-cover ring ring-red-400 ring-offset-4' src="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <p className='mt-2 text-sm'>robinmia</p>
            </div>
            <div className='w-'>
                <img className='rounded-lg w-[120px] h-[200px] object-cover ring ring-red-400 ring-offset-4' src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                <p className='mt-2 text-sm'>ruturaj</p>
            </div>
            <div className='w-'>
                <img className='rounded-lg w-[120px] h-[200px] object-cover ring ring-red-400 ring-offset-4' src="https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg" alt="" />
                <p className='mt-2 text-sm'>jhonmilga</p>
            </div>
            <div className='w-'>
                <img className='rounded-lg w-[120px] h-[200px] object-cover ring ring-red-400 ring-offset-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0PeVpt9VSShzIlPUKCc1_cf4-rT8k79vqeDMs_WddRZuCF5gqpiXmjqrkvkHngQEF_-M&usqp=CAU" alt="" />
                <p className='mt-2 text-sm'>sayemia</p>
            </div>

        </Carousel>
    );
};

export default Story;