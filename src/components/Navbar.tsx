
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// List of all digital global goods
const digitalGoods = [
  { name: 'DigiLocker', path: '/digital-goods/digilocker' },
  { name: 'Unified Payments Interface (UPI)', path: '/digital-goods/upi' },
  { name: 'UMANG', path: '/digital-goods/umang' },
  { name: 'API Setu', path: '/digital-goods/api-setu' },
  { name: 'e-Courts', path: '/digital-goods/e-courts' },
  { name: 'SIDH', path: '/digital-goods/sidh' },
  { name: 'e-Office', path: '/digital-goods/e-office' },
  { name: 'Aarogya Setu', path: '/digital-goods/aarogya-setu' },
  { name: 'eSanjeevani', path: '/digital-goods/e-sanjeevani' },
  { name: 'Poshan Tracker', path: '/digital-goods/poshan-tracker' },
  { name: 'Co-WIN', path: '/digital-goods/co-win' },
  { name: 'DIKSHA', path: '/digital-goods/diksha' },
  { name: 'GeM', path: '/digital-goods/gem' },
  { name: 'e-Hospital', path: '/digital-goods/e-hospital' },
  { name: 'NCD Platform', path: '/digital-goods/ncd-platform' },
  { name: 'Aadhaar', path: '/digital-goods/aadhaar' },
  { name: 'Ayushman Bharat Digital Mission', path: '/digital-goods/abdm' },
  { name: 'BharatNet', path: '/digital-goods/bharatnet' },
  { name: 'PM-WANI', path: '/digital-goods/pm-wani' },
  { name: 'CERT-In', path: '/digital-goods/cert-in' },
  { name: 'DigiYatra', path: '/digital-goods/digiyatra' },
  { name: 'SWAYAM', path: '/digital-goods/swayam' },
  { name: 'National Digital Library', path: '/digital-goods/ndl' },
  { name: 'FASTag', path: '/digital-goods/fastag' },
  { name: 'VAHAN & SARATHI', path: '/digital-goods/vahan-sarathi' },
  { name: 'Passport Seva', path: '/digital-goods/passport-seva' },
  { name: 'eNAM', path: '/digital-goods/enam' },
  { name: 'Kisan Suvidha', path: '/digital-goods/kisan-suvidha' },
  { name: 'RAPDRP', path: '/digital-goods/rapdrp' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Group the digital goods into categories
  const financialServices = digitalGoods.filter(item => 
    ['UPI', 'FASTag', 'GeM'].some(keyword => item.name.includes(keyword))
  );
  
  const healthServices = digitalGoods.filter(item => 
    ['Aarogya Setu', 'eSanjeevani', 'Poshan Tracker', 'Co-WIN', 'e-Hospital', 'NCD Platform', 'Ayushman Bharat'].some(keyword => 
      item.name.includes(keyword)
    )
  );
  
  const identityServices = digitalGoods.filter(item => 
    ['Aadhaar', 'DigiLocker', 'SIDH', 'Passport Seva', 'DigiYatra'].some(keyword => 
      item.name.includes(keyword)
    )
  );
  
  const educationServices = digitalGoods.filter(item => 
    ['DIKSHA', 'SWAYAM', 'National Digital Library'].some(keyword => 
      item.name.includes(keyword)
    )
  );
  
  const governanceServices = digitalGoods.filter(item => 
    ['UMANG', 'API Setu', 'e-Courts', 'e-Office', 'BharatNet', 'PM-WANI', 'CERT-In', 'Parivahan Sewa', 'VAHAN & SARATHI', 'eNAM', 'Kisan Suvidha', 'RAPDRP'].some(keyword => 
      item.name.includes(keyword)
    )
  );

  return (
    <nav className="bg-theme-darkGray sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-theme-orange transition-colors duration-300 nav-link font-semibold">
              Home
            </Link>
            
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger className="flex items-center text-white hover:text-theme-orange transition-colors duration-300 nav-link outline-none bg-transparent border-none">
                <span className="font-semibold">Digital Global Goods</span>
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-theme-darkGray border border-gray-700 rounded-md shadow-xl w-[680px] p-4 grid grid-cols-5 gap-3 text-white z-50">
                <div className="space-y-2">
                  <h3 className="text-theme-orange font-medium text-sm uppercase tracking-wider pb-1 border-b border-theme-orange/30">Financial</h3>
                  {financialServices.map((item) => (
                    <DropdownMenuItem key={item.path} className="dropdown-item p-0 focus:bg-transparent focus:text-theme-orange">
                      <Link to={item.path} className="w-full py-1 block text-sm" onClick={() => setIsOpen(false)}>
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="text-theme-orange font-medium text-sm uppercase tracking-wider pb-1 border-b border-theme-orange/30">Health</h3>
                  {healthServices.map((item) => (
                    <DropdownMenuItem key={item.path} className="dropdown-item p-0 focus:bg-transparent focus:text-theme-orange">
                      <Link to={item.path} className="w-full py-1 block text-sm" onClick={() => setIsOpen(false)}>
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="text-theme-orange font-medium text-sm uppercase tracking-wider pb-1 border-b border-theme-orange/30">Identity</h3>
                  {identityServices.map((item) => (
                    <DropdownMenuItem key={item.path} className="dropdown-item p-0 focus:bg-transparent focus:text-theme-orange">
                      <Link to={item.path} className="w-full py-1 block text-sm" onClick={() => setIsOpen(false)}>
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="text-theme-orange font-medium text-sm uppercase tracking-wider pb-1 border-b border-theme-orange/30">Education</h3>
                  {educationServices.map((item) => (
                    <DropdownMenuItem key={item.path} className="dropdown-item p-0 focus:bg-transparent focus:text-theme-orange">
                      <Link to={item.path} className="w-full py-1 block text-sm" onClick={() => setIsOpen(false)}>
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>

                <div className="space-y-2">
                  <h3 className="text-theme-orange font-medium text-sm uppercase tracking-wider pb-1 border-b border-theme-orange/30">Governance</h3>
                  {governanceServices.map((item) => (
                    <DropdownMenuItem key={item.path} className="dropdown-item p-0 focus:bg-transparent focus:text-theme-orange">
                      <Link to={item.path} className="w-full py-1 block text-sm" onClick={() => setIsOpen(false)}>
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/about" className="text-white hover:text-theme-orange transition-colors duration-300 nav-link font-semibold">
              About
            </Link>
            
            <Link to="/contact" className="text-white hover:text-theme-orange transition-colors duration-300 nav-link font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
