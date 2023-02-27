import React from 'react'
import Footer from './Footer.js'
import Routers from './../routers/Routers.js'

function Layout() {
	return <>
		<div>
			<Routers/>
		</div>
		<Footer />
	</>
}

export default Layout