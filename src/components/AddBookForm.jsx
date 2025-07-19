import { useState } from 'react'

function AddBookForm({ onAdd, formWidthClass = 'max-w-2xl' }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !author.trim()) return
    onAdd({ title, author })
    setTitle('')
    setAuthor('')
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-[#232946] rounded-xl shadow-md p-3 mb-6 flex flex-col sm:flex-row gap-2 items-center w-full ${formWidthClass} mx-auto border border-blue-900 text-sm`}>
      <input
        type="text"
        placeholder="Judul Buku"
        className="flex-1 border border-blue-800 bg-[#1e293b] text-white placeholder:text-slate-400 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Penulis"
        className="flex-1 border border-blue-800 bg-[#1e293b] text-white placeholder:text-slate-400 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-700"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-700 to-purple-700 text-white font-semibold rounded-lg px-4 py-1.5 text-sm hover:from-blue-800 hover:to-purple-800 transition-colors min-w-[80px]"
      >
        Tambah
      </button>
    </form>
  )
}

export default AddBookForm 