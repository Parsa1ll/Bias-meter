'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, ArrowLeft, TrendingUp, Sparkles, Target, Eye, BarChart3, AlertTriangle, Users, FileText } from 'lucide-react'
import Link from "next/link"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"

export default function AnalyticsPage() {
  const [mounted, setMounted] = useState(false)
  const [hoveredData, setHoveredData] = useState<any>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const biasEvolutionData = [
    { 
      date: 'Jan 8', 
      political: 35, 
      emotional: 72, 
      factual: 85, 
      sensational: 48, 
      source: 76, 
      context: 58 
    },
    { 
      date: 'Jan 9', 
      political: 28, 
      emotional: 65, 
      factual: 88, 
      sensational: 42, 
      source: 78, 
      context: 62 
    },
    { 
      date: 'Jan 10', 
      political: 32, 
      emotional: 68, 
      factual: 91, 
      sensational: 45, 
      source: 80, 
      context: 59 
    },
    { 
      date: 'Jan 11', 
      political: 29, 
      emotional: 63, 
      factual: 87, 
      sensational: 38, 
      source: 75, 
      context: 55 
    },
    { 
      date: 'Jan 12', 
      political: 25, 
      emotional: 58, 
      factual: 89, 
      sensational: 35, 
      source: 82, 
      context: 61 
    },
    { 
      date: 'Jan 13', 
      political: 31, 
      emotional: 71, 
      factual: 86, 
      sensational: 47, 
      source: 77, 
      context: 57 
    },
    { 
      date: 'Jan 14', 
      political: 34, 
      emotional: 69, 
      factual: 92, 
      sensational: 44, 
      source: 79, 
      context: 63 
    }
  ]

  const biasAspects = [
    { 
      name: "Political Bias", 
      value: 32, 
      icon: Target, 
      description: "Measures left/right political leaning in language and source selection",
      color: "from-red-500/80 to-rose-500/80"
    },
    { 
      name: "Emotional Tone", 
      value: 67, 
      icon: Eye, 
      description: "Analyzes emotional language and sentiment intensity",
      color: "from-orange-500/80 to-amber-500/80"
    },
    { 
      name: "Factual Accuracy", 
      value: 89, 
      icon: BarChart3, 
      description: "Evaluates fact-checking, source credibility, and evidence quality",
      color: "from-green-500/80 to-emerald-500/80"
    },
    { 
      name: "Sensationalism", 
      value: 45, 
      icon: AlertTriangle, 
      description: "Detects clickbait, hyperbole, and attention-grabbing language",
      color: "from-purple-500/80 to-violet-500/80"
    },
    { 
      name: "Source Quality", 
      value: 78, 
      icon: Users, 
      description: "Assesses credibility and reliability of cited sources",
      color: "from-blue-500/80 to-cyan-500/80"
    },
    { 
      name: "Context Balance", 
      value: 56, 
      icon: FileText, 
      description: "Measures inclusion of multiple perspectives and balanced reporting",
      color: "from-cyan-500/80 to-teal-500/80"
    }
  ]

  const trendingNarratives = [
    { name: "AI in Healthcare Revolution", articles: 47, trending: 92, gradient: "from-pink-500/80 to-rose-500/80" },
    { name: "Climate Policy Debates", articles: 73, trending: 85, gradient: "from-blue-500/80 to-cyan-500/80" },
    { name: "Tech Industry Layoffs", articles: 38, trending: 78, gradient: "from-purple-500/80 to-indigo-500/80" },
    { name: "Electric Vehicle Adoption", articles: 56, trending: 71, gradient: "from-green-500/80 to-emerald-500/80" },
    { name: "Social Media Regulation", articles: 62, trending: 69, gradient: "from-orange-500/80 to-red-500/80" }
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
              <Button variant="ghost" className="text-white hover:bg-white/10 transition-all duration-300 hover:scale-105">
                Articles
              </Button>
            </Link>
            <Link href="/analytics">
              <Button className="bg-gradient-to-r from-pink-500/80 to-purple-600/80 hover:from-pink-600/80 hover:to-purple-700/80 transition-all duration-300 hover:scale-105 shadow-lg">
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
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-pink-500/30 to-purple-600/30 border border-pink-500/30 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-pink-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Bias Analytics</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Deep insights into media bias patterns and trends
            </p>
          </div>
        </div>
      </section>

      {/* 6 Bias Aspect Indicators */}
      <section className="py-8 relative z-10">
        <div className="container px-4 md:px-6">
          <div className="mb-8 animate-slide-up">
            <h2 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Bias Analysis</span> Indicators
            </h2>
            <p className="text-gray-400">Six key aspects analyzed in every article</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {biasAspects.map((aspect, index) => (
              <Card key={index} className="glass-effect border-white/20 card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${aspect.color} flex items-center justify-center`}>
                      <aspect.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{aspect.name}</h3>
                      <div className="text-2xl font-bold gradient-text">{aspect.value}%</div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{aspect.description}</p>
                  <div className="mt-4 w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${aspect.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${aspect.value}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bias Evolution Chart */}
      <section className="py-8 relative z-10">
        <div className="container px-4 md:px-6">
          <Card className="glass-effect border-white/20 mb-8 animate-slide-up">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-pink-500/30 to-purple-600/30 border border-pink-500/30 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-pink-400" />
                </div>
                <CardTitle className="text-2xl gradient-text">Bias Evolution (Last 30 Days)</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="w-full">
                  <ChartContainer
                    config={{
                      political: {
                        label: "Political Bias",
                        color: "#ef4444",
                      },
                      emotional: {
                        label: "Emotional Tone", 
                        color: "#f97316",
                      },
                      factual: {
                        label: "Factual Accuracy",
                        color: "#22c55e",
                      },
                      sensational: {
                        label: "Sensationalism",
                        color: "#a855f7",
                      },
                      source: {
                        label: "Source Quality",
                        color: "#3b82f6",
                      },
                      context: {
                        label: "Context Balance",
                        color: "#06b6d4",
                      },
                    }}
                    className="h-[500px] w-full"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart 
                        data={biasEvolutionData}
                        onMouseMove={(e) => {
                          if (e && e.activePayload && e.activePayload.length > 0) {
                            setHoveredData({
                              date: e.activeLabel,
                              data: e.activePayload
                            });
                            setHoveredIndex(e.activeTooltipIndex || 0);
                          }
                        }}
                        onMouseLeave={() => {
                          setHoveredData(null);
                          setHoveredIndex(null);
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="date" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        
                        {/* Vertical hover line */}
                        {hoveredIndex !== null && (
                          <ReferenceLine 
                            x={biasEvolutionData[hoveredIndex]?.date} 
                            stroke="rgba(255,255,255,0.6)" 
                            strokeWidth={2}
                            strokeDasharray="4 4"
                          />
                        )}
                        
                        <Line 
                          type="monotone" 
                          dataKey="political" 
                          stroke="#ef4444" 
                          strokeWidth={3}
                          dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 8, stroke: '#ef4444', strokeWidth: 3, fill: '#ffffff' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="emotional" 
                          stroke="#f97316" 
                          strokeWidth={3}
                          dot={{ fill: '#f97316', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 8, stroke: '#f97316', strokeWidth: 3, fill: '#ffffff' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="factual" 
                          stroke="#22c55e" 
                          strokeWidth={3}
                          dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 8, stroke: '#22c55e', strokeWidth: 3, fill: '#ffffff' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="sensational" 
                          stroke="#a855f7" 
                          strokeWidth={3}
                          dot={{ fill: '#a855f7', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 8, stroke: '#a855f7', strokeWidth: 3, fill: '#ffffff' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="source" 
                          stroke="#3b82f6" 
                          strokeWidth={3}
                          dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 8, stroke: '#3b82f6', strokeWidth: 3, fill: '#ffffff' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="context" 
                          stroke="#06b6d4" 
                          strokeWidth={3}
                          dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                          activeDot={{ r: 8, stroke: '#06b6d4', strokeWidth: 3, fill: '#ffffff' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </ChartContainer>

                  {/* Tooltip Panel - positioned below chart on mobile, to the right on desktop */}
                  <div className="mt-6 lg:mt-0 lg:absolute lg:top-0 lg:right-0 lg:w-80">
                    {hoveredData ? (
                      <div className="glass-effect border border-white/20 rounded-xl p-4 shadow-2xl backdrop-blur-md">
                        <p className="text-white font-semibold mb-3 text-center">{hoveredData.date}</p>
                        <div className="space-y-2">
                          {hoveredData.data.map((entry: any, index: number) => {
                            const biasTypeNames = {
                              political: "Political Bias",
                              emotional: "Emotional Tone", 
                              factual: "Factual Accuracy",
                              sensational: "Sensationalism",
                              source: "Source Quality",
                              context: "Context Balance"
                            };
                            
                            const descriptions = {
                              political: "Measures left/right political leaning",
                              emotional: "Analyzes emotional language intensity", 
                              factual: "Evaluates fact-checking quality",
                              sensational: "Detects clickbait and hyperbole",
                              source: "Assesses source credibility",
                              context: "Measures balanced reporting"
                            };

                            return (
                              <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-black/20">
                                <div 
                                  className="w-3 h-3 rounded-full" 
                                  style={{ backgroundColor: entry.color }}
                                ></div>
                                <div className="flex-1">
                                  <div className="text-white font-medium text-sm">
                                    {biasTypeNames[entry.dataKey as keyof typeof biasTypeNames]}
                                  </div>
                                  <div className="text-gray-300 text-xs">
                                    {descriptions[entry.dataKey as keyof typeof descriptions]}
                                  </div>
                                  <div className="text-white font-bold">
                                    {entry.value}%
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="glass-effect border border-white/20 rounded-xl p-4 shadow-2xl backdrop-blur-md opacity-50">
                        <p className="text-gray-400 text-center">Hover over the chart to see detailed bias information</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Grid */}
          <div className="grid gap-8 md:grid-cols-2 mb-8">
            {/* Source Bias Distribution */}
            <Card className="glass-effect border-white/20 card-hover animate-slide-up">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-pink-400" />
                  Source Bias Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-48 text-gray-400">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-gray-600/50 to-gray-700/50 border border-gray-600/30 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-gray-400" />
                    </div>
                    <p>No source data available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Political Lean by Source */}
            <Card className="glass-effect border-white/20 card-hover animate-slide-up">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-400" />
                  Political Lean by Source
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-48 text-gray-400">
                  <div className="text-center">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-gray-600/50 to-gray-700/50 border border-gray-600/30 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-gray-400" />
                    </div>
                    <p>No source data available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Trending Narratives */}
          <Card className="glass-effect border-white/20 card-hover animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-purple-500/30 to-indigo-600/30 border border-purple-500/30 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                </div>
                Top Trending Narratives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                {trendingNarratives.map((narrative, index) => (
                  <div key={index} className="glass-effect rounded-2xl p-6 card-hover animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${narrative.gradient} flex items-center justify-center mb-4`}>
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold mb-3 leading-tight">{narrative.name}</h3>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-300">{narrative.articles} articles</span>
                      <Badge className={`bg-gradient-to-r ${narrative.gradient} text-white px-3 py-1 rounded-full`}>
                        {narrative.trending}% trending
                      </Badge>
                    </div>
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
