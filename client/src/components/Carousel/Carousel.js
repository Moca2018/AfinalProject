import React from "react";
import Carousel from 'nuka-carousel';
import "./Carousel.css";

export default class extends React.Component {
  render() {

// image: {
//   flex: 1,
//   width: 50,
//   height: 50,z
//   resizeMode: 'contain' }


    return (
      <Carousel className="carousel" minHeight="100%">
        <img src="https://images.unsplash.com/photo-1478812954026-9c750f0e89fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96cc9609b49dbccd31188aef0c82cfb6&auto=format&fit=crop&w=1350&q=80"alt="Roommates near me" />
        <img src="https://images.unsplash.com/photo-1517840933437-c41356892b35?ixlib=rb-0.3.5&s=b4a012fb4a980c463736e88eed6ed952&auto=format&fit=crop&w=1350&q=80" />
        <img src="https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64a2622330a7ea8f0e1e73d32b8afa9d&auto=format&fit=crop&w=1350&q=80"alt="Best place to look for a roommate"/>
        <img src="https://images.unsplash.com/photo-1503532036150-0266dd2f0969?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=44be85f5e850bddfab70d51ee54694e5&auto=format&fit=crop&w=1350&q=80" />
        <img src="https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c391a28620658e1a99824868a8e00566&auto=format&fit=crop&w=1350&q=80"alt="Find a Rooommate" />
        <img src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-0.3.5&s=de76103bf709dec71c28a02137478117&auto=format&fit=crop&w=1350&q=80"alt="Looking for a Roommate" />
        <img src="https://images.unsplash.com/photo-1531573590734-a4fe083a5960?ixlib=rb-0.3.5&s=6057a09b8d628c9635f143f31851eda8&auto=format&fit=crop&w=1350&q=80"alt="Reliable roommates" />

      </Carousel>
    );
  }
}






// from: https://react.rocks/example/nuka-carouselhttps://react.rocks/example/nuka-carousel
// from: https://github.com/FormidableLabs/nuka-carousel
// images: https://unsplash.com/search/photos/college-friends


//     <img width={900} height={500} alt="900x500" src="data:image/jpeg;base64,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" />