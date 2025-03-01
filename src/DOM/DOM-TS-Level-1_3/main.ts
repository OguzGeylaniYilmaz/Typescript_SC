

const gallery = document.getElementById('gallery') as HTMLElement;

if(!gallery)
{
   alert('Gallery section not found!');
}

const images = [
    { src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg', alt: 'Image 1', caption: 'Beschreibung für Bild 1' },
    { src: 'https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=', alt: 'Image 2', caption: 'Beschreibung für Bild 2' },
    { src: 'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=', alt: 'Image 3', caption: 'Beschreibung für Bild 3' },
  ];

  images.forEach((image)=>{
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.style.width = "700px";
    img.style.height = "500px";

    const figureCaption = document.createElement('figcaption');
    figureCaption.textContent = image.caption;

    figure.appendChild(img);
    figure.appendChild(figureCaption);

    gallery.appendChild(figure);

  })

