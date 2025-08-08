import Link from "next/link"
import { Brain, Twitter, Linkedin, Github, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-gray-900/50 backdrop-blur-sm">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 border border-pink-500/30">
                <Brain className="h-6 w-6 text-pink-400" />
              </div>
              <div>
                <span className="text-xl font-bold gradient-text">Bias Labs</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced AI-powered media bias analysis platform helping you understand how different news sources frame stories.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="/articles" className="text-gray-400 hover:text-white transition-colors">Articles</Link></li>
              <li><Link href="/analytics" className="text-gray-400 hover:text-white transition-colors">Analytics</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">API</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Status</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Bias Labs. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Security</Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
