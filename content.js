console.log("removing free tier limits")

const body = document.body

if (body.classList.contains('has-modal-active')) {
	body.classList.remove('has-modal-active')
}

if (body.style.overflow === 'hidden') {
	body.style.overflow = 'auto'
}

const modalSelectors = ['#dropdown-portal', '#modal-portal', '.modal_backdrop', "#Popup"]

for (const selector of modalSelectors) {
	const modal = document.querySelector(selector)

	if (modal) {
		modal.remove()
	}
}
