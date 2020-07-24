import React, {Component, useState} from 'react';
import { Mutation, useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import Gallery from './gallery';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpeg';
import image8 from './images/image8.jpg';


import { UPLOADS_QUERY } from './dashboard/images';




const RockwaveImageGallery = (props) => {
   
        //state
      const  [images, setImages] = useState();
     
        // const onSelectImage = (index, image) => {
        //     var images = data.uploads.slice();
        //     var img = images[index];
        //     if(img.hasOwnProperty("isSelected"))
        //         img.isSelected = !img.isSelected;
        //     else
        //         img.isSelected = true;

        //     setImages(images);
        //     // this.setState({
        //     //     images: images
        //     // });
        // }

        // const makeGallery = (obj) => {
        //     const all = [];
        //     obj.forEach(datum => {
        //         all.push({ src: datum.picture, thumbnail: datum.thumbnail, thumbnailWidth: 250, thumbnailHeight: 150, caption: datum.description})
        //     });
           
        //     console.log(all);
        //     setImages([all]);
        // }

    const { loading, error, data } = useQuery(UPLOADS_QUERY);
    if(loading) { return <p><center>Loading....</center></p>}
    if(error){ console.log(error)}
    // {data && setImages([{
    //     src: data.uploads.picture,
    //     thumbnail: data.uploads.thumbnail,
    //     thumbnailWidth: 300,
    //     thumbnailHeight: 150,
    //     caption: data.uploads.description
    // }])}
    //console.log(images);
    // let all
    // {data && data.uploads.map(datum => {
    //     setImages({src: datum.picture, thumbnail: datum.thumbnail, thumbnailWidth: 300, thumbnailHeight: 150, caption: datum.description});
    // })}
    // const Images =  [
    //     {
    //         src: image2,
    //         thumbnail: image2,
    //         thumbnailWidth: 240,
    //         thumbnailHeight: 320,
    //         caption: "Sound configuration and installation of 4 ways, Hornteck sound system in Rhogic, (wuye Abuja."
    //     },
    //     {
    //         src: image1,
    //         thumbnail: image1,
    //         thumbnailWidth: 320,
    //         thumbnailHeight: 190,
    //         caption: "Breakdown maintenance been carried out on an (M32) amplifier with bad output buses"
    //     },
    //     {
    //         src: image3,
    //         thumbnail: image3,
    //         thumbnailWidth: 320,
    //         thumbnailHeight: 148,
    //         caption: "Maintenance of (QSC Monitors ) with breakowm pre_amps due to leakage of electricity."
    //     },
    //     {
    //         src: image5,
    //         thumbnail: image5,
    //         thumbnailWidth: 320,
    //         thumbnailHeight: 213,
    //         isSelected: true,
    //         caption: ""
    //     },
    //     {
    //         src: image4,
    //         thumbnail: image4,
    //         thumbnailWidth: 248,
    //         thumbnailHeight: 320,
    //         caption: "A Beam 230 light with paning and tilting problem been fixed."
    //     },
    //     {
    //         src: image8,
    //         thumbnail: image8,
    //         thumbnailWidth: 320,
    //         thumbnailHeight: 113,
    //         isSelected: true,
    //         caption: ""
    //     },
    //     {
    //         src: image6,
    //         thumbnail: image6,
    //         thumbnailWidth: 313,
    //         thumbnailHeight: 320,
    //         caption: "A Motif (FX8) with huming pre-amps been fixed."
    //     },
    //     {
    //         src: image7,
    //         thumbnail: image7,
    //         thumbnailWidth: 320,
    //         thumbnailHeight: 213,
    //         isSelected: true,
    //         caption: ""
    //     }
    // ]
   //setImages(data.uploads);
//    console.log(images); 
//    console.log(data); 
    //   const newArr = [...data.uploads];
    //   newArr.thumbnailWidth = 300;
    //   newArr.thumbnailHeight = 250;

    //   console.log(newArr); 
   return (
            <div className="container gallery" style={{
                display: "block",
                marginTop: "20px",
                minHeight: "1px",
                width: "100%",
                border: "1px solid #ddd",
                overflow: "auto"}}> 
            
                <Gallery             
                        images={data.uploads}
                        // onSelectImage={onSelectImage}
                        lightboxWidth={1536}
                />      
            
            </div>
    );
}

// RockwaveImageGallery.propTypes = {
//     images: PropTypes.arrayOf(
//         PropTypes.shape({
//             picture: PropTypes.string.isRequired,
//             thumbnail: PropTypes.string.isRequired,
//             pictureset: PropTypes.array,
//             description: PropTypes.string,
//             thumbnailWidth: PropTypes.number.isRequired,
//             thumbnailHeight: PropTypes.number.isRequired,
//             isSelected: PropTypes.bool
//         })
//     ).isRequired
// };

// // RockwaveImageGallery.defaultProps = {
// //     images: [
// //         {
// //             src: image2,
// //             thumbnail: image2,
// //             thumbnailWidth: 240,
// //             thumbnailHeight: 320,
// //             caption: "Sound configuration and installation of 4 ways, Hornteck sound system in Rhogic, (wuye Abuja."
// //         },
// //         {
// //             src: image1,
// //             thumbnail: image1,
// //             thumbnailWidth: 320,
// //             thumbnailHeight: 190,
// //             caption: "Breakdown maintenance been carried out on an (M32) amplifier with bad output buses"
// //         },
// //         {
// //             src: image3,
// //             thumbnail: image3,
// //             thumbnailWidth: 320,
// //             thumbnailHeight: 148,
// //             caption: "Maintenance of (QSC Monitors ) with breakowm pre_amps due to leakage of electricity."
// //         },
// //         {
// //             src: image5,
// //             thumbnail: image5,
// //             thumbnailWidth: 320,
// //             thumbnailHeight: 213,
// //             isSelected: true,
// //             caption: ""
// //         },
// //         {
// //             src: image4,
// //             thumbnail: image4,
// //             thumbnailWidth: 248,
// //             thumbnailHeight: 320,
// //             caption: "A Beam 230 light with paning and tilting problem been fixed."
// //         },
// //         {
// //             src: image8,
// //             thumbnail: image8,
// //             thumbnailWidth: 320,
// //             thumbnailHeight: 113,
// //             isSelected: true,
// //             caption: ""
// //         },
// //         {
// //             src: image6,
// //             thumbnail: image6,
// //             thumbnailWidth: 313,
// //             thumbnailHeight: 320,
// //             caption: "A Motif (FX8) with huming pre-amps been fixed."
// //         },
// //         {
// //             src: image7,
// //             thumbnail: image7,
// //             thumbnailWidth: 320,
// //             thumbnailHeight: 213,
// //             isSelected: true,
// //             caption: ""
// //         }
// //     ]
// };

export default RockwaveImageGallery;