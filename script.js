//your JS code here. If required.
let arr = [1,2,3,4]
let div = document.querySelector("#output")
let prom = new Promise((res, rej) => {
	setTimeout(() => {
		let brr = arr.filter(item => item % 2 === 0)
		div.innerText = brr.join(" ")
	    res(brr)
	}, 1000)
})
prom
	.then(brr => {
	    setTimeout(() => {
	    	let crr = brr.map(item => item*2)
			div.innerText = crr.join(" ")
	    }, 3000)
     })

    