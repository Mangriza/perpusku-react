
import Header from './components/Header'
import BookList from './components/BookList'
import AddBookForm from './components/AddBookForm'
import { useState, useEffect } from 'react'

function App() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem('books')
    if (saved) return JSON.parse(saved)
    return []
  })
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  const handleAddBook = (book) => {
    setBooks(prev => [book, ...prev])
  }

  const handleDeleteBook = (index) => {
    setBooks(prev => prev.filter((_, i) => i !== index))
  }

  const handleEditBook = (index, newBook) => {
    setBooks(prev => prev.map((b, i) => i === index ? newBook : b))
  }

  const filteredBooks = books.filter(book => {
    const q = searchQuery.trim()
    return book.title.includes(q) || book.author.includes(q)
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#312e81] relative overflow-hidden text-sm">
      {/* Galaxy stars layer */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute w-1 h-1 bg-white/70 rounded-full top-1/4 left-1/3 blur-sm animate-pulse" />
        <div className="absolute w-1.5 h-1.5 bg-blue-300/80 rounded-full top-2/3 left-1/2 blur animate-pulse" />
        <div className="absolute w-0.5 h-0.5 bg-purple-300/80 rounded-full top-1/5 left-2/3 blur-sm animate-pulse" />
        <div className="absolute w-1 h-1 bg-white/60 rounded-full top-3/4 left-1/4 blur-sm animate-pulse" />
        <div className="absolute w-0.5 h-0.5 bg-blue-200/80 rounded-full top-1/2 left-3/4 blur animate-pulse" />
      </div>
      <Header />
      <main className="max-w-4xl mx-auto relative z-10">
        <div className="w-full max-w-4xl mx-auto mt-4 mb-4">
          <input
            type="text"
            placeholder="Cari judul atau penulis..."
            className="w-full border border-blue-900 bg-[#1e293b] text-white placeholder:text-slate-400 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-700 shadow-sm text-sm"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <AddBookForm onAdd={handleAddBook} formWidthClass="max-w-4xl" />
        <BookList books={filteredBooks} onDelete={handleDeleteBook} onEdit={handleEditBook} />
      </main>
    </div>
  )
}

export default App
