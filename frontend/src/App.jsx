import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) return
    
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setResults([
        { id: 1, title: 'Example Snippet', similarity: 0.95 },
        { id: 2, title: 'Another Code', similarity: 0.87 },
      ])
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 p-4">
        <h1 className="text-2xl font-bold">DevKB Web</h1>
      </header>
      
      <main className="p-8">
        <form onSubmit={handleSearch} className="mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your knowledge base..."
            className="w-full p-4 bg-gray-800 rounded-lg text-white border border-gray-700"
          />
        </form>

        {loading && <p>Searching...</p>}
        
        <div className="space-y-4">
          {results.map((result) => (
            <div key={result.id} className="p-4 bg-gray-800 rounded-lg">
              <h3 className="font-bold">{result.title}</h3>
              <p className="text-sm text-gray-400">Similarity: {(result.similarity * 100).toFixed(1)}%</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
