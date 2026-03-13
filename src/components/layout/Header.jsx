import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

// =======================================================
// 1. DATA DAN KONSTANTA NAVIGASI
// =======================================================
const products = [
  { name: 'Javascript', description: 'Memahami metrik dan pengunjung Anda', href: '#skills', icon: ChartPieIcon },
  { name: 'HTML', description: 'Strategi untuk keterlibatan pelanggan', href: '#skills', icon: CursorArrowRaysIcon },
  { name: 'CSS', description: 'Lindungi data Anda di cloud', href: 'skills', icon: FingerPrintIcon },
  { name: 'Python', description: 'Menghubungkan layanan pihak ketiga', href: '#skills', icon: SquaresPlusIcon },
  { name: 'Laravel', description: 'Membangun alur kerja yang efisien', href: 'skills', icon: ArrowPathIcon },
];
const callsToAction = [
  { name: 'Hubungi Kami', href: '#contact', icon: PhoneIcon },
];
const generalLinks = [
  { name: 'Home', href: '#' },
  { name: 'Profile', href: '#about' },
  { name: 'Project', href: '#projects' },
];

// =======================================================
// 2. SUB-KOMPONEN NAVIGASI
// =======================================================

// Panel Dropdown untuk Desktop (Komponen 'Layanan')
function ServicesDropdownPanel() {
  return (
    <PopoverPanel
      transition
      className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-xl bg-gray-50 shadow-2xl ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
    >
      <div className="p-4">
        {products.map((item) => (
          <div
            key={item.name}
            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-indigo-50 transition-colors"
          >
            <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-indigo-600/80">
              <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-white" />
            </div>
            <div className="flex-auto">
              <a href={item.href} className="block font-semibold text-gray-900">
                {item.name}
                <span className="absolute inset-0" />
              </a>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-100">
        {callsToAction.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-200 transition-colors"
          >
            <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            {item.name}
          </a>
        ))}
      </div>
    </PopoverPanel>
  );
}

// Navigasi Desktop (Tampil di layar besar)
function DesktopNav() {
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
      <Popover className="relative">
        {({ open }) => (
          <>
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 hover:text-indigo-600 transition-colors focus:outline-none">
              Skills
              {/* Ikon panah yang berputar saat dropdown terbuka */}
              <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
            </PopoverButton>
            <ServicesDropdownPanel />
          </>
        )}
      </Popover>

      {generalLinks.map((link) => (
        <a key={link.name} href={link.href} className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
          {link.name}
        </a>
      ))}
    </PopoverGroup>
  );
}

// Menu Mobile (Tampil di layar kecil, menggunakan Dialog)
function MobileMenu({ open, setOpen }) {
  return (
    <Dialog open={open} onClose={setOpen} className="lg:hidden">
      {/* Latar belakang buram */}
      <div className="fixed inset-0 z-50 backdrop-blur-sm bg-black/20" />
      
      {/* Panel Menu Mobile (Sidebar) */}
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-xl">
        
        {/* Header di dalam menu mobile */}
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-indigo-600">My Portofolio</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-red-700 hover:text-red-600 focus:outline-none focus:ring-4 focus:ring-inset focus:ring-indigo-600"
          >
            <span className="sr-only">Tutup menu</span>
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Konten Menu Mobile */}
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {/* Disclosure untuk Layanan */}
              <Disclosure as="div" className="-mx-3">
                {({ open }) => (
                  <>
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none">
                      Skills
                      <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none group-data-open:rotate-180 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>

              {/* Link Umum Mobile */}
              {generalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            

          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}


// =======================================================
// 3. KOMPONEN UTAMA (App)
// Header Navbar Utama
// =======================================================
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white shadow-lg sticky top-0 z-30">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          
          {/* Logo Perusahaan */}
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-indigo-600">PORTOFOLIO</span>
            </a>
          </div>

          {/* Tombol Buka Menu Mobile (Hamburger) */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            >
              <span className="sr-only">Buka menu utama</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Navigasi Desktop - dipanggil di sini */}
          <DesktopNav />
        </nav>
        {/* Menu Mobile - dipanggil di sini */}
        <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      </header>
      
            
    </div>
  );
}
