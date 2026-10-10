import { Drawer } from "@base-ui/react/drawer";
import MenuIcon from "../../assets/icons/MenuIcon";
import { navigationContents } from "./navigationContents";
import { NavLink } from "react-router";
import CloseIcon from "../../assets/icons/CloseIcon";

export default function NavigationDrawer() {
  // BUG: Drawer stays open when page changes
  return (
    <Drawer.Root swipeDirection="right">
      <Drawer.Trigger className="flex h-8 items-center justify-center gap-2 px-4 leading-none whitespace-nowrap font-normal text-neutral-950 select-none hover:not-data-disabled:bg-neutral-100 active:not-data-disabled:bg-neutral-200 data-disabled:border-neutral-500 data-disabled:text-neutral-500 disabled:border-neutral-500 disabled:text-neutral-500 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-neutral-950">
        <MenuIcon />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop className="[--backdrop-opacity:0.2] [--bleed:3rem] fixed inset-0 min-h-dvh bg-black opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] transition-opacity duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:duration-0 data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] supports-[-webkit-touch-callout:none]:absolute" />
        <Drawer.Viewport className="[--viewport-padding:0px] supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem] fixed inset-0 flex items-stretch justify-end p-(--viewport-padding)">
          <Drawer.Popup className="[--bleed:3rem] supports-[-webkit-touch-callout:none]:[--bleed:0px] h-full w-92 max-w-[calc(100vw-3rem+3rem)] -mr-12 border-l border-neutral-950 bg-white p-6 pr-18 text-neutral-950 outline-none shadow-[0.25rem_0.25rem_0] shadow-black/12 overflow-y-auto overscroll-contain touch-auto transform-[translateX(var(--drawer-swipe-movement-x))] transition-transform duration-450 ease-[cubic-bezier(0.32,0.72,0,1)] data-swiping:select-none data-ending-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))] data-starting-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)+2px))] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*400ms)] supports-[-webkit-touch-callout:none]:mr-0 supports-[-webkit-touch-callout:none]:w-[20rem] supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-3rem)] supports-[-webkit-touch-callout:none]:border supports-[-webkit-touch-callout:none]:pr-6">
            <Drawer.Content className="mx-auto w-full max-w-lg">
              <Drawer.Title className="flex justify-between mb-8 border-b text-base font-bold items-center">
                Recipe Manager
                <Drawer.Close className="flex items-center justify-center gap-2 p-3 text-sm leading-none whitespace-nowrap font-normal text-neutral-950 select-none hover:not-data-disabled:bg-neutral-100 active:not-data-disabled:bg-neutral-200 data-disabled:border-neutral-500 data-disabled:text-neutral-500 disabled:border-neutral-500 disabled:text-neutral-500 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-neutral-950">
                  <CloseIcon />
                </Drawer.Close>
              </Drawer.Title>
              <div className="flex flex-col w-full h-full justify-start items-start gap-2">
                {navigationContents.map((nav) => (
                  <NavLink className="h-8 text-lg" to={nav.href}>
                    {nav.title}
                  </NavLink>
                ))}
              </div>
            </Drawer.Content>
          </Drawer.Popup>
        </Drawer.Viewport>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
