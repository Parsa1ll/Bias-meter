'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Brain, FileText, TrendingUp, Users, AlertTriangle, Search, Filter, Sparkles } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const narratives = [
    {
      title: "AI in Healthcare Revolution",
      description: "Coverage of artificial intelligence transforming medical diagnosis and treatment, varying perspectives on...",
      articles: 47,
      trending: 92,
      sources: ["TechCrunch", "Wired", "Medical News Today"],
      political: "Right 32%",
      emotion: "High 89%",
      factual: "High 91%",
      slug: "ai-healthcare"
    },
    {
      title: "Climate Policy Debates",
      description: "Ongoing discussions about carbon emissions targets, renewable energy investments and international climate...",
      articles: 73,
      trending: 85,
      sources: ["Reuters", "The Guardian", "Wall Street Journal"],
      political: "Right 74%",
      emotion: "High 82%",
      factual: "High 88%",
      slug: "climate-policy"
    },
    {
      title: "Tech Industry Layoffs",
      description: "Major technology companies announcing workforce reductions and economic uncertainty grip market pressures",
      articles: 38,
      trending: 78,
      sources: ["Bloomberg", "TechCrunch", "The Information"],
      political: "Right 45%",
      emotion: "High 76%",
      factual: "High 85%",
      slug: "tech-layoffs"
    },
    {
      title: "Electric Vehicle Adoption",
      description: "Coverage of EV market growth, charging infrastructure development, and traditional automaker transitions",
      articles: 56,
      trending: 71,
      sources: ["Automotive News", "Electrek", "Reuters"],
      political: "Right 23%",
      emotion: "Med 54%",
      factual: "High 87%",
      slug: "ev-adoption"
    },
    {
      title: "Social Media Regulation",
      description: "Government efforts to regulate social media platforms, content moderation policies, and free speech debates",
      articles: 62,
      trending: 69,
      sources: ["Politico", "The Verge", "Washington Post"],
      political: "Right 67%",
      emotion: "High 71%",
      factual: "Med 68%",
      slug: "social-media-regulation"
    }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen dynamic-bg text-white overflow-hidden">
      {/* Toned down background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-500/8 to-purple-500/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-50 glass-effect border-b border-white/10">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500/30 to-purple-600/30 border border-pink-500/30">
                <Brain className="h-7 w-7 text-pink-400" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-bold gradient-text">Bias Labs</span>
              <p className="text-sm text-gray-300">AI-Powered Media Analysis</p>
            </div>
          </div>
          
          <nav className="flex items-center space-x-2">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Home
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="bg-gradient-to-r from-pink-500/80 to-purple-600/80 hover:from-pink-600/80 hover:to-purple-700/80 transition-all duration-300 hover:scale-105 shadow-lg">
                Dashboard
              </Button>
            </Link>
            <Link href="/articles">
              <Button variant="ghost" className="text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Articles
              </Button>
            </Link>
            <Link href="/analytics">
              <Button variant="ghost" className="text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Analytics
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Dashboard Header */}
      <section className="relative py-16 z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center animate-slide-up">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-pink-500/30 to-purple-600/30 border border-pink-500/30 mx-auto mb-8">
              <Sparkles className="h-10 w-10 text-pink-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Bias Labs</span> Dashboard
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Real-time media bias analysis across thousands of news sources.
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Understand how different outlets frame the same stories.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Cards - same structure but toned down colors */}
      <section className="py-8 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { icon: FileText, value: "6", label: "Total Articles", gradient: "from-pink-500 to-rose-500" },
              { icon: TrendingUp, value: "5", label: "Active Narratives", gradient: "from-blue-500 to-cyan-500" },
              { icon: Users, value: "44.2%", label: "Avg Bias Score", gradient: "from-purple-500 to-indigo-500" },
              { icon: AlertTriangle, value: "0", label: "High Bias Articles", gradient: "from-green-500 to-emerald-500" }
            ].map((stat, index) => (
              <Card key={index} className="glass-effect border-white/20 card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`h-12 w-12 rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center mb-4 animate-pulse-glow`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-pulse">
                      Live
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-6 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex gap-4 animate-slide-up">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search narratives..." 
                className="pl-12 h-14 glass-effect border-white/20 text-white placeholder-gray-400 rounded-2xl text-lg"
              />
            </div>
            <Button className="h-14 px-8 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 rounded-2xl transition-all duration-300 hover:scale-105">
              <Filter className="h-5 w-5 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>
      </section>
      
      {/* Trending Narratives - Make cards clickable */}
      <section className="py-8 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-8 animate-slide-up">
            <h2 className="text-3xl font-bold">
              <span className="gradient-text">Trending</span> Narratives
            </h2>
            <Badge className="bg-gradient-to-r from-green-500/80 to-emerald-500/80 text-white px-4 py-2 rounded-full animate-pulse">
              5 active
            </Badge>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {narratives.map((narrative, index) => (
              <Link key={index} href={`/articles?narrative=${narrative.slug}`}>
                <Card className="glass-effect border-white/20 card-hover cursor-pointer animate-slide-up hover:outline hover:outline-1 hover:outline-pink-500" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight">{narrative.title}</h3>
                      <div className="h-8 w-8 rounded-xl bg-gradient-to-r from-pink-500/30 to-purple-600/30 border border-pink-500/30 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-pink-400" />
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {narrative.description}
                    </p>
                    
                    <div className="flex items-center gap-6 mb-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span className="text-white font-medium">{narrative.articles} articles</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-medium">{narrative.trending}% trending</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {narrative.sources.map((source, idx) => (
                        <Badge key={idx} className="glass-effect border-white/20 text-gray-300 text-xs px-3 py-1 rounded-full">
                          {source}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      <div className="text-center p-3 glass-effect rounded-xl">
                        <div className="text-gray-400 mb-1">Political</div>
                        <div className="text-white font-bold">{narrative.political}</div>
                      </div>
                      <div className="text-center p-3 glass-effect rounded-xl">
                        <div className="text-gray-400 mb-1">Emotion</div>
                        <div className="text-white font-bold">{narrative.emotion}</div>
                      </div>
                      <div className="text-center p-3 glass-effect rounded-xl">
                        <div className="text-gray-400 mb-1">Factual</div>
                        <div className="text-white font-bold">{narrative.factual}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 relative z-10">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-white mb-8 animate-slide-up">Quick Actions</h2>
          <div className="flex gap-4 animate-slide-up">
            <Link href="/articles">
              <Button className="bg-gradient-to-r from-blue-500/80 to-cyan-600/80 hover:from-blue-600/80 hover:to-cyan-700/80 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
                View All Articles
              </Button>
            </Link>
            <Link href="/analytics">
              <Button className="bg-gradient-to-r from-purple-500/80 to-indigo-600/80 hover:from-purple-600/80 hover:to-indigo-700/80 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
                Bias Analytics
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
