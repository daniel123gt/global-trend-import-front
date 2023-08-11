import Menu from "../Menu"
import BannerHead from "../BannerHead"
import React from 'react'

export default function Header() {
  return (
    <header className="fixed w-full z-50">
      <BannerHead/>
      <div className="container-global">
        <Menu/>
      </div>
      
    </header>
  )
}
