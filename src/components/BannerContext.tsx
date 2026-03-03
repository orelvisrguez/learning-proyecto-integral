"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface BannerContextType {
  bannerHeight: number
  isBannerVisible: boolean
}

const BannerContext = createContext<BannerContextType>({
  bannerHeight: 0,
  isBannerVisible: false,
})

export function useBanner() {
  return useContext(BannerContext)
}

export function BannerProvider({ children }: { children: ReactNode }) {
  const [bannerHeight, setBannerHeight] = useState(0)
  const [isBannerVisible, setIsBannerVisible] = useState(false)

  useEffect(() => {
    const updateBannerHeight = () => {
      const banner = document.querySelector('[data-notification-banner]')
      if (banner) {
        setBannerHeight(banner.clientHeight)
        setIsBannerVisible(true)
      } else {
        setBannerHeight(0)
        setIsBannerVisible(false)
      }
    }

    updateBannerHeight()
    
    const observer = new MutationObserver(updateBannerHeight)
    observer.observe(document.body, { childList: true, subtree: true })
    
    return () => observer.disconnect()
  }, [])

  return (
    <BannerContext.Provider value={{ bannerHeight, isBannerVisible }}>
      {children}
    </BannerContext.Provider>
  )
}
