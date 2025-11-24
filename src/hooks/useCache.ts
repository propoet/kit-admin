import WebStorageCache from 'web-storage-cache'

type CacheType = 'localStorage' | 'sessionStorage'

export const CACHE_KEY = {}

export const useCache = (type: CacheType = 'localStorage') => {
  const wsCache = new WebStorageCache({
    storage: type,
  })

  return wsCache
}
