
// Shuffle Questions
export function shuffle(arr) {
    let current = arr.length,
      temp,
      random

    while (current > 0) {
      random = Math.floor(Math.random() * current)
      current--

      temp = arr[current]
      arr[current] = arr[random]
      arr[random] = temp
    }
    return arr
  }

// export const nextQuestion = () => {
//     setIndex((oldIndex) => {
//       const index = oldIndex + 1
//       if (index > questions.length - 1) {
//         openModal()
//         return 0
//       } else {
//         return index
//       }
//     })
//   }