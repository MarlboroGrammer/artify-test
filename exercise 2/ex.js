function getMaxSeqOfOnes (array) {
	let length = array.length, maxCountOfOne = 0, tail = 0, front = 0, maxIndex = 0
	let zeroPositions = [], tmpArray = array.slice(0)
	tmpArray.forEach((el) => {
		if (el === 0) {
			let i = tmpArray.indexOf(el)
			zeroPositions.push(i)
			tmpArray[i] = 1
		}
	})
	zeroPositions.forEach((i) => {
		array[i] = 1
		let count = 1
		switch (i) {
			case 0:
				tail = 0
				front = i + 1;
				while (front < length) {
					if (array[front] === 0)
						break
					if (array[front] === 1) {
						count++
						front++
					}
				}
				break
			case length - 1:
				tail = i - 1
				front = i
				while (tail > -1) {
					if (array[tail] === 0)
						break
					if (array[tail] === 1) {
						count++
						tail--
					}
				}
				break
			default:
				tail = i - 1
				front = i + 1
				while (front < length) {
					if (array[front] === 0)
						break
					if (array[front] === 1) {
						count++
					    front++
					}
				}
				while (tail > -1) {
					if (array[tail] === 0)
						break
					if (array[tail] === 1) {
						count++
						tail--
					}
				}
				break
		}
		if (count >= maxCountOfOne) {
			maxCountOfOne = count
			maxIndex = i
		}
		array[i] = 0
	})

	return maxIndex
}

console.log(getMaxSeqOfOnes([1,0,0,1]))
console.log(getMaxSeqOfOnes([1,0,0,0]))
console.log(getMaxSeqOfOnes([0,0,0,0]))
console.log(getMaxSeqOfOnes([0,1,0,1,0,1]))
console.log(getMaxSeqOfOnes([0,0,0,0,0,1]))
console.log(getMaxSeqOfOnes([0,0,0,0,1,1]))
console.log(getMaxSeqOfOnes([0,0,0,1,0,1]))
console.log(getMaxSeqOfOnes([1,1,0,1,1,0,1,1]))
console.log(getMaxSeqOfOnes([1,1,1,0,0,1,0,0,1,1]))
console.log(getMaxSeqOfOnes([1,1,1,0,1,1,0,1,1,1]))
console.log(getMaxSeqOfOnes([1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1]))

