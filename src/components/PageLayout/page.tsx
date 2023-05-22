import React, { FunctionComponent } from 'react'
import Header from '../Header/page'
import Footer from '../Footer/page'

const PageLayout : FunctionComponent <{children: React.ReactNode }> = ({children}) => {
  return (
    <div className="w-full h-full font-poppins">
    <Header/>
    <div className='flex justify-center'>
    {children}
    </div>
    <Footer/>
  </div>
  )
}

export default PageLayout;