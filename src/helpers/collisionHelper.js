// export default function checkCollision(placement1, placement2) {
//     const [y1, x1, spanY1, spanX1] = placement1.split(' / ').map(Number);
//     const [y2, x2, spanY2, spanX2] = placement2.split(' / ').map(Number);
  
//     const left1 = x1;
//     const right1 = x1 + spanX1 - 1;
//     const top1 = y1;
//     const bottom1 = y1 + spanY1 - 1;
  
//     const left2 = x2;
//     const right2 = x2 + spanX2 - 1;
//     const top2 = y2;
//     const bottom2 = y2 + spanY2 - 1;
  
//     if (left1 > right2 || right1 < left2 || top1 > bottom2 || bottom1 < top2) {
//       // No overlap
//       return false;
//     }
  
//     // Overlap detected
//     return true;
//   }
  
//   export function generatePlacements(numItems) {
//     const placements = [];
  
//     function generatePlacement() {
//       const row = Math.floor(placements.length / 2) + 1;
//       const col = (placements.length % 2) + 1;
//       return `${row} / ${col} / span 1 / span 1`;
//     }
  
//     for (let i = 0; i < numItems; i++) {
//       let placement;
//       let collision;
  
//       do {
//         placement = generatePlacement();
//         collision = placements.some((existingPlacement) =>
//           checkCollision(existingPlacement, placement)
//         );
//       } while (collision);
  
//       placements.push(placement);
//     }
  
//     return placements;
//   }
  