import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // NOTE: simple client-side auth. Replace with proper backend in production.
  const handleSubmit = (e) => {
    e.preventDefault()
    const ADMIN_EMAIL = 'admin@trinix.local'
    const ADMIN_PASS = 'admin123'
    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
      localStorage.setItem('trinix_admin_authenticated', 'true')
      navigate('/admin')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-12 text-black">
      <h2 className="text-2xl font-semibold mb-4 text-black">Admin Login</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-black">
          <span className="text-sm text-black">Email</span>
          <input className="mt-1 block w-full border rounded px-3 py-2 text-black placeholder-gray-500" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label className="block mb-4 text-black">
          <span className="text-sm text-black">Password</span>
          <input type="password" className="mt-1 block w-full border rounded px-3 py-2 text-black placeholder-gray-500" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <div className="flex items-center justify-between">
          <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default AdminLogin
