/* JS Libraries */
"use strict";
console.log('----------')
console.log('SCRIPT: Creating and loading our JS libraries')
function $$$(selector) {

	const _self = {}
	_self.selector = selector
	_self.element = document.querySelector(selector)

	_self.text = function () {
		return _self.element.innerText
	}

	_self.addClass = function (className) {
		if (!_self.element.classList.contains(className)) {
			_self.element.classList.add(className)
		}
	}

	_self.attr = function (name, value) {
		if (!value) {
			return _self.element.getAttribute(name)
		} else {
			_self.element.setAttribute(name, value)
		}
	}

	return _self
}

function Transistor(event, id) {
	this.event = event;
	this.id = id
}
Transistor.prototype = {
	setEventType: function (event) {
		this.event = event
		this.triggerAnimation();
	},
	setObjectID: function (id) {
		this.id = id
		this.triggerAnimation();
	},
	triggerAnimation: function () {
		if (this.event === 'scroll') {
			window.removeEventListener("mousemove", this.horiAnimation, false);
			window.addEventListener("scroll", this.scrollAnimation, false);
		}
		else if (this.event === 'mouseHorizontal') {
			window.removeEventListener("scroll", this.scrollAnimation, false);
			window.addEventListener('mousemove', this.horiAnimation, false);
		}
	},
	horiAnimation: function ({x}) {;
		let timeout;
		let element = document.getElementById(this.id || "transistor")
		if (element.classList.contains("rotate")) {
			element.classList.remove("rotate")
		}
		if(timeout){
		  window.cancelAnimationFrame(timeout)
		}
		timeout = window.requestAnimationFrame(() => {
		  const xValue = (x/window.innerWidth * 100 - 100 / 2).toFixed(1)
		  element.style.transform = `translateX(${xValue}px)`;
		});
	  },
	  scrollAnimation: function () {
		let element = document.getElementById(this.id || "transistor")
		if (!element.classList.contains("rotate")) {
			element.classList.add("rotate")
		}
		document.body.style.setProperty(
		  "--scroll",
		  window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
		);
	}

}
function changeEventType(value, transistor)
{
	transistor.setEventType(value)
}