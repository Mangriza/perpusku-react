import { useState } from 'react'

function BookList({ books, onDelete, onEdit }) {
  const [editIndex, setEditIndex] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editAuthor, setEditAuthor] = useState('')

  const startEdit = (idx) => {
    setEditIndex(idx)
    setEditTitle(books[idx].title)
    setEditAuthor(books[idx].author)
  }

  const cancelEdit = () => {
    setEditIndex(null)
    setEditTitle('')
    setEditAuthor('')
  }

  const saveEdit = (idx) => {
    if (!editTitle.trim() || !editAuthor.trim()) return
    onEdit(idx, { title: editTitle, author: editAuthor })
    cancelEdit()
  }

  return(
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <div key={index} className="bg-[#232946] rounded-xl shadow-md hover:shadow-lg group transition-all duration-300 p-4 border border-blue-900 flex flex-col justify-between min-h-[100px] text-sm">
            {editIndex === index ? (
              <div className="flex flex-col gap-2">
                <input
                  className="border border-blue-800 bg-[#1e293b] text-white rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-blue-700"
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                />
                <input
                  className="border border-blue-800 bg-[#1e293b] text-white rounded-lg px-2 py-1 text-sm focus:ring-2 focus:ring-blue-700"
                  value={editAuthor}
                  onChange={e => setEditAuthor(e.target.value)}
                />
                <div className="flex gap-1 mt-1">
                  <button onClick={() => saveEdit(index)} className="bg-gradient-to-r from-blue-700 to-purple-700 text-white px-2 py-1 rounded text-xs hover:from-blue-800 hover:to-purple-800">Simpan</button>
                  <button onClick={cancelEdit} className="bg-slate-700 text-slate-200 px-2 py-1 rounded text-xs hover:bg-slate-600">Batal</button>
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-300 transition-colors truncate">{book.title}</h3>
                <p className="text-blue-200 text-xs italic mb-2 truncate">by <span className="font-medium text-blue-100">{book.author}</span></p>
                <div className="flex gap-1 mt-auto">
                  <button onClick={() => startEdit(index)} className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-2 py-1 rounded text-xs hover:from-yellow-600 hover:to-yellow-700">Edit</button>
                  <button onClick={() => onDelete(index)} className="bg-gradient-to-r from-red-600 to-purple-800 text-white px-2 py-1 rounded text-xs hover:from-red-700 hover:to-purple-900">Hapus</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookList