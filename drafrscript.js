// arr.forEach((el,index) => {
//     el.addEventListener('click', () => {
//         if(isActive === false) {
//             setActiveState(index)
//             isActive = true
//             // console.log(isActive)
//         }
//         else if(isActive === true && el.classList.contains('score')){
//             setActiveState(index)
//             for(i=0; i<5; i++) {
//                 if(i === index) {
//                     continue
//                 }
//                 resetToDefault(i)
//             }
//             // console.log(isActive)
//         } else if(isActive === true && el.classList.contains('score_active')){
//             resetToDefault(index)
//             isActive = false
//             // console.log(isActive)
//         }
//     })
// })

// arr[0].addEventListener('click', () => {
//     if(isActive === false) {
//         setActiveState(0)
//         isActive = true
//         // console.log(isActive)
//     }
//     else if(isActive === true && arr[0].classList.contains('score')){
//         setActiveState(0)
//         for(i=0; i<5; i++) {
//             if(i === 0) {
//                 continue
//             }
//             resetToDefault(i)
//         }
//         // console.log(isActive)
//     } else if(isActive === true && arr[0].classList.contains('score_active')){
//         resetToDefault(0)
//         isActive = false
//         // console.log(isActive)
//     }
// })

// arr[1].addEventListener('click', () => {
//     if(isActive === false) {
//         setActiveState(1)
//         isActive = true
//         // console.log(isActive)
//     }
//     else if(isActive === true && arr[1].classList.contains('score')){
//         setActiveState(1)
//         for(i=0; i<5; i++) {
//             if(i === 1) {
//                 continue
//             }
//             resetToDefault(i)
//         }
//         // console.log(isActive)
//     } else if(isActive === true && arr[1].classList.contains('score_active')){
//         resetToDefault(1)
//         isActive = false
//         // console.log(isActive)
//     }
// })

// arr[2].addEventListener('click', () => {
//     if(isActive === false) {
//         setActiveState(2)
//         isActive = true
//         // console.log(isActive)
//     }
//     else if(isActive === true && arr[2].classList.contains('score')){
//         setActiveState(2)
//         for(i=0; i<5; i++) {
//             if(i === 2) {
//                 continue
//             }
//             resetToDefault(i)
//         }
//         // console.log(isActive)
//     } else if(isActive === true && arr[2].classList.contains('score_active')){
//         resetToDefault(2)
//         isActive = false
//         // console.log(isActive)
//     }
// })

