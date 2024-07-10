import React from 'react'
import Galleryy from './Galleryy';

function Gallery() {
  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
    <div class="space-y-2">
      <img class="w-full h-auto object-cover" src="https://www.holidify.com/blog/wp-content/uploads/2014/06/Sanchi-Stupa1.jpg" alt="Image Description"/>
      <img class="w-full h-auto object-cover" src="https://img.jagranjosh.com/images/2022/April/1842022/world_heritage.jpg" alt="Image Description"/>
      <img class="w-full h-auto object-cover" src="https://mediaim.expedia.com/destination/1/2d75301e5fa5840846672492693f1fb3.jpg" alt="Image Description"/>
    </div>
    <div class="space-y-2">
      <img class="w-full h-auto object-cover" src="https://www.fabhotels.com/blog/wp-content/uploads/2018/07/Taj-Mahal.jpg" alt="Image Description"/>
      <img class="w-full h-auto object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Victoria_Memorial_situated_in_Kolkata.jpg/1200px-Victoria_Memorial_situated_in_Kolkata.jpg" alt="Image Description"/>
    </div>
    <div class="space-y-2">
      <img class="w-full h-auto object-cover" src="https://images.tv9hindi.com/wp-content/uploads/2024/01/ram-mandiray.webp" alt="Image Description"/>
      <img class="w-full h-auto object-cover" src="https://dailymela.com/wp-content/uploads/2024/02/Statue-of-Unity.jpg" alt="Image Description"/>
      <img class="w-full h-auto object-cover" src="https://static.toiimg.com/thumb/msid-100641609,width-1280,height-720,resizemode-4/100641609.jpg" alt="Image Description"/>
    </div>
    <div class="space-y-2">
      <img class="w-full h-auto object-cover" src="https://www.bontravelindia.com/wp-content/uploads/2021/09/Kedarnath-Mandir.jpg" alt="Image Description"/>
      <img class="w-full h-auto object-cover" src="https://5.imimg.com/data5/YX/EC/GLADMIN-48521475/howrah-bridge-tour-service.jpg" alt="Image Description"/>
      
    </div>
  </div>
</div>
<Galleryy />
    </div>
 
  );
}

export default Gallery
