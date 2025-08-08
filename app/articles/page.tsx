'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Brain, Search, ExternalLink, Sparkles } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"

export default function ArticlesPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const articles = [
    {
      id: 1,
      title: "AI Breakthrough: New Model Achieves 95% Accuracy in Medical Diagnosis",
      description: "New AI system achieves 95% accuracy in medical diagnosis, sparking debate about...",
      source: "Medical News Today",
      date: "Jan 15, 2024",
      biasLevel: "Low Bias",
      biasColor: "from-green-500 to-emerald-500",
      political: "Right 14%",
      emotional: "Med 41%",
      factual: "High 89%",
      narrative: "AI in Healthcare Revolution"
    },
    {
      id: 2,
      title: "Climate Summit Ends in Disappointing Compromise, Activists Criticize Weak Targets",
      description: "Climate summit concludes with compromise deal that activists criticize as insufficient for meeting global...",
      source: "The Guardian",
      date: "Jan 14, 2024",
      biasLevel: "High Bias",
      biasColor: "from-red-500 to-rose-500",
      political: "Left 78%",
      emotional: "High 82%",
      factual: "Med 67%",
      narrative: "Climate Policy Debates"
    },
    {
      id: 3,
      title: "Meta Announces 15% Workforce Reduction Amid Market Pressures",
      description: "Meta reduces workforce by 15%, eliminating 11,000 positions as company focuses on efficiency and...",
      source: "Bloomberg",
      date: "Jan 13, 2024",
      biasLevel: "Minimal Bias",
      biasColor: "from-blue-500 to-cyan-500",
      political: "Right 18%",
      emotional: "Low 23%",
      factual: "High 91%",
      narrative: "Tech Industry Layoffs"
    },
    {
      id: 4,
      title: "Electric Vehicle Sales Surge 300% in Q4, Traditional Automakers Struggle to Compete",
      description: "EV sales jump 300% in Q4 as traditional automakers struggle to compete with Tesla and emerging brands...",
      source: "Automotive News",
      date: "Jan 12, 2024",
      biasLevel: "Low Bias",
      biasColor: "from-green-500 to-emerald-500",
      political: "Right 25%",
      emotional: "Med 45%",
      factual: "High 87%",
      narrative: "Electric Vehicle Adoption"
    },
    {
      id: 5,
      title: "Congress Introduces Bipartisan Bill to Regulate Social Media Algorithms",
      description: "Bipartisan congressional bill aims to regulate social media algorithms, focusing on transparency and user protection...",
      source: "Politico",
      date: "Jan 11, 2024",
      biasLevel: "Moderate Bias",
      biasColor: "from-yellow-500 to-orange-500",
      political: "Center 52%",
      emotional: "Med 58%",
      factual: "High 74%",
      narrative: "Social Media Regulation"
    },
    {
      id: 6,
      title: "Breakthrough Gene Therapy Restores Vision in Blind Patients",
      description: "Gene therapy successfully restores partial vision in blind patients, though questions remain about long-term effects...",
      source: "BBC Health",
      date: "Jan 10, 2024",
      biasLevel: "Low Bias",
      biasColor: "from-green-500 to-emerald-500",
      political: "Right 8%",
      emotional: "Low 31%",
      factual: "High 94%",
      narrative: "AI in Healthcare Revolution"
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
              <Button variant="ghost" className="text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Dashboard
              </Button>
            </Link>
            <Link href="/articles">
              <Button className="bg-gradient-to-r from-pink-500/80 to-purple-600/80 hover:from-pink-600/80 hover:to-purple-700/80 transition-all duration-300 hover:scale-105 shadow-lg">
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

      {/* Page Header */}
      <section className="relative py-12 z-10">
        <div className="container px-4 md:px-6">
          <div className="animate-slide-up">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300">
                ← Back
              </Button>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-pink-500/30 to-purple-600/30 border border-pink-500/30 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-pink-400" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">
                  <span className="gradient-text">Article Analysis</span>
                </h1>
                <p className="text-gray-300 text-lg">
                  Explore 6 analyzed articles with detailed bias breakdowns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="flex gap-4 mb-4 animate-slide-up">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search articles..." 
                className="pl-12 h-12 glass-effect border-white/20 text-white placeholder-gray-400 rounded-2xl"
              />
            </div>
            <Select>
              <SelectTrigger className="w-48 h-12 glass-effect border-white/20 text-white rounded-2xl">
                <SelectValue placeholder="All Narratives" />
              </SelectTrigger>
              <SelectContent className="glass-effect border-white/20">
                <SelectItem value="all">All Narratives</SelectItem>
                <SelectItem value="healthcare">AI in Healthcare</SelectItem>
                <SelectItem value="climate">Climate Policy</SelectItem>
                <SelectItem value="tech">Tech Industry</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48 h-12 glass-effect border-white/20 text-white rounded-2xl">
                <SelectValue placeholder="All Bias Levels" />
              </SelectTrigger>
              <SelectContent className="glass-effect border-white/20">
                <SelectItem value="all">All Bias Levels</SelectItem>
                <SelectItem value="low">Low Bias</SelectItem>
                <SelectItem value="moderate">Moderate Bias</SelectItem>
                <SelectItem value="high">High Bias</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="text-gray-400 text-sm animate-slide-up">Showing 6 articles</p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Link key={article.id} href={`/articles/${article.id}`}>
                <Card className="glass-effect border-white/20 card-hover cursor-pointer h-full animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-white leading-tight mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <ExternalLink className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2 transition-colors hover:text-white" />
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center gap-3 mb-4 text-sm">
                      <Badge className="glass-effect border-white/20 text-gray-300 px-3 py-1 rounded-full">
                        {article.source}
                      </Badge>
                      <span className="text-gray-400">{article.date}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`bg-gradient-to-r ${article.biasColor} text-white px-4 py-2 rounded-full animate-pulse`}>
                        {article.biasLevel}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3 text-xs mb-4">
                      <div className="text-center p-3 glass-effect rounded-xl">
                        <div className="text-gray-400 mb-1">Political</div>
                        <div className="text-white font-bold">{article.political}</div>
                      </div>
                      <div className="text-center p-3 glass-effect rounded-xl">
                        <div className="text-gray-400 mb-1">Emotional</div>
                        <div className="text-white font-bold">{article.emotional}</div>
                      </div>
                      <div className="text-center p-3 glass-effect rounded-xl">
                        <div className="text-gray-400 mb-1">Factual</div>
                        <div className="text-white font-bold">{article.factual}</div>
                      </div>
                    </div>
                    
                    <Badge className="bg-gradient-to-r from-purple-500/80 to-indigo-500/80 text-white text-xs px-3 py-1 rounded-full">
                      Narrative: {article.narrative}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
