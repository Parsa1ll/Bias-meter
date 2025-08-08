'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, ArrowLeft, ExternalLink, Share2, Sparkles } from 'lucide-react'
import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Footer } from "@/components/footer"

// Enhanced Hexagonal Bias Meter Component with smaller titles
function HexagonalBiasMeter({ biasData }: { biasData: any }) {
  const [animatedData, setAnimatedData] = useState(biasData)

  useEffect(() => {
    // Animate the values on mount
    const timer = setTimeout(() => {
      setAnimatedData(biasData)
    }, 500)
    return () => clearTimeout(timer)
  }, [biasData])

  const aspects = [
    { name: 'Political', value: animatedData.political, color: '#ef4444' },
    { name: 'Emotional', value: animatedData.emotional, color: '#f97316' },
    { name: 'Factual', value: animatedData.factual, color: '#22c55e' },
    { name: 'Sensational', value: animatedData.sensational, color: '#a855f7' },
    { name: 'Source', value: animatedData.source, color: '#3b82f6' },
    { name: 'Context', value: animatedData.context, color: '#06b6d4' }
  ]

  return (
    <div className="relative w-80 h-80 mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Background hexagon grid with glow effect */}
        {[20, 40, 60, 80, 100].map((radius, i) => (
          <polygon
            key={i}
            points="100,20 150,40 150,80 100,100 50,80 50,40"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            transform={`scale(${radius / 100})`}
            style={{ transformOrigin: '100px 60px' }}
            className="animate-pulse"
          />
        ))}
        
        {/* Animated bias data polygon */}
        <polygon
          points={aspects.map((aspect, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180)
            const radius = (aspect.value / 100) * 80
            const x = 100 + radius * Math.cos(angle)
            const y = 60 + radius * Math.sin(angle)
            return `${x},${y}`
          }).join(' ')}
          fill="url(#biasGradient)"
          stroke="#ec4899"
          strokeWidth="3"
          className="animate-pulse"
        />
        
        {/* Gradient definition */}
        <defs>
          <radialGradient id="biasGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.3)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
          </radialGradient>
        </defs>
        
        {/* Aspect labels and values with smaller text */}
        {aspects.map((aspect, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180)
          const labelRadius = 90
          const x = 100 + labelRadius * Math.cos(angle)
          const y = 60 + labelRadius * Math.sin(angle)
          
          return (
            <g key={i}>
              <circle 
                cx={x} 
                cy={y} 
                r="3" 
                fill={aspect.color}
                className="animate-pulse"
              />
              <text
                x={x}
                y={y - 8}
                textAnchor="middle"
                className="text-[10px] fill-white font-medium"
              >
                {aspect.name}
              </text>
              <text
                x={x}
                y={y + 15}
                textAnchor="middle"
                className="text-[10px] fill-gray-300"
              >
                {aspect.value}%
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}

export default function ArticleDetailPage() {
  const params = useParams()
  const articleId = params.id
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Mock article data with enhanced bias explanations
  const article = {
    id: articleId,
    title: "AI Breakthrough: New Model Achieves 95% Accuracy in Medical Diagnosis",
    source: "Medical News Today",
    date: "January 15, 2024",
    author: "Dr. Sarah Johnson",
    readTime: "5 min read",
    biasLevel: "Low Bias",
    biasColor: "from-green-500/80 to-emerald-500/80",
    narrative: "AI in Healthcare Revolution",
    url: "https://medicalnewstoday.com/articles/ai-breakthrough-medical-diagnosis",
    content: `A groundbreaking artificial intelligence system has achieved an unprecedented 95% accuracy rate in medical diagnosis, marking a significant milestone in the integration of AI technology in healthcare. The new system, developed by researchers at Stanford University in collaboration with several major hospitals, has been tested on over 100,000 medical cases spanning various conditions including cancer detection, cardiovascular disease, and neurological disorders. "This represents a paradigm shift in how we approach medical diagnosis," said Dr. Michael Chen, lead researcher on the project. "The AI system can process vast amounts of medical data in seconds, identifying patterns that might take human doctors hours or even days to recognize." The technology utilizes advanced machine learning algorithms trained on millions of medical records, imaging data, and clinical notes. What sets this system apart is its ability to explain its diagnostic reasoning, addressing one of the major concerns about AI in healthcare - the "black box" problem. However, the breakthrough has not been without controversy. Some medical professionals have raised concerns about the potential for over-reliance on AI systems, arguing that human judgment and patient interaction remain irreplaceable elements of medical care. Dr. Lisa Rodriguez, a practicing physician at Johns Hopkins Hospital, expressed cautious optimism: "While these results are impressive, we must remember that medicine is not just about diagnosis - it's about treating the whole person. AI can be a powerful tool, but it should augment, not replace, human medical expertise." The system has shown particular strength in early-stage cancer detection, where it identified malignant tumors with 98% accuracy - significantly higher than traditional screening methods. This could potentially save thousands of lives through earlier intervention. Critics have also pointed to potential biases in the training data, noting that AI systems can perpetuate existing healthcare disparities if not carefully monitored. The research team has acknowledged these concerns and is working on ensuring the system performs equally well across different demographic groups. The FDA has fast-tracked the review process for this technology, with clinical trials expected to begin in major hospitals across the country within the next six months. If approved, the system could be widely available within two years. This development comes at a time when healthcare systems worldwide are facing unprecedented challenges, from staff shortages to increasing patient loads. AI-assisted diagnosis could help alleviate some of these pressures while potentially improving patient outcomes. The economic implications are also significant, with analysts predicting that widespread adoption of such AI systems could reduce healthcare costs by up to 20% while improving diagnostic accuracy and speed.`,
    biasData: {
      political: 25,
      emotional: 45,
      factual: 89,
      sensational: 30,
      source: 75,
      context: 65
    },
    highlightedPhrases: [
      { 
        text: "groundbreaking", 
        type: "emotional", 
        color: "#f97316",
        explanation: "Emotional language that amplifies the significance of the discovery",
        implication: "May create unrealistic expectations about the technology's impact"
      },
      { 
        text: "unprecedented", 
        type: "emotional", 
        color: "#f97316",
        explanation: "Superlative language suggesting this has never happened before",
        implication: "Could overstate the novelty of the achievement"
      },
      { 
        text: "paradigm shift", 
        type: "sensational", 
        color: "#a855f7",
        explanation: "Buzzword suggesting revolutionary change in the field",
        implication: "May exaggerate the transformative nature of the development"
      },
      { 
        text: "controversy", 
        type: "political", 
        color: "#ef4444",
        explanation: "Introduces conflict without providing balanced context",
        implication: "Could polarize readers' opinions on AI in healthcare"
      },
      { 
        text: "fast-tracked", 
        type: "political", 
        color: "#ef4444",
        explanation: "Implies regulatory favoritism or rushed approval process",
        implication: "May suggest corners are being cut in safety evaluation"
      },
      { 
        text: "significant milestone", 
        type: "emotional", 
        color: "#f97316",
        explanation: "Emotionally charged phrase emphasizing importance",
        implication: "Could inflate the perceived impact of the research"
      }
    ]
  }

  const highlightText = (text: string) => {
    let highlightedText = text
    article.highlightedPhrases.forEach(phrase => {
      const regex = new RegExp(`\\b${phrase.text}\\b`, 'gi')
      highlightedText = highlightedText.replace(
        regex,
        `<span class="bias-highlight inline" style="background: linear-gradient(135deg, ${phrase.color}40, ${phrase.color}60); color: ${phrase.color}; padding: 2px 4px; border-radius: 4px; font-weight: 600; border: 1px solid ${phrase.color}30; cursor: help; position: relative;">
          ${phrase.text}
          <span class="bias-tooltip">
            <strong>${phrase.type.charAt(0).toUpperCase() + phrase.type.slice(1)} Bias:</strong><br/>
            ${phrase.explanation}<br/>
            <em>Implication: ${phrase.implication}</em>
          </span>
        </span>`
      )
    })
    return highlightedText
  }

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

      <div className="container px-4 md:px-6 py-8 relative z-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Article Content */}
          <div className="lg:col-span-2">
            {/* Back Button */}
            <Link href="/articles">
              <Button variant="ghost" className="mb-8 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-slide-up">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Articles
              </Button>
            </Link>

            {/* Article Header */}
            <div className="mb-8 animate-slide-up">
              <div className="flex items-center gap-4 mb-6">
                <Badge className={`bg-gradient-to-r ${article.biasColor} text-white px-4 py-2 rounded-full animate-pulse`}>
                  {article.biasLevel}
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500/80 to-indigo-500/80 text-white px-4 py-2 rounded-full">
                  {article.narrative}
                </Badge>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-6 leading-tight gradient-text">
                {article.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-300 mb-6">
                <span className="font-medium">{article.source}</span>
                <span>{article.date}</span>
                <span>{article.author}</span>
                <span>{article.readTime}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Button className="bg-gradient-to-r from-blue-500/80 to-cyan-600/80 hover:from-blue-600/80 hover:to-cyan-700/80 transition-all duration-300 hover:scale-105 rounded-2xl">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Original
                </Button>
                <Button className="glass-effect border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 rounded-2xl">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Analysis
                </Button>
              </div>
            </div>

            {/* Article Content */}
            <Card className="glass-effect border-white/20 mb-8 animate-slide-up">
              <CardContent className="p-8">
                <div 
                  className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-lg"
                  dangerouslySetInnerHTML={{ 
                    __html: highlightText(article.content)
                  }}
                />
              </CardContent>
            </Card>

            {/* Bias Legend */}
            <Card className="glass-effect border-white/20 animate-slide-up">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-pink-400" />
                  Highlighted Bias Indicators
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3 p-3 glass-effect rounded-xl">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-red-500/80 to-rose-500/80"></div>
                    <span className="text-gray-300 font-medium">Political Language</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 glass-effect rounded-xl">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-orange-500/80 to-amber-500/80"></div>
                    <span className="text-gray-300 font-medium">Emotional Language</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 glass-effect rounded-xl">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-purple-500/80 to-violet-500/80"></div>
                    <span className="text-gray-300 font-medium">Sensational Terms</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 glass-effect rounded-xl">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-green-500/80 to-emerald-500/80"></div>
                    <span className="text-gray-300 font-medium">Factual Statements</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-4">
                  <strong>Tip:</strong> Hover over highlighted phrases in the article to see detailed bias explanations and implications.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Bias Analysis Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="glass-effect border-white/20 animate-slide-up">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center gradient-text">Bias Analysis</h3>
                  
                  <HexagonalBiasMeter biasData={article.biasData} />
                  
                  <div className="mt-8 grid grid-cols-2 gap-6 text-center">
                    <div className="p-4 glass-effect rounded-2xl">
                      <div className="text-gray-400 mb-2 text-sm">Overall Score</div>
                      <div className="text-3xl font-bold gradient-text">42%</div>
                    </div>
                    <div className="p-4 glass-effect rounded-2xl">
                      <div className="text-gray-400 mb-2 text-sm">Confidence</div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">94%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect border-white/20 animate-slide-up">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Detailed Breakdown</h3>
                  <div className="space-y-6">
                    {[
                      { name: 'Political Bias', value: article.biasData.political, gradient: 'from-red-500/80 to-rose-500/80' },
                      { name: 'Emotional Tone', value: article.biasData.emotional, gradient: 'from-orange-500/80 to-amber-500/80' },
                      { name: 'Factual Accuracy', value: article.biasData.factual, gradient: 'from-green-500/80 to-emerald-500/80' },
                      { name: 'Sensationalism', value: article.biasData.sensational, gradient: 'from-purple-500/80 to-violet-500/80' },
                      { name: 'Source Quality', value: article.biasData.source, gradient: 'from-blue-500/80 to-cyan-500/80' },
                      { name: 'Context Balance', value: article.biasData.context, gradient: 'from-cyan-500/80 to-teal-500/80' }
                    ].map((metric, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-gray-300 font-medium">{metric.name}</span>
                          <span className="text-white font-bold">{metric.value}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`bg-gradient-to-r ${metric.gradient} h-3 rounded-full transition-all duration-1000 ease-out animate-pulse`}
                            style={{ width: `${metric.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
