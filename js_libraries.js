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

function Transistor(event) {
	this.event=event;
}
Transistor.prototype = {
	setEventType: function (event) {
		this.event = event
		this.triggerAnimation();
	},
	triggerAnimation: function () {
		if (this.event === 'scroll') {
			window.addEventListener(
				"scroll",
				() => {
				  document.body.style.setProperty(
					"--scroll",
					window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
				  );
				},
				false
			  );
		}
		else if (this.event === 'mouseHorizontal') {
			let iceCream = document.getElementById('icecream')
			let timeout ;
			window.addEventListener('mousemove', ({x,y}) => {
				if(timeout){
				  window.cancelAnimationFrame(timeout)
				}
				timeout = window.requestAnimationFrame(() => {
				  const xValue = (x/window.innerWidth * 100 - 100 / 2).toFixed(1)
				  iceCream.style.transform = `translateX(${xValue}px)`;
				});
			  }, false);
		}
	}

}
function changeType(value, transistor)
{
	transistor.setEventType(value)
}