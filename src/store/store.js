import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set, get) => ({
      // Theme
      theme: 'dark',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),

      // User Authentication
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      logout: () => set({ user: null, isAuthenticated: false }),
      login: (email, password) => {
        // Mock authentication - replace with real auth later
        if (email && password) {
          const user = {
            id: '1',
            email,
            name: email.split('@')[0],
            role: 'admin'
          }
          set({ user, isAuthenticated: true })
          return { success: true, user }
        }
        return { success: false, error: 'Invalid credentials' }
      },

      // Cart/Bookings
      bookings: [],
      addBooking: (booking) => set((state) => ({ bookings: [...state.bookings, booking] })),
      removeBooking: (id) => set((state) => ({ bookings: state.bookings.filter(b => b.id !== id) })),

      // Favorites
      favorites: [],
      addFavorite: (venue) => set((state) => ({ favorites: [...state.favorites, venue] })),
      removeFavorite: (id) => set((state) => ({ favorites: state.favorites.filter(f => f.id !== id) })),
      isFavorite: (id) => get().favorites.some(f => f.id === id),

      // UI State
      sidebarOpen: false,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),

      // Modals
      modals: {
        research: false,
        support: false,
        booking: false,
        venueList: false,
      },
      openModal: (modal) => set((state) => ({ 
        modals: { ...state.modals, [modal]: true } 
      })),
      closeModal: (modal) => set((state) => ({ 
        modals: { ...state.modals, [modal]: false } 
      })),

      // Search/Filters
      searchQuery: '',
      setSearchQuery: (query) => set({ searchQuery: query }),
      
      filters: {
        category: 'all',
        priceRange: [0, 10000],
        location: '',
        amenities: [],
      },
      setFilters: (filters) => set((state) => ({ 
        filters: { ...state.filters, ...filters } 
      })),

      // Notifications
      notifications: [],
      addNotification: (notification) => set((state) => ({ 
        notifications: [...state.notifications, { ...notification, id: Date.now() }] 
      })),
      removeNotification: (id) => set((state) => ({ 
        notifications: state.notifications.filter(n => n.id !== id) 
      })),

      // Loading States
      loading: {
        venues: false,
        bookings: false,
        user: false,
      },
      setLoading: (key, value) => set((state) => ({ 
        loading: { ...state.loading, [key]: value } 
      })),

      // Venues Data
      venues: [],
      setVenues: (venues) => set({ venues }),
      addVenue: (venue) => set((state) => ({ venues: [...state.venues, venue] })),
      updateVenue: (id, updates) => set((state) => ({ 
        venues: state.venues.map(v => v.id === id ? { ...v, ...updates } : v) 
      })),

      // House Parties
      houseParties: [],
      setHouseParties: (parties) => set({ houseParties: parties }),
      addHouseParty: (party) => set((state) => ({ houseParties: [...state.houseParties, party] })),
      joinHouseParty: (partyId, userId) => set((state) => ({
        houseParties: state.houseParties.map(p => 
          p.id === partyId 
            ? { ...p, attendees: [...p.attendees, userId] }
            : p
        )
      })),

      // Research/Jobs
      research: [],
      jobs: [
        {
          id: '1',
          title: 'Frontend Developer',
          description: 'We are looking for a skilled Frontend Developer to join our team and help build amazing user experiences.',
          location: 'Mumbai, Maharashtra',
          type: 'Full-time',
          department: 'Engineering',
          requirements: ['React', 'TypeScript', 'Tailwind CSS', '3+ years experience'],
          salary: '₹8-12 LPA',
          postedDate: '2024-01-15',
          isActive: true
        },
        {
          id: '2',
          title: 'UI/UX Designer',
          description: 'Creative UI/UX Designer needed to design beautiful and intuitive interfaces for our products.',
          location: 'Remote',
          type: 'Full-time',
          department: 'Design',
          requirements: ['Figma', 'Adobe Creative Suite', 'User Research', '2+ years experience'],
          salary: '₹6-10 LPA',
          postedDate: '2024-01-10',
          isActive: true
        },
        {
          id: '3',
          title: 'Backend Developer Intern',
          description: 'Exciting internship opportunity for backend development with Node.js and MongoDB.',
          location: 'Pune, Maharashtra',
          type: 'Internship',
          department: 'Engineering',
          requirements: ['Node.js', 'MongoDB', 'JavaScript', 'Currently pursuing CS/IT'],
          salary: '₹25,000/month',
          postedDate: '2024-01-05',
          isActive: true
        }
      ],
      setResearch: (research) => set({ research }),
      // Helpers to persist research items to localStorage (used by admin dashboard)
      loadResearchFromStorage: () => {
        try {
          const raw = localStorage.getItem('trinix_research_items')
          if (!raw) return []
          const parsed = JSON.parse(raw)
          if (Array.isArray(parsed)) {
            set({ research: parsed })
            return parsed
          }
        } catch (e) {
          console.error('Failed to load research from storage', e)
        }
        return []
      },
      saveResearchToStorage: (items) => {
        try {
          localStorage.setItem('trinix_research_items', JSON.stringify(items))
          set({ research: items })
        } catch (e) {
          console.error('Failed to save research to storage', e)
        }
      },
      setJobs: (jobs) => set({ jobs }),
      addResearch: (item) => set((state) => ({ research: [...state.research, item] })),
      addJob: (job) => set((state) => ({ 
        jobs: [...state.jobs, { ...job, id: Date.now().toString(), postedDate: new Date().toISOString().split('T')[0], isActive: true }] 
      })),
      updateJob: (id, updates) => set((state) => ({ 
        jobs: state.jobs.map(job => job.id === id ? { ...job, ...updates } : job) 
      })),
      deleteJob: (id) => set((state) => ({ 
        jobs: state.jobs.filter(job => job.id !== id) 
      })),
      toggleJobStatus: (id) => set((state) => ({ 
        jobs: state.jobs.map(job => job.id === id ? { ...job, isActive: !job.isActive } : job) 
      })),

      // Stats
      stats: {
        venuesListed: 0,
        partiesOrganized: 0,
        doctorsRegistered: 0,
        usersActive: 0,
      },
      setStats: (stats) => set({ stats }),
      updateStats: (updates) => set((state) => ({ 
        stats: { ...state.stats, ...updates } 
      })),
    }),
    {
      name: 'trinix-store',
      partialize: (state) => ({
        theme: state.theme,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        favorites: state.favorites,
        bookings: state.bookings,
        jobs: state.jobs,
      }),
    }
  )
)
