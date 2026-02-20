export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="text-2xl font-semibold mb-4">ARCHFORM</div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              Creating timeless architecture that blends beauty, functionality,
              and sustainability for a better tomorrow.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <div className="hover:text-white transition cursor-pointer">
                About
              </div>
              <div className="hover:text-white transition cursor-pointer">
                Services
              </div>
              <div className="hover:text-white transition cursor-pointer">
                Projects
              </div>
              <div className="hover:text-white transition cursor-pointer">
                Contact
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <a
                  href="https://www.instagram.com/dsarchitects97?igsh=MWdsaTB2Y3V2ZWd5NA=="
                  className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition"
                >
                  <span className="text-white text-sm">Instagram</span>
                </a>
               <a
                  href="https://www.linkedin.com/in/ar-deep-suthar-b09a12146?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition"
                >
                  <span className="text-white text-sm">LinkdIn</span>
                </a>
                 <a
                  href="https://www.facebook.com/share/16A8QLCnH8/"
                  className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition"
                >
                  <span className="text-white text-sm">Facebook</span>
                </a>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <div>© 2026 Archform Studio. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// <footer className="bg-neutral-900 text-neutral-300">
//   <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

//     {/* Brand */}
//     <div>
//       <h2 className="text-2xl font-semibold text-white tracking-wide">
//         ARCHFORM
//       </h2>
//       <p className="mt-4 text-sm leading-relaxed">
//         Designing timeless spaces that blend functionality,
//         aesthetics, and sustainability.
//       </p>
//     </div>

//     {/* Quick Links */}
//     <div>
//       <h3 className="text-lg font-medium text-white mb-4">
//         Quick Links
//       </h3>
//       <ul className="space-y-3 text-sm">
//         <li className="hover:text-white cursor-pointer">Home</li>
//         <li className="hover:text-white cursor-pointer">About</li>
//         <li className="hover:text-white cursor-pointer">Projects</li>
//         <li className="hover:text-white cursor-pointer">Contact</li>
//       </ul>
//     </div>

//     {/* Services */}
//     <div>
//       <h3 className="text-lg font-medium text-white mb-4">
//         Services
//       </h3>
//       <ul className="space-y-3 text-sm">
//         <li className="hover:text-white cursor-pointer">
//           Architectural Design
//         </li>
//         <li className="hover:text-white cursor-pointer">
//           Interior Design
//         </li>
//         <li className="hover:text-white cursor-pointer">
//           Urban Planning
//         </li>
//         <li className="hover:text-white cursor-pointer">
//           Landscape Design
//         </li>
//       </ul>
//     </div>

//     {/* Contact */}
//     <div>
//       <h3 className="text-lg font-medium text-white mb-4">
//         Contact
//       </h3>
//       <ul className="space-y-3 text-sm">
//         <li>📍 Pune, India</li>
//         <li>📞 +91 12345</li>
//         <li>✉️ hello@archform.com</li>
//       </ul>
//     </div>
//   </div>

//   {/* Bottom bar */}
//   <div className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-400">
//     © {new Date().getFullYear()} Archform Studio. All rights reserved.
//   </div>
// </footer>
{
  /* FOOTER */
}
