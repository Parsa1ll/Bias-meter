'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, FileText, Users, TrendingUp, AlertTriangle, BarChart3, Eye, Target, ArrowRight, Sparkles, Brain, Layers } from 'lucide-react'
import Link from "next/link"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen dynamic-bg text-white overflow-hidden">
      {/* Toned down Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
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
              <Button className="bg-gradient-to-r from-pink-500/80 to-purple-600/80 hover:from-pink-600/80 hover:to-purple-700/80 transition-all duration-300 hover:scale-105 shadow-lg">
                Home
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost" className="text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
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

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container px-4 md:px-6 text-center relative z-10">
          <div className="mx-auto max-w-5xl space-y-8 animate-slide-up">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-r from-pink-500/30 to-purple-600/30 border border-pink-500/30 mx-auto mb-8">
              <Sparkles className="h-12 w-12 text-pink-400" />
            </div>
            
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl leading-tight">
              Uncover Media{" "}
              <span className="gradient-text">Bias</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                with AI Precision
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Bias Labs uses advanced artificial intelligence to analyze thousands of news articles, 
              revealing hidden biases and helping you understand how different outlets frame the same stories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="bg-gradient-to-r from-pink-500/80 to-purple-600/80 hover:from-pink-600/80 hover:to-purple-700/80 text-lg px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl">
                  Explore Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/articles">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 glass-effect">
                  Browse Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { icon: FileText, value: "50,000+", label: "Articles Analyzed", color: "from-pink-500 to-rose-500" },
              { icon: Users, value: "200+", label: "News Sources", color: "from-purple-500 to-indigo-500" },
              { icon: Target, value: "95%", label: "Accuracy Rate", color: "from-blue-500 to-cyan-500" },
              { icon: AlertTriangle, value: "24/7", label: "Live Monitoring", color: "from-green-500 to-emerald-500" }
            ].map((stat, index) => (
              <Card key={index} className="glass-effect border-white/20 card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className={`h-16 w-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center animate-pulse-glow`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-3">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive tools to understand and analyze media bias across all major news sources
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Eye,
                title: "Real-Time Bias Detection",
                description: "Advanced AI algorithms analyze thousands of news articles to identify political, emotional, and contextual bias in real-time.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: BarChart3,
                title: "Visual Analytics",
                description: "Interactive radar charts and trend analysis help you understand bias patterns across different media sources.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Target,
                title: "Source Comparison",
                description: "Compare how different news outlets cover the same story with side-by-side bias analysis.",
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                icon: TrendingUp,
                title: "Narrative Tracking",
                description: "Discover trending narratives and see how media bias evolves over time across different topics.",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((feature, index) => (
              <Card key={index} className="glass-effect border-white/20 card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.gradient} animate-pulse-glow`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">
              How <span className="gradient-text">Bias Labs</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered analysis pipeline processes thousands of articles to reveal hidden biases
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Data Collection",
                description: "We continuously monitor hundreds of news sources, collecting articles in real-time from across the political spectrum.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                step: "02",
                title: "AI Analysis",
                description: "Advanced natural language processing algorithms analyze each article for political, emotional, factual, and sensational bias.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                step: "03",
                title: "Visualization",
                description: "Results are presented through interactive dashboards, comparison tools, and trend analysis for easy understanding.",
                gradient: "from-purple-500 to-indigo-500"
              }
            ].map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r ${step.gradient} mx-auto mb-8 animate-pulse-glow`}>
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container px-4 md:px-6">
          <Card className="glass-effect border-white/20 animate-slide-up">
            <CardContent className="p-16 text-center">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to <span className="gradient-text">See Through</span>
                <br />
                Media Bias?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Start exploring thousands of analyzed articles and discover how different news sources frame the same stories.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-gradient-to-r from-pink-500/80 to-purple-600/80 hover:from-pink-600/80 hover:to-purple-700/80 text-lg px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl">
                    View Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/analytics">
                  <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 glass-effect">
                    Explore Analytics
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
                {[
                  { color: "bg-gradient-to-r from-blue-400 to-cyan-400", text: "Real-time analysis" },
                  { color: "bg-gradient-to-r from-pink-400 to-rose-400", text: "200+ news sources" },
                  { color: "bg-gradient-to-r from-purple-400 to-indigo-400", text: "Advanced AI algorithms" },
                  { color: "bg-gradient-to-r from-green-400 to-emerald-400", text: "Interactive visualizations" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-3 h-3 ${item.color} rounded-full animate-pulse`}></div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  )
}
