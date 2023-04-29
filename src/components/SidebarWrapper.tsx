import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import * as lucideReact from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Stats from "./Stats";
import Charts from "./Charts";

const dashboardnavigation = [
  { name: "Dashboard", href: "#", icon: lucideReact.Home, current: true },
  { name: "Record", href: "#", icon: lucideReact.Flag, current: false },
  { name: "Reports", href: "#", icon: lucideReact.BarChart, current: false },
  {
    name: "Analyze",
    href: "#",
    icon: lucideReact.PackageSearch,
    current: false,
  },
  { name: "Learn", href: "#", icon: lucideReact.GraduationCap, current: false },
];
const pagesnavigation = [
  { name: "Help Center", href: "#", icon: lucideReact.HelpCircle, current: false },
  { name: "File Manager", href: "#", icon: lucideReact.Folder, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function SidebarWrapper() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-40 flex md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4 pt-5">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute right-0 top-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <lucideReact.XIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4">
                <lucideReact.Command className="h-6 w-auto" />
                <span className="ml-2 font-sans font-bold text-slate-800">
                  Greenstitch
                </span>
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="flex flex-col space-y-1 bg-white px-2">
                  <div className="space-y-1 font-mono font-bold text-sm text-slate-400 mt-5 mb-2 px-2">
                    DASHBOARD
                  </div>
                  {dashboardnavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={cn(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                      )}
                    >
                      <item.icon
                        className={cn(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 h-4 w-4 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
                <nav className="flex flex-col space-y-1 bg-white px-2">
                  <div className="space-y-1 font-mono font-bold text-sm text-slate-400 mt-5 mb-2 px-2">
                    PAGES
                  </div>
                  {pagesnavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={cn(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                      )}
                    >
                      <item.icon
                        className={cn(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 h-4 w-4 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex flex-shrink-0 border-t border-gray-200">
                <div className="flex w-full items-center justify-between px-4 pt-2">
                  <a href="#" className="group block flex-shrink-0">
                    <lucideReact.Settings2
                      className="inline-block h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </a>
                  <a href="#" className="group block flex-shrink-0">
                    <lucideReact.LogOut
                      className="inline-block h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </a>
                  <a href="#" className="group block flex-shrink-0">
                    <lucideReact.Globe
                      className="inline-block h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex w-64 flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pb-4 pt-5">
            <div className="flex flex-shrink-0 items-center px-4">
              <lucideReact.Command className="h-6 w-auto" />
              <span className="ml-2 font-sans font-bold text-slate-800">
                Greenstitch
              </span>
            </div>
            <div className="mt-5 flex flex-grow flex-col">
              <nav className="flex flex-col space-y-1 bg-white px-2">
                <div className="space-y-1 font-mono font-bold text-sm text-slate-400 mt-5 mb-2 px-2">
                  DASHBOARD
                </div>
                {dashboardnavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                    )}
                  >
                    <item.icon
                      className={cn(
                        item.current
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 h-4 w-4 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
              <nav className="flex flex-col space-y-1 bg-white px-2">
                <div className="space-y-1 font-mono font-bold text-sm text-slate-400 mt-5 mb-2 px-2">
                  PAGES
                </div>
                {pagesnavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
                    )}
                  >
                    <item.icon
                      className={cn(
                        item.current
                          ? "text-gray-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 h-4 w-4 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 border-t border-gray-200">
              <div className="flex w-full items-center justify-between px-4 pt-2">
                <a href="#" className="group block flex-shrink-0">
                  <lucideReact.Settings2
                    className="inline-block h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
                <a href="#" className="group block flex-shrink-0">
                  <lucideReact.LogOut
                    className="inline-block h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
                <a href="#" className="group block flex-shrink-0">
                  <lucideReact.Globe
                    className="inline-block h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-0 flex-1 flex-col overflow-hidden">
        <div className="relative z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <lucideReact.MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="hidden md:flex md:flex-1 md:border my-3 px-6 rounded-md">
              <form className="flex w-full md:ml-0">
                <label htmlFor="search_field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <lucideReact.SearchIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search_field"
                    className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </form>
            </div>
            <div className="flex md:hidden my-3 items-center rounded-md">
              <lucideReact.Command className="h-6 w-auto" />
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative gap-x-6 flex justify-between items-center">
                <button className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">View notifications</span>
                  <lucideReact.Calendar className="h-5 w-5" aria-hidden="true" />
                </button>
                <button className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">View notifications</span>
                  <lucideReact.BellIcon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">View notifications</span>
                  <lucideReact.LayoutGrid className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-6">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                          height={1000}
                          width={1000}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={cn(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>

        <main className="relative flex-1 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <Stats />
              <Charts />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
