// import checkCollision from '../helpers/collisionHelper';

// export function generatePlacements(numItems) {
//   const placements = [];

//   function generatePlacement() {
//     const minTop = 0; // Minimum top position
//     const maxTop = 100; // Maximum top position
//     const minLeft = 0; // Minimum left position
//     const maxLeft = 100; // Maximum left position
//     const width = 20; // Width of the element
//     const height = 20; // Height of the element
    
//     const top = Math.random() * (maxTop - minTop) + minTop;
//     const left = Math.random() * (maxLeft - minLeft) + minLeft;
    
//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         width: `${width}px`,
//         height: `${height}px`,
//     };
// }

// for (let i = 0; i < numItems; i++) {
//     let placement;
//     let collision;

//     do {
//         placement = generatePlacement();
//         collision = placements.some(existingPlacement =>
//             checkCollision(existingPlacement, placement)
//         );
//     } while (collision);
        
//         placements.push(placement);
//     }
    
//     return placements;
// }
