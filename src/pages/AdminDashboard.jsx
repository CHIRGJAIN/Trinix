import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LOCAL_KEY = 'trinix_research_items'

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [items, setItems] = useState([])
  const [title, setTitle] = useState('')
  const [authors, setAuthors] = useState('')
  const [abstractText, setAbstractText] = useState('')
  const [link, setLink] = useState('')

  useEffect(() => {
    const auth = localStorage.getItem('trinix_admin_authenticated')
    if (!auth) navigate('/admin/login')
    const raw = localStorage.getItem(LOCAL_KEY)
    if (raw) setItems(JSON.parse(raw))
  }, [navigate])

  const saveItems = (next) => {
    setItems(next)
    localStorage.setItem(LOCAL_KEY, JSON.stringify(next))
  }

  const handleAdd = (e) => {
    e.preventDefault()
    const newItem = {
      id: Date.now(),
      title,
      authors,
      abstract: abstractText,
      link,
      createdAt: new Date().toISOString(),
    }
    const next = [newItem, ...items]
    saveItems(next)
    setTitle(''); setAuthors(''); setAbstractText(''); setLink('')
  }

  const handleDelete = (id) => {
    const next = items.filter(i => i.id !== id)
    saveItems(next)
  }

  const logout = () => {
    localStorage.removeItem('trinix_admin_authenticated')
    navigate('/')
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <div>
          <button onClick={logout} className="px-3 py-1 border rounded">Logout</button>
        </div>
      </div>

      <form onSubmit={handleAdd} className="mb-6 bg-white p-4 rounded shadow">
        <h2 className="font-medium mb-2">Add Research Paper</h2>
        <div className="grid grid-cols-1 gap-3">
          <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="border rounded px-2 py-1 text-black placeholder-gray-500" required />
          <input placeholder="Authors (comma separated)" value={authors} onChange={e => setAuthors(e.target.value)} className="border rounded px-2 py-1 text-black placeholder-gray-500" />
          <textarea placeholder="Abstract" value={abstractText} onChange={e => setAbstractText(e.target.value)} className="border rounded px-2 py-1 text-black placeholder-gray-500" rows={4} />
          <input placeholder="Link to PDF or URL" value={link} onChange={e => setLink(e.target.value)} className="border rounded px-2 py-1 text-black placeholder-gray-500" />
          <div>
            <button className="bg-green-600 text-white px-3 py-1 rounded" type="submit">Add Paper</button>
          </div>
        </div>
      </form>

      <section>
        <h2 className="text-xl font-medium mb-3">Existing Papers</h2>
        {items.length === 0 && <div className="text-gray-600">No papers yet.</div>}
        <ul className="space-y-3">
          {items.map(item => (
            <li key={item.id} className="p-3 border rounded bg-white flex justify-between items-start">
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-gray-600">{item.authors}</div>
                <div className="mt-2 text-sm">{item.abstract}</div>
                {item.link && <div className="mt-2"><a className="text-blue-600 underline" href={item.link} target="_blank" rel="noreferrer">Open Link</a></div>}
              </div>
              <div>
                <button onClick={() => handleDelete(item.id)} className="text-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default AdminDashboard
