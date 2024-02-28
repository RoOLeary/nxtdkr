/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react'

export const useSlider = () => {
	const sliderRef = useRef(null)
	const [position, setPosition] = useState({ x: 350, alpha: 1 })
	const [nextPosition, setNextPosition] = useState({ x: 150, alpha: 1 })

	function debounce(func: { (): void; apply?: any }, wait: number | undefined, immediate: null) {
		var timeout: string | number | NodeJS.Timeout | null | undefined
		return  () => {
      // @ts-ignore
			var context = this,
				args = arguments
			var later = function () {
				timeout = null
				if (!immediate) func.apply(context, args)
			}
			var callNow = immediate && !timeout
      // @ts-ignore
			clearTimeout(timeout)
			timeout = setTimeout(later, wait)
			if (callNow) func.apply(context, args)
		}
	}

	const canvasInit = () => {
		// @ts-ignore
		const canvas = sliderRef.current?.querySelector('.canvas')
		if (canvas) {
			const ctx = canvas.getContext('2d')
			// @ts-ignore
			const activeSlide = sliderRef.current?.querySelector('.slide.active')
			const w = activeSlide?.offsetWidth
			const h = activeSlide?.offsetHeight
			const img = new Image()
			img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/42764/mask-karlie.jpg'

			let pos = {
				x: 150,
				alpha: 1,
			}

			if (window.matchMedia('(min-width: 860px)').matches) {
				pos = {
					x: 200,
					alpha: 1,
				}
			}

			if (window.matchMedia('(min-width: 1200px)').matches) {
				pos = {
					x: 250,
					alpha: 1,
				}
			}

			setPosition(pos)

			canvas.width = w
			canvas.height = h
			drawMask(canvas, ctx, pos, img)
		}
	}

	useEffect(() => {
		canvasInit()
		// @ts-ignore
		const footerButtons = sliderRef.current?.querySelectorAll('.footer-wrapper .box')
		footerButtons?.forEach((button: { addEventListener: (arg0: string, arg1: (event: any) => void) => any }) =>
			button.addEventListener('click', event => changeButton(event.currentTarget)),
		)

		// Equivalent of $(document).ready
		window.addEventListener('DOMContentLoaded', canvasInit)
		// @ts-ignore
		const handleResize = debounce(() => canvasInit(), 250)
		window.addEventListener('resize', handleResize)

		// Cleanup listeners on component unmount
		return () => {
			window.removeEventListener('resize', handleResize)
			footerButtons?.forEach((button: { removeEventListener: (arg0: string) => any }) => button.removeEventListener('click'))
		}
	}, [canvasInit])

	// ... [all the other methods like drawMask, changeSlide, etc. go here]

	const drawMask = (canvas: any, ctx: any, position: { x: number; alpha: number }, img: HTMLImageElement) => {
		// logic for drawMask
	}

	const changeSlide = (id: any) => {
		// logic for changeSlide
	}

	const changeButton = (el: any) => {
		// logic for changeButton
	}

	// ... [continue with all the other methods]

	return {
		sliderRef,
		position,
		nextPosition,
	}
}

export default useSlider