//можно ли решить не так емко? методом, циклом?
// arr[0].addEventListener('click', () => {
//     if(arr[0].classList.contains('score') && arr[1].classList.contains('score') && arr[2].classList.contains('score') && arr[3].classList.contains('score') && arr[4].classList.contains('score')) {
//         arr[0].classList.add('score_active')
//         arr[0].classList.remove('score')
//     }
//     else if(arr[1].classList.contains('score_active') || arr[2].classList.contains('score_active') || arr[3].classList.contains('score_active') || arr[4].classList.contains('score_active')){
//         arr[0].classList.add('score_active')
//         arr[0].classList.remove('score')
//         arr[1].classList.add('score')
//         arr[1].classList.remove('score_active')
//         arr[2].classList.add('score')
//         arr[2].classList.remove('score_active')
//         arr[3].classList.add('score')
//         arr[3].classList.remove('score_active')
//         arr[4].classList.add('score')
//         arr[4].classList.remove('score_active')
//     } else {
//         arr[0].classList.add('score')
//         arr[0].classList.remove('score_active')
//     }
// })
// arr[1].addEventListener('click', () => {
//     if(arr[0].classList.contains('score') && arr[1].classList.contains('score') && arr[2].classList.contains('score') && arr[3].classList.contains('score') && arr[4].classList.contains('score')) {
//         arr[1].classList.add('score_active')
//         arr[1].classList.remove('score')
//     }
//     else if(arr[0].classList.contains('score_active') || arr[2].classList.contains('score_active') || arr[3].classList.contains('score_active') || arr[4].classList.contains('score_active')){
//         arr[0].classList.add('score')
//         arr[0].classList.remove('score_active')
//         arr[1].classList.add('score_active')
//         arr[1].classList.remove('score')
//         arr[2].classList.add('score')
//         arr[2].classList.remove('score_active')
//         arr[3].classList.add('score')
//         arr[3].classList.remove('score_active')
//         arr[4].classList.add('score')
//         arr[4].classList.remove('score_active')
//     } else {
//         arr[1].classList.add('score')
//         arr[1].classList.remove('score_active')
//     }
// })
// arr[2].addEventListener('click', () => {
//     if(arr[0].classList.contains('score') && arr[1].classList.contains('score') && arr[2].classList.contains('score') && arr[3].classList.contains('score') && arr[4].classList.contains('score')) {
//         arr[2].classList.add('score_active')
//         arr[2].classList.remove('score')
//     }
//     else if(arr[0].classList.contains('score_active') || arr[1].classList.contains('score_active') || arr[2].classList.contains('score') || arr[3].classList.contains('score_active') || arr[4].classList.contains('score_active')){
//         arr[0].classList.add('score')
//         arr[0].classList.remove('score_active')
//         arr[1].classList.add('score')
//         arr[1].classList.remove('score_active')
//         arr[2].classList.add('score_active')
//         arr[2].classList.remove('score')
//         arr[3].classList.add('score')
//         arr[3].classList.remove('score_active')
//         arr[4].classList.add('score')
//         arr[4].classList.remove('score_active')
//     } else {
//         arr[2].classList.add('score')
//         arr[2].classList.remove('score_active')
//     }
// })
// arr[3].addEventListener('click', () => {
//     if(arr[0].classList.contains('score') && arr[1].classList.contains('score') && arr[2].classList.contains('score') && arr[3].classList.contains('score') && arr[4].classList.contains('score')) {
//         arr[3].classList.add('score_active')
//         arr[3].classList.remove('score')
//     }
//     else if(arr[0].classList.contains('score_active') || arr[1].classList.contains('score_active') || arr[2].classList.contains('score_active') || arr[3].classList.contains('score') || arr[4].classList.contains('score_active')){
//         arr[0].classList.add('score')
//         arr[0].classList.remove('score_active')
//         arr[1].classList.add('score')
//         arr[1].classList.remove('score_active')
//         arr[2].classList.add('score')
//         arr[2].classList.remove('score_active')
//         arr[3].classList.add('score_active')
//         arr[3].classList.remove('score')
//         arr[4].classList.add('score')
//         arr[4].classList.remove('score_active')
//     } else {
//         arr[3].classList.add('score')
//         arr[3].classList.remove('score_active')
//     }
// })
// arr[4].addEventListener('click', () => {
//     if(arr[0].classList.contains('score') && arr[1].classList.contains('score') && arr[2].classList.contains('score') && arr[3].classList.contains('score') && arr[4].classList.contains('score')) {
//         arr[4].classList.add('score_active')
//         arr[4].classList.remove('score')
//     }
//     else if(arr[0].classList.contains('score_active') || arr[1].classList.contains('score_active') || arr[2].classList.contains('score_active') || arr[3].classList.contains('score_active') || arr[4].classList.contains('score')){
//         arr[0].classList.add('score')
//         arr[0].classList.remove('score_active')
//         arr[1].classList.add('score')
//         arr[1].classList.remove('score_active')
//         arr[2].classList.add('score')
//         arr[2].classList.remove('score_active')
//         arr[3].classList.add('score')
//         arr[3].classList.remove('score_active')
//         arr[4].classList.add('score_active')
//         arr[4].classList.remove('score')
//     } else {
//         arr[4].classList.add('score')
//         arr[4].classList.remove('score_active')
//     }
// })