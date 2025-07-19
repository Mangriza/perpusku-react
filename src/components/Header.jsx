import { Container } from "postcss"

function Header() {
  return (
    <header className="bg-gradient-to-r from-[#1e293b] to-[#312e81] text-white shadow-lg text-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-300 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
          Perpustakaan Galaxy
        </h1>
        <nav className="hidden md:flex gap-4 text-base font-medium">
          <a href="#" className="hover:text-blue-300 transition-colors">Home</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Buku</a>
          <a href="#" className="hover:text-blue-300 transition-colors">Tentang</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
